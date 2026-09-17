'use client';

import { useState } from 'react';

export default function PromoBar() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div className="bg-brand-lavender-mist text-brand-ink text-center py-3 px-4">
      <div className="flex items-center justify-center gap-4 max-w-6xl mx-auto">
        <span className="text-sm md:text-base">
          <strong>New clients:</strong> $25 off any service with code ANI25
        </span>
        <button
          onClick={() => setClosed(true)}
          className="text-brand-purple hover:text-brand-deep-purple font-bold flex-shrink-0"
          aria-label="Close promo"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
