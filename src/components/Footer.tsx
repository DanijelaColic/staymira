const footerLinks = {
  Usluge: [
    { label: 'Sve usluge', href: '/usluge' },
    { label: 'Višekanalno oglašavanje', href: '/usluge#oglasavanje' },
    { label: 'Dinamično upravljanje cijenama', href: '/usluge#cijene' },
    { label: 'Web stranica za rezervacije', href: '/usluge#web' },
    { label: 'Čišćenje i održavanje', href: '/usluge#ciscenje' },
  ],
  Tvrtka: [
    { label: 'O nama', href: '/o-nama' },
    { label: 'Paketi i cijene', href: '/paketi' },
    { label: 'Destinacije', href: '/destinacije' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  Podrška: [
    { label: 'Besplatna analiza', href: '/#analiza' },
    { label: 'Česta pitanja', href: '/#faq' },
    { label: 'Politika privatnosti', href: '/privatnost' },
    { label: 'Uvjeti poslovanja', href: '/uvjeti-poslovanja' },
    { label: 'Osijek (puni servis)', href: '/destinacije/osijek' },
  ],
};

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="13" cy="5" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M12 2h-2a4 4 0 00-4 4v2H4v3h2v5h3v-5h2l1-3h-3V6a1 1 0 011-1h2V2z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 8v5M6 6v.01M9 13V10a2 2 0 014 0v3M9 10v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-[#0a1e33] text-[#e8dcc8]">
      {/* Newsletter strip */}
      <NewsletterForm />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 w-fit group">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0f2742] border border-white/10 group-hover:border-[#c9a86a]/40 transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M3 9.5L10 3l7 6.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 17c0-1.657 1.343-3 3-3s3 1.343 3 3"
                    stroke="#c9a86a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-xl font-bold text-white tracking-tight">
                Stay<span className="text-[#c9a86a]">Mira</span>
              </span>
            </a>

            <p className="text-[#e8dcc8]/55 text-sm leading-relaxed">
              Profesionalno upravljanje apartmanima, vilama i kućama za odmor diljem Hrvatske.
              Vaš smještaj, naša briga.
            </p>

            {/* Contact info placeholder */}
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="mailto:info@staymira.hr" className="flex items-center gap-2 text-[#e8dcc8]/60 hover:text-[#c9a86a] transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M1 4l6 4.5L13 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                info@staymira.hr
              </a>
              <a href="tel:+38512345678" className="flex items-center gap-2 text-[#e8dcc8]/60 hover:text-[#c9a86a] transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M4 2h2l1 3-1.5 1.5A9 9 0 009.5 9.5L11 8l3 1v2a1 1 0 01-1 1A11 11 0 012 3a1 1 0 011-1h1z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
                +385 1 234 5678
              </a>
              <span className="flex items-center gap-2 text-[#e8dcc8]/60">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 1.5C4.515 1.5 2.5 3.515 2.5 6c0 3.5 4.5 7 4.5 7s4.5-3.5 4.5-7c0-2.485-2.015-4.5-4.5-4.5z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <circle cx="7" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3" />
                </svg>
                Zagreb, Hrvatska
              </span>
            </div>

            {/* Social links */}
            <div className="flex gap-2.5 mt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#e8dcc8]/60 hover:text-[#c9a86a] hover:border-[#c9a86a]/30 hover:bg-[#c9a86a]/5 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#e8dcc8]/50 text-sm hover:text-[#c9a86a] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#e8dcc8]/30">
          <p>© {new Date().getFullYear()} StayMira. Sva prava pridržana.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#e8dcc8]/60 transition-colors">Uvjeti korištenja</a>
            <a href="#" className="hover:text-[#e8dcc8]/60 transition-colors">Privatnost</a>
            <a href="#" className="hover:text-[#e8dcc8]/60 transition-colors">Kolačići</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
