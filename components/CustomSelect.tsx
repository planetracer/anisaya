'use client';

import { useState, useRef, useEffect } from 'react';

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  label?: string;
}

export default function CustomSelect({
  value,
  onChange,
  options,
  label,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {label && (
        <label className="text-small font-semibold text-brand-ink block mb-1">
          {label}
        </label>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="form-field w-full text-left flex items-center justify-between"
      >
        <span>{value}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-brand-lavender-mist rounded-lg shadow-lg z-50">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 hover:bg-brand-lilac-white transition-colors first:rounded-t-lg last:rounded-b-lg ${
                value === option ? 'bg-brand-lilac-white font-semibold' : ''
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
