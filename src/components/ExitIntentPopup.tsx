'use client';

import { useEffect, useState, useRef } from 'react';

// Shows once per session when user moves mouse toward top of viewport (intent to leave)
export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    // Don't show if already seen this session
    if (sessionStorage.getItem('exit-popup-seen')) return;

    function handleMouseLeave(e: MouseEvent) {
      if (triggered.current) return;
      // Fire when mouse exits near the top (y < 10px)
      if (e.clientY < 10) {
        triggered.current = true;
        setVisible(true);
        sessionStorage.setItem('exit-popup-seen', '1');
      }
    }

    // Delay listener so it doesn't fire immediately on page load
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      alert('Greška. Pokušajte ponovo.');
    } finally {
      setLoading(false);
    }
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Besplatni savjeti"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0f2742]/70 backdrop-blur-sm"
        onClick={() => setVisible(false)}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Top banner */}
        <div className="bg-[#0f2742] px-7 py-6 text-center">
          <span className="text-3xl">🏠</span>
          <h2 className="text-white text-xl font-bold mt-2 mb-1">
            Čekajte — besplatni vodič!
          </h2>
          <p className="text-[#c9a86a] text-sm font-medium">
            Preuzmite "5 grešaka vlasnika apartmana" PDF
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-4 text-[#e8dcc8]/60 hover:text-white transition-colors text-xl font-light"
          aria-label="Zatvori"
        >
          ✕
        </button>

        {/* Content */}
        <div className="px-7 py-6">
          {submitted ? (
            <div className="text-center py-4">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-[#0f2742] font-bold text-lg mb-2">Hvala!</h3>
              <p className="text-[#0f2742]/60 text-sm leading-relaxed">
                Vodič smo poslali na vaš email. Provjerite inbox
                (i spam mapu ako ne vidite poruku).
              </p>
              <button
                onClick={() => setVisible(false)}
                className="mt-5 text-sm text-[#0f2742]/40 hover:text-[#0f2742] underline"
              >
                Zatvori
              </button>
            </div>
          ) : (
            <>
              <p className="text-[#0f2742]/65 text-sm leading-relaxed mb-5">
                Saznajte <strong className="text-[#0f2742]">5 najčešćih grešaka</strong> koje
                vlasnike apartmana koštaju tisuće kuna godišnje — i kako ih odmah ispraviti.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Vaš email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-[#e8dcc8] rounded-xl px-4 py-3 text-sm text-[#0f2742] placeholder:text-[#0f2742]/30 focus:outline-none focus:border-[#c9a86a] transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#c9a86a] hover:bg-[#b8924f] disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-md"
                >
                  {loading ? 'Šalje se...' : 'Pošalji mi vodič besplatno →'}
                </button>
              </form>

              <button
                onClick={() => setVisible(false)}
                className="block w-full text-center text-xs text-[#0f2742]/30 hover:text-[#0f2742]/50 mt-3 transition-colors"
              >
                Ne, hvala — ne zanima me besplatni vodič
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
