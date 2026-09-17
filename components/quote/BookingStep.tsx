'use client';

import { useState } from 'react';
import type { QuoteData } from '../QuoteForm';

interface BookingStepProps {
  data: Partial<QuoteData>;
  onChange: (data: Partial<QuoteData>) => void;
  onBack: () => void;
}

export default function BookingStep({ data, onChange, onBack }: BookingStepProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Generate available dates (next 30 days, excluding Sundays)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);

      // Skip Sundays (day 0)
      if (date.getDay() !== 0) {
        dates.push(date);
      }
    }

    return dates;
  };

  // Generate time slots (8am-2pm in 30min intervals)
  const getTimeSlots = () => {
    const slots = [];
    const startHour = 8;
    const endHour = 14; // 2pm in 24-hour format

    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      slots.push(`${hour.toString().padStart(2, '0')}:30`);
    }

    return slots;
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const formatDateForDisplay = (dateStr: string) => {
    const date = new Date(dateStr + 'T00:00:00');
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTimeForDisplay = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!selectedDate) newErrors.date = 'Please select a date';
    if (!selectedTime) newErrors.time = 'Please select a time';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const bookingData = {
        ...data,
        preferredDate: selectedDate,
        preferredTime: selectedTime,
      };

      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        alert(
          `Thank you, ${data.firstName}! Your booking has been confirmed. We'll contact you at ${data.email} to confirm the appointment.`
        );
        window.location.href = '/';
      } else {
        alert('Error submitting booking. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Error submitting booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const availableDates = getAvailableDates();
  const timeSlots = getTimeSlots();

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-fredoka text-h2-mobile md:text-h2 text-brand-purple mb-2">
        When works for you?
      </h2>
      <p className="text-brand-gray text-body mb-6">
        We're available Monday-Saturday, 8am-2pm. Pick a date and time that works best.
      </p>

      <div className="space-y-6 mb-6">
        {/* Date Picker */}
        <div>
          <label className="block text-small font-nunito font-semibold text-brand-ink mb-4">
            Select date
          </label>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mb-4">
            {availableDates.map((date) => {
              const dateStr = formatDate(date);
              const isSelected = selectedDate === dateStr;
              return (
                <button
                  key={dateStr}
                  type="button"
                  onClick={() => {
                    setSelectedDate(dateStr);
                    setErrors((prev) => ({ ...prev, date: '' }));
                  }}
                  className={`py-3 px-2 rounded-lg text-small font-semibold transition-all text-center ${
                    isSelected
                      ? 'bg-brand-purple text-white shadow-md'
                      : 'bg-brand-lilac-white text-brand-ink hover:bg-brand-lavender-mist'
                  }`}
                >
                  <div className="text-xs opacity-75">{formatDate(date).split('-')[2]}</div>
                  <div>{date.toLocaleDateString('en-US', { month: 'short' })}</div>
                </button>
              );
            })}
          </div>
          {errors.date && <p className="text-red-500 text-small">{errors.date}</p>}
          {selectedDate && (
            <div className="bg-brand-lavender-mist rounded-lg p-3">
              <p className="text-small font-semibold text-brand-purple">
                Selected: {formatDateForDisplay(selectedDate)}
              </p>
            </div>
          )}
        </div>

        {/* Time Picker */}
        {selectedDate && (
          <div>
            <label className="block text-small font-nunito font-semibold text-brand-ink mb-4">
              Select time
            </label>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mb-4">
              {timeSlots.map((time) => {
                const isSelected = selectedTime === time;
                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => {
                      setSelectedTime(time);
                      setErrors((prev) => ({ ...prev, time: '' }));
                    }}
                    className={`py-3 px-2 rounded-lg text-small font-semibold transition-all ${
                      isSelected
                        ? 'bg-brand-purple text-white shadow-md'
                        : 'bg-brand-lilac-white text-brand-ink hover:bg-brand-lavender-mist'
                    }`}
                  >
                    {formatTimeForDisplay(time)}
                  </button>
                );
              })}
            </div>
            {errors.time && <p className="text-red-500 text-small">{errors.time}</p>}
            {selectedTime && (
              <div className="bg-brand-lavender-mist rounded-lg p-3">
                <p className="text-small font-semibold text-brand-purple">
                  Appointment: {formatDateForDisplay(selectedDate)} at {formatTimeForDisplay(selectedTime)}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Availability Notice */}
        <div className="bg-brand-lilac-white rounded-lg p-4 border border-brand-lavender-mist">
          <p className="text-small text-brand-gray">
            <span className="font-semibold">Availability Status:</span> We have slots available for your selected date. Your cleaner will confirm 24 hours before your appointment.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onBack}
          className="btn-secondary flex-1"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Confirming...' : 'Confirm booking'}
        </button>
      </div>
    </form>
  );
}
