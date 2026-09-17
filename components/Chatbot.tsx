'use client';

import { useState } from 'react';
import Link from 'next/link';

type Message = {
  id: string;
  text: string;
  sender: 'bot' | 'visitor';
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! Want a price, or have a question?',
      sender: 'bot',
    },
  ]);
  const [customMessage, setCustomMessage] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);

  const addMessage = (text: string, sender: 'bot' | 'visitor') => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text,
        sender,
      },
    ]);
  };

  const handleQuickReply = (action: string) => {
    addMessage(action, 'visitor');

    setTimeout(() => {
      switch (action) {
        case 'Get a price':
          addMessage(
            "Redirecting to our instant quote form...",
            'bot'
          );
          setTimeout(() => window.location.href = '/quote', 800);
          break;
        case "What's included?":
          addMessage(
            'Redirecting to our services page...',
            'bot'
          );
          setTimeout(() => window.location.href = '/services', 800);
          break;
        case 'Promo code':
          addMessage(
            'New clients get 25% off with code ANI25 on your first clean! Redirecting to quote form...',
            'bot'
          );
          setTimeout(() => window.location.href = '/quote', 800);
          break;
        case 'Reschedule or cancel':
          addMessage(
            'Redirecting to contact us...',
            'bot'
          );
          setTimeout(() => window.location.href = '/contact', 800);
          break;
        case 'Jobs':
          addMessage("Redirecting to our careers page - we're hiring cleaners!", 'bot');
          setTimeout(() => window.location.href = '/careers', 800);
          break;
        case 'Talk to a person':
          setShowContactForm(true);
          addMessage(
            "We'd love to chat! Enter your info and we'll get back to you within 2 hours.",
            'bot'
          );
          break;
        default:
          break;
      }
    }, 500);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMessage.trim()) return;

    addMessage(customMessage, 'visitor');
    setCustomMessage('');

    setTimeout(() => {
      addMessage(
        "Thanks for your message! For detailed answers, check our FAQ or contact us directly. We'll get back to you soon!",
        'bot'
      );
    }, 500);
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-brand-purple text-white rounded-full flex items-center justify-center shadow-lg hover:bg-brand-deep-purple transition-colors z-40"
        aria-label="Open chat"
      >
        <span className="text-2xl">💬</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-[20px] shadow-2xl flex flex-col z-50 border border-brand-lavender-mist">
      {/* Header */}
      <div className="bg-brand-purple text-white p-4 rounded-t-[20px] flex items-center justify-between">
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
        {messages.map((msg) => (
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
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Replies or Contact Form */}
      {!showContactForm && messages.length === 1 ? (
        <div className="border-t border-brand-lavender-mist p-4 space-y-2">
          {[
            'Get a price',
            "What's included?",
            'Promo code',
            'Reschedule or cancel',
            'Jobs',
            'Talk to a person',
          ].map((option) => (
            <button
              key={option}
              onClick={() => handleQuickReply(option)}
              className="w-full bg-brand-purple text-white py-2 px-3 rounded-lg hover:bg-brand-deep-purple transition-colors text-sm font-semibold"
            >
              {option}
            </button>
          ))}
        </div>
      ) : showContactForm ? (
        <div className="border-t border-brand-lavender-mist p-4 space-y-3">
          <input
            type="text"
            placeholder="Your name"
            className="form-field w-full text-sm"
          />
          <input
            type="email"
            placeholder="your@email.com"
            className="form-field w-full text-sm"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="form-field w-full text-sm"
          />
          <textarea
            placeholder="Your message"
            className="form-field w-full text-sm h-16 resize-none"
          />
          <button
            onClick={() => {
              addMessage('Thanks! We got your info and will be in touch soon.', 'bot');
              setShowContactForm(false);
            }}
            className="btn-primary w-full text-sm"
          >
            Send
          </button>
        </div>
      ) : (
        <form onSubmit={handleSendCustom} className="border-t border-brand-lavender-mist p-4 flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={customMessage}
            onChange={(e) => setCustomMessage(e.target.value)}
            className="form-field flex-1 text-sm"
          />
          <button
            type="submit"
            className="bg-brand-purple text-white px-4 py-2 rounded-lg hover:bg-brand-deep-purple transition-colors"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
