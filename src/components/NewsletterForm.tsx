'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: connect to email service (Mailchimp, Resend, etc.)
    setSubmitted(true);
  }

  return (
    <div className="bg-[#0f2742] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg mb-1">
              📬 Savjeti za vlasnike smještaja
            </p>
            <p className="text-[#e8dcc8]/55 text-sm">
              Jednom mjesečno — praktični savjeti za veći prihod. Bez spama.
            </p>
          </div>

          {submitted ? (
            <div className="flex items-center gap-2 text-[#c9a86a] font-semibold text-sm">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Hvala! Dodali smo vas na listu.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="vaš@email.hr"
                required
                className="flex-1 sm:w-64 bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-[#e8dcc8]/30 focus:outline-none focus:border-[#c9a86a]/60 transition-colors"
              />
              <button
                type="submit"
                className="flex-shrink-0 bg-[#c9a86a] hover:bg-[#b8924f] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
              >
                Pretplati se
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
