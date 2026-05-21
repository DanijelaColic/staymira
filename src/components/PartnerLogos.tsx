// Platforme na kojima oglašavamo — SVG wordmark logotipi
const platforms = [
  {
    name: 'Booking.com',
    logo: (
      <svg viewBox="0 0 120 28" fill="none" className="h-6 w-auto">
        <text x="0" y="22" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="22" fill="currentColor">
          Booking
        </text>
        <text x="86" y="22" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="22" fill="#003580">
          .com
        </text>
      </svg>
    ),
  },
  {
    name: 'Airbnb',
    logo: (
      <svg viewBox="0 0 80 28" fill="none" className="h-6 w-auto">
        <text x="0" y="22" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="22" fill="#FF5A5F">
          Airbnb
        </text>
      </svg>
    ),
  },
  {
    name: 'Vrbo',
    logo: (
      <svg viewBox="0 0 60 28" fill="none" className="h-6 w-auto">
        <text x="0" y="22" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="22" fill="#1C5BD1">
          Vrbo
        </text>
      </svg>
    ),
  },
  {
    name: 'Expedia',
    logo: (
      <svg viewBox="0 0 90 28" fill="none" className="h-6 w-auto">
        <text x="0" y="22" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="21" fill="#00355F">
          Expedia
        </text>
      </svg>
    ),
  },
  {
    name: 'TripAdvisor',
    logo: (
      <svg viewBox="0 0 120 28" fill="none" className="h-6 w-auto">
        <text x="0" y="22" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="20" fill="#34E0A1">
          Trip
        </text>
        <text x="44" y="22" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="20" fill="#00AF87">
          Advisor
        </text>
      </svg>
    ),
  },
  {
    name: 'Google Vacation Rentals',
    logo: (
      <svg viewBox="0 0 60 28" fill="none" className="h-6 w-auto">
        <text x="0" y="22" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="22">
          <tspan fill="#4285F4">G</tspan>
          <tspan fill="#EA4335">o</tspan>
          <tspan fill="#FBBC05">o</tspan>
          <tspan fill="#4285F4">g</tspan>
          <tspan fill="#34A853">l</tspan>
          <tspan fill="#EA4335">e</tspan>
        </text>
      </svg>
    ),
  },
];

export default function PartnerLogos() {
  return (
    <section className="py-10 bg-[#f4efe6] border-y border-[#e8dcc8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0f2742]/40 whitespace-nowrap flex-shrink-0">
            Oglašavamo na
          </p>
          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-[#0f2742]/10 flex-shrink-0" />
          {/* Logo row */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-8 gap-y-4">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="opacity-50 hover:opacity-80 transition-opacity duration-200 cursor-default"
                title={p.name}
              >
                {p.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
