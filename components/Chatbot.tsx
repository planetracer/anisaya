'use client';

import { useState } from 'react';
import Link from 'next/link';

type Message = {
  id: string;
  text: string;
  sender: 'bot' | 'visitor';
  timestamp: Date;
};

type ChatState = 'menu' | 'quote' | 'question' | 'booking' | 'contact';

interface ChatbotInquiry {
  name: string;
  email: string;
  phone: string;
  address?: string;
  zipCode: string;
  serviceArea: boolean;
  preferredDate?: string;
  preferredTime?: string;
  message: string;
  timestamp: Date;
}

interface ChatbotProps {
  initialOpen?: boolean;
}

export default function Chatbot({ initialOpen = false }: ChatbotProps) {
  const [open, setOpen] = useState(initialOpen);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to help with pricing, answer questions, or schedule a cleaning. What can I do for you?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [chatState, setChatState] = useState<ChatState>('menu');
  const [inquiry, setInquiry] = useState<Partial<ChatbotInquiry>>({});
  const [currentField, setCurrentField] = useState<string>('');

  // Service area zip codes
  const SERVICE_AREA_ZIPS = ['75013', '75074', '75075', '75001', '75002', '75003'];
  const COMMON_QUESTIONS: Record<string, string> = {
    pricing:
      "Our pricing starts at $120 for standard cleaning, $190 for deep cleaning, and $230 for move-in/move-out services. The final price depends on your home size, type of service, and frequency. Would you like a quick quote?",
    included:
      "Standard cleaning includes: kitchens (counters, sink, appliances), bathrooms (toilet, tub, mirrors), bedrooms & living areas (dusting, vacuuming), and floors throughout. Check our services page for detailed breakdowns of what's included in each service type.",
    schedule:
      "We offer cleaning Monday-Saturday, 8am-2pm. You can book through our instant quote form (60 seconds!) or I can help you schedule right here. What works better for you?",
    promo:
      "New clients get $25 off through end of year with code ANI25 on any service! This applies to all cleaning types. Want to get your quote now?",
    cancel:
      "No problem! You can reschedule or cancel through your booking confirmation email, or I can help you reschedule right now. What would work better?",
    coverage:
      "We serve Allen, Plano, McKinney, and Frisco. What's your zip code so I can confirm we service your area?",
    guarantee:
      "We guarantee 100% satisfaction. If you're not happy with your clean, we'll re-clean for free within 24 hours. No questions asked!",
  };

  const addMessage = (text: string, sender: 'bot' | 'visitor') => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text,
        sender,
        timestamp: new Date(),
      },
    ]);
  };

  const checkServiceArea = (zipCode: string): boolean => {
    return SERVICE_AREA_ZIPS.includes(zipCode);
  };

  const handleQuickReply = (action: string) => {
    addMessage(action, 'visitor');

    setTimeout(() => {
      switch (action) {
        case 'Get a quote':
          addMessage(
            "Great! I'll help you get a quote. To start, what's your zip code? This helps me confirm we serve your area.",
            'bot'
          );
          setChatState('quote');
          setCurrentField('zipCode');
          break;

        case "Answer my question":
          addMessage('What would you like to know? Here are some common questions:', 'bot');
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                id: Date.now().toString(),
                text: 'questions',
                sender: 'bot',
                timestamp: new Date(),
              },
            ]);
          }, 300);
          setChatState('question');
          break;

        case 'Schedule a cleaning':
          addMessage(
            "Excellent! Let's get you scheduled. First, what's your zip code?",
            'bot'
          );
          setChatState('booking');
          setCurrentField('zipCode');
          break;

        case 'Talk to a person':
          addMessage(
            "I'll collect your info so our team can reach out to you right away. What's your name?",
            'bot'
          );
          setChatState('contact');
          setCurrentField('name');
          break;

        default:
          break;
      }
    }, 500);
  };

  const handleQuestionClick = (question: string) => {
    addMessage(question, 'visitor');
    setTimeout(() => {
      const response = COMMON_QUESTIONS[question] || "Great question! Let me help with that.";
      addMessage(response, 'bot');

      if (question === 'coverage' || question === 'pricing' || question === 'schedule') {
        setTimeout(() => {
          addMessage(
            'Would you like to get a quote or schedule a cleaning?',
            'bot'
          );
          setChatState('menu');
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              text: 'quote_or_booking',
              sender: 'bot',
              timestamp: new Date(),
            },
          ]);
        }, 500);
      }
    }, 500);
  };

  const handleTextInput = (text: string) => {
    if (!text.trim()) return;

    addMessage(text, 'visitor');
    setCurrentField('');

    setTimeout(() => {
      if (chatState === 'quote') {
        handleQuoteFlow(text);
      } else if (chatState === 'booking') {
        handleBookingFlow(text);
      } else if (chatState === 'contact') {
        handleContactFlow(text);
      } else if (chatState === 'question') {
        // Check for keyword match in common questions
        const matched = Object.keys(COMMON_QUESTIONS).find((key) =>
          text.toLowerCase().includes(key)
        );
        if (matched) {
          handleQuestionClick(matched);
        } else {
          addMessage(
            'Thanks for your question! For detailed answers, check our FAQ or click "Talk to a person" so our team can help.',
            'bot'
          );
        }
      }
    }, 500);
  };

  const handleQuoteFlow = (text: string) => {
    if (currentField === 'zipCode' && !inquiry.zipCode) {
      if (!text.match(/^\d{5}$/)) {
        addMessage('Please enter a valid 5-digit zip code.', 'bot');
        return;
      }

      const isServiceArea = checkServiceArea(text);
      setInquiry((prev) => ({ ...prev, zipCode: text, serviceArea: isServiceArea }));

      if (!isServiceArea) {
        addMessage(
          "We don't currently serve that zip code yet, but we're expanding soon! Enter your email to get notified when we reach your area.",
          'bot'
        );
        setCurrentField('email');
      } else {
        addMessage(
          `Great! We serve ${text}. What service are you interested in?\n\n• Standard cleaning ($120+)\n• Deep cleaning ($190+)\n• Move-in/Move-out ($230+)`,
          'bot'
        );
        setCurrentField('service');
      }
    } else if (currentField === 'email' && !inquiry.email) {
      if (!text.includes('@')) {
        addMessage('Please enter a valid email address.', 'bot');
        return;
      }
      setInquiry((prev) => ({ ...prev, email: text }));
      addMessage("Thanks! We'll notify you as soon as we expand to your area.", 'bot');
      setTimeout(() => {
        addMessage('Can I help with anything else?', 'bot');
        setChatState('menu');
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            text: 'menu_options',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
      }, 500);
    } else if (currentField === 'service') {
      const cleaningType = text.toLowerCase();
      if (cleaningType.includes('standard')) {
        setInquiry((prev) => ({ ...prev, message: text }));
        addMessage(
          "Perfect! For the most accurate quote, I recommend our 60-second instant quote form - it's faster and shows exact pricing for your home size. Want me to link you to that?",
          'bot'
        );
      } else if (cleaningType.includes('deep')) {
        setInquiry((prev) => ({ ...prev, message: text }));
        addMessage(
          'Deep cleaning is perfect for first-time cleans or thorough refreshes. Get your personalized quote in our instant form!',
          'bot'
        );
      } else {
        setInquiry((prev) => ({ ...prev, message: text }));
        addMessage(
          'Great choice! Move-in/move-out cleaning is detailed and thorough. Get your quote now in our instant form!',
          'bot'
        );
      }
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            text: 'offer_quote_link',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
      }, 500);
    }
  };

  const handleBookingFlow = (text: string) => {
    if (currentField === 'zipCode' && !inquiry.zipCode) {
      if (!text.match(/^\d{5}$/)) {
        addMessage('Please enter a valid 5-digit zip code.', 'bot');
        return;
      }

      const isServiceArea = checkServiceArea(text);
      setInquiry((prev) => ({ ...prev, zipCode: text, serviceArea: isServiceArea }));

      if (!isServiceArea) {
        addMessage(
          "Unfortunately, we don't serve that zip code yet. Would you like to join our waitlist?",
          'bot'
        );
        setCurrentField('email');
      } else {
        addMessage(
          `Perfect! We serve ${text}. Now I'll need a few details. What's your name?`,
          'bot'
        );
        setCurrentField('name');
      }
    } else if (currentField === 'name' && !inquiry.name) {
      setInquiry((prev) => ({ ...prev, name: text }));
      addMessage(`Nice to meet you, ${text}! What's your email?`, 'bot');
      setCurrentField('email');
    } else if (currentField === 'email' && !inquiry.email) {
      if (!text.includes('@')) {
        addMessage('Please enter a valid email address.', 'bot');
        return;
      }
      setInquiry((prev) => ({ ...prev, email: text }));
      addMessage('Great! And your phone number?', 'bot');
      setCurrentField('phone');
    } else if (currentField === 'phone' && !inquiry.phone) {
      if (!text.replace(/\D/g, '').match(/^\d{10}$/)) {
        addMessage('Please enter a valid 10-digit phone number.', 'bot');
        return;
      }
      setInquiry((prev) => ({ ...prev, phone: text }));

      saveInquiry({
        ...inquiry,
        name: inquiry.name || '',
        email: inquiry.email || '',
        phone: text,
        zipCode: inquiry.zipCode || '',
        serviceArea: inquiry.serviceArea || false,
        message: 'Booking inquiry via chatbot',
        timestamp: new Date(),
      });

      addMessage(
        `Perfect, ${inquiry.name}! Our team will reach out to confirm your booking within 1 hour. Or you can use our instant quote form for immediate scheduling.`,
        'bot'
      );
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            text: 'offer_quote_link',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
      }, 500);
    }
  };

  const handleContactFlow = (text: string) => {
    if (currentField === 'name' && !inquiry.name) {
      setInquiry((prev) => ({ ...prev, name: text }));
      addMessage(`Hi ${text}! What's your email?`, 'bot');
      setCurrentField('email');
    } else if (currentField === 'email' && !inquiry.email) {
      if (!text.includes('@')) {
        addMessage('Please enter a valid email address.', 'bot');
        return;
      }
      setInquiry((prev) => ({ ...prev, email: text }));
      addMessage('And your phone number?', 'bot');
      setCurrentField('phone');
    } else if (currentField === 'phone' && !inquiry.phone) {
      if (!text.replace(/\D/g, '').match(/^\d{10}$/)) {
        addMessage('Please enter a valid 10-digit phone number.', 'bot');
        return;
      }
      setInquiry((prev) => ({ ...prev, phone: text }));
      addMessage("What's your zip code?", 'bot');
      setCurrentField('zipCode');
    } else if (currentField === 'zipCode' && !inquiry.zipCode) {
      if (!text.match(/^\d{5}$/)) {
        addMessage('Please enter a valid 5-digit zip code.', 'bot');
        return;
      }
      const isServiceArea = checkServiceArea(text);
      setInquiry((prev) => ({ ...prev, zipCode: text, serviceArea: isServiceArea }));
      addMessage('Finally, what can our team help you with?', 'bot');
      setCurrentField('message');
    } else if (currentField === 'message') {
      saveInquiry({
        ...inquiry,
        name: inquiry.name || '',
        email: inquiry.email || '',
        phone: inquiry.phone || '',
        zipCode: inquiry.zipCode || '',
        serviceArea: inquiry.serviceArea || false,
        message: text,
        timestamp: new Date(),
      });

      addMessage(
        "Thanks for reaching out! Our team will get back to you within 2 hours. You'll receive a confirmation at the email address you provided.",
        'bot'
      );
      setTimeout(() => {
        addMessage('Is there anything else I can help with?', 'bot');
        setChatState('menu');
        setInquiry({});
        setCurrentField('');
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            text: 'menu_options',
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
      }, 1000);
    }
  };

  const saveInquiry = (inq: ChatbotInquiry) => {
    // In a real app, this would send to a backend API
    const savedInquiries = JSON.parse(localStorage.getItem('chatbot_inquiries') || '[]');
    savedInquiries.push(inq);
    localStorage.setItem('chatbot_inquiries', JSON.stringify(savedInquiries));
    console.log('Inquiry saved:', inq);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-brand-purple text-white rounded-full flex items-center justify-center shadow-lg hover:bg-brand-deep-purple transition-colors z-40 font-bold text-2xl"
        aria-label="Open chat"
      >
        💬
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-[20px] shadow-2xl flex flex-col z-50 border border-brand-lavender-mist overflow-hidden">
      {/* Header */}
      <div className="bg-brand-purple text-white p-4 rounded-t-[20px] flex items-center justify-between flex-shrink-0">
        <div>
          <h3 className="font-fredoka font-bold">Anisaya Cleaning</h3>
          <p className="text-sm text-brand-lavender-mist">Usually replies in 2 hours</p>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="text-white hover:opacity-80 text-2xl"
          aria-label="Close chat"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => {
          if (msg.text === 'questions') {
            return (
              <div key={msg.id} className="space-y-2">
                {Object.keys(COMMON_QUESTIONS).map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuestionClick(q)}
                    className="w-full text-left bg-brand-lavender-mist text-brand-ink px-3 py-2 rounded-lg hover:bg-brand-purple hover:text-white transition-colors text-sm font-semibold"
                  >
                    • {q === 'pricing' && 'How much does it cost?'}
                    {q === 'included' && 'What\'s included?'}
                    {q === 'schedule' && 'When can you come?'}
                    {q === 'promo' && 'Any promotions?'}
                    {q === 'cancel' && 'How do I reschedule?'}
                    {q === 'coverage' && 'Do you serve my area?'}
                    {q === 'guarantee' && 'What\'s your guarantee?'}
                  </button>
                ))}
              </div>
            );
          }

          if (msg.text === 'menu_options') {
            return (
              <div key={msg.id} className="space-y-2">
                {['Get a quote', 'Answer my question', 'Schedule a cleaning', 'Talk to a person'].map(
                  (option) => (
                    <button
                      key={option}
                      onClick={() => handleQuickReply(option)}
                      className="w-full bg-brand-purple text-white py-2 px-3 rounded-lg hover:bg-brand-deep-purple transition-colors text-sm font-semibold"
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
            );
          }

          if (msg.text === 'offer_quote_link') {
            return (
              <div key={msg.id} className="space-y-2">
                <Link
                  href="/quote"
                  className="block w-full bg-brand-purple text-white py-2 px-3 rounded-lg hover:bg-brand-deep-purple transition-colors text-sm font-semibold text-center"
                >
                  Get instant quote
                </Link>
                <button
                  onClick={() => {
                    addMessage('Talk to us', 'visitor');
                    setTimeout(() => {
                      addMessage('Our team will reach out to you soon!', 'bot');
                      setChatState('menu');
                    }, 300);
                  }}
                  className="w-full bg-brand-lavender-mist text-brand-ink py-2 px-3 rounded-lg hover:bg-brand-purple hover:text-white transition-colors text-sm font-semibold"
                >
                  Have a question?
                </button>
              </div>
            );
          }

          return (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.sender === 'bot'
                    ? 'bg-brand-lavender-mist text-brand-ink'
                    : 'bg-brand-purple text-white'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Area */}
      {currentField ? (
        <div className="border-t border-brand-lavender-mist p-4 flex gap-2 flex-shrink-0">
          <input
            type={currentField === 'email' ? 'email' : currentField === 'phone' ? 'tel' : 'text'}
            placeholder={
              currentField === 'name'
                ? 'Your name...'
                : currentField === 'email'
                  ? 'your@email.com'
                  : currentField === 'phone'
                    ? '(555) 555-1234'
                    : currentField === 'zipCode'
                      ? 'Zip code...'
                      : currentField === 'service'
                        ? 'Service type...'
                        : 'Your message...'
            }
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleTextInput((e.target as HTMLInputElement).value);
                (e.target as HTMLInputElement).value = '';
              }
            }}
            className="form-field flex-1 text-sm"
            autoFocus
          />
          <button
            onClick={(e) => {
              const input = (e.currentTarget.previousElementSibling as HTMLInputElement);
              handleTextInput(input.value);
              input.value = '';
            }}
            className="bg-brand-purple text-white px-4 py-2 rounded-lg hover:bg-brand-deep-purple transition-colors font-semibold text-sm"
          >
            Send
          </button>
        </div>
      ) : null}
    </div>
  );
}
