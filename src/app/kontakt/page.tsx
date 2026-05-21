import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import FadeIn from '@/components/FadeIn';
import FloatingUI from '@/components/FloatingUI';

export const metadata: Metadata = {
  title: 'Kontakt – StayMira',
  description:
    'Kontaktirajte StayMira za besplatnu analizu vašeg smještaja. Odgovaramo unutar 24h.',
};

const contactItems = [
  {
    icon: '📧',
    label: 'Email',
    value: 'info@staymira.hr',
    href: 'mailto:info@staymira.hr',
  },
  {
    icon: '📞',
    label: 'Telefon',
    value: '+385 1 234 5678',
    href: 'tel:+38512345678',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+385 91 234 5678',
    href: 'https://wa.me/385912345678',
  },
  {
    icon: '📍',
    label: 'Adresa',
    value: 'Zagreb, Hrvatska',
    href: null,
  },
  {
    icon: '⏱️',
    label: 'Radno vrijeme',
    value: 'Pon–Pet: 8:00–18:00',
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="pt-32 pb-12 bg-[#0f2742]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-4">
                Kontakt
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Razgovarajmo o vašem{' '}
                <span className="text-[#c9a86a]">smještaju</span>
              </h1>
              <p className="text-[#e8dcc8]/70 text-lg">
                Odgovaramo unutar 24 sata. Analiza je besplatna i bez obveza.
              </p>
            </FadeIn>
          </div>
          <div className="absolute left-0 right-0" aria-hidden="true" style={{ position: 'relative' }}>
            <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-[40px] fill-white">
              <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* Contact info + form */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="grid lg:grid-cols-3 gap-10">
                {/* Left – contact details */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-xl font-bold text-[#0f2742] mb-1">Direktan kontakt</h2>
                    <p className="text-[#0f2742]/55 text-sm">
                      Dostupni smo svim kanalima — odaberite onaj koji vam odgovara.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {contactItems.map((c) => (
                      <div key={c.label} className="flex items-center gap-3 p-4 rounded-xl border border-[#e8dcc8] bg-[#f4efe6]/50">
                        <span className="text-xl">{c.icon}</span>
                        <div>
                          <p className="text-[10px] font-semibold text-[#0f2742]/40 uppercase tracking-wider">
                            {c.label}
                          </p>
                          {c.href ? (
                            <a
                              href={c.href}
                              target={c.href.startsWith('http') ? '_blank' : undefined}
                              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-sm font-medium text-[#0f2742] hover:text-[#c9a86a] transition-colors"
                            >
                              {c.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-[#0f2742]">{c.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#0f2742]/40 mb-3">
                      Pratite nas
                    </p>
                    <div className="flex gap-2">
                      {[
                        { label: 'Instagram', href: 'https://instagram.com', icon: '📷' },
                        { label: 'Facebook', href: 'https://facebook.com', icon: '👤' },
                        { label: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
                      ].map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-[#0f2742]/5 border border-[#e8dcc8] flex items-center justify-center text-lg hover:bg-[#0f2742] hover:border-[#0f2742] transition-all"
                        >
                          {s.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right – lead form spans 2 cols */}
                <div className="lg:col-span-2">
                  <LeadForm />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingUI />
    </>
  );
}
