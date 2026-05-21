'use client';

import { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  location: string;
  locationOther: string;
  propertyType: string;
  units: string;
  alreadyListed: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  location: '',
  locationOther: '',
  propertyType: '',
  units: '',
  alreadyListed: '',
  message: '',
};

// Gradovi s punim servisom (upravljanje + čišćenje direktno)
const FULL_SERVICE_CITIES = ['Osijek'];

const CITY_OPTIONS = [
  'Osijek',
  'Zagreb',
  'Split',
  'Zadar',
  'Dubrovnik',
  'Istra',
  'Kvarner',
  'Plitvička jezera',
  'Šibenik',
  'Rijeka',
  'Ostalo',
];

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isFullService = FULL_SERVICE_CITIES.includes(form.location);
  const isOtherCity = form.location === 'Ostalo';
  const showServiceBanner = form.location !== '' && form.location !== 'Ostalo';

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('server error');
      setSubmitted(true);
    } catch {
      alert('Došlo je do greške. Molimo pokušajte ponovo ili nas kontaktirajte direktno.');
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    'w-full bg-white border border-[#e8dcc8] rounded-xl px-4 py-3 text-sm text-[#0f2742] placeholder:text-[#0f2742]/40 focus:outline-none focus:border-[#c9a86a] focus:ring-2 focus:ring-[#c9a86a]/15 transition-all';

  return (
    <section id="analiza" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left – copy */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-block text-[#c9a86a] text-sm font-semibold tracking-widest uppercase mb-3">
              Besplatna analiza
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2742] mb-5 leading-tight">
              Saznajte koliko vaš smještaj
              <br />
              <span className="text-[#c9a86a]">može zaraditi</span>
            </h2>
            <p className="text-[#0f2742]/60 text-lg leading-relaxed mb-8">
              Pošaljite upit i dobit ćete prijedlog kako povećati popunjenost i prihod vašeg
              smještaja — bez naplate i bez obveza.
            </p>

            {/* Trust points */}
            <div className="flex flex-col gap-4">
              {[
                { icon: '⏱️', text: 'Odgovaramo unutar 24 sata' },
                { icon: '🔒', text: 'Vaši podaci su sigurni i povjerljivi' },
                { icon: '💸', text: 'Analiza je potpuno besplatna' },
                { icon: '📊', text: 'Dobivate konkretne brojke i prijedlog' },
              ].map((t) => (
                <div key={t.text} className="flex items-center gap-3">
                  <span className="text-xl">{t.icon}</span>
                  <span className="text-[#0f2742]/70 text-sm">{t.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-5 py-16 text-center bg-[#f4efe6] rounded-2xl border border-[#e8dcc8]">
                <div className="w-16 h-16 rounded-full bg-[#0f2742] flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M5 14l6 6 12-12"
                      stroke="#c9a86a"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f2742] mb-2">Upit je primljen!</h3>
                  <p className="text-[#0f2742]/60 text-sm max-w-xs">
                    Javit ćemo vam se unutar 24 sata s besplatnom analizom vašeg smještaja.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialState); }}
                  className="text-sm text-[#c9a86a] hover:underline font-medium"
                >
                  Pošalji novi upit
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 bg-[#f4efe6] rounded-2xl border border-[#e8dcc8] p-7 sm:p-8"
              >
                {/* Row: Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#0f2742]/70 mb-1.5">
                      Ime i prezime <span className="text-[#c9a86a]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Npr. Ivan Horvat"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#0f2742]/70 mb-1.5">
                      Email adresa <span className="text-[#c9a86a]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ivan@primjer.hr"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row: Phone + Location */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#0f2742]/70 mb-1.5">
                      Broj telefona
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+385 91 000 0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#0f2742]/70 mb-1.5">
                      Lokacija smještaja <span className="text-[#c9a86a]">*</span>
                    </label>
                    <select
                      name="location"
                      required
                      value={form.location}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Odaberite grad / regiju</option>
                      {CITY_OPTIONS.map((city) => (
                        <option key={city} value={city}>
                          {city === 'Osijek' ? `${city} ★ Puni servis` : city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* "Ostalo" – free text fallback */}
                {isOtherCity && (
                  <div>
                    <label className="block text-xs font-medium text-[#0f2742]/70 mb-1.5">
                      Navedite lokaciju <span className="text-[#c9a86a]">*</span>
                    </label>
                    <input
                      type="text"
                      name="locationOther"
                      required
                      value={form.locationOther}
                      onChange={handleChange}
                      placeholder="Npr. Makarska, Hvar, Koprivnica..."
                      className={inputClass}
                    />
                  </div>
                )}

                {/* Dynamic service banner */}
                {showServiceBanner && (
                  <div
                    className={`flex gap-3 p-4 rounded-xl border text-sm transition-all duration-300 ${
                      isFullService
                        ? 'bg-[#0f2742] border-[#0f2742] text-white'
                        : 'bg-white border-[#e8dcc8] text-[#0f2742]'
                    }`}
                  >
                    <span className="text-lg flex-shrink-0 mt-0.5">
                      {isFullService ? '✅' : '🤝'}
                    </span>
                    <div>
                      <p className={`font-semibold text-sm mb-0.5 ${isFullService ? 'text-white' : 'text-[#0f2742]'}`}>
                        {isFullService
                          ? 'Puni servis dostupan u Osijeku'
                          : 'Property management + partnersko čišćenje'}
                      </p>
                      <p className={`text-xs leading-relaxed ${isFullService ? 'text-[#e8dcc8]/70' : 'text-[#0f2742]/60'}`}>
                        {isFullService
                          ? 'Za Osijek nudimo kompletnu uslugu — property management i organizaciju čišćenja između svakog gosta, sve pod jednim krovom.'
                          : `Za ${form.location} pružamo profesionalni property management. Čišćenje organiziramo s pouzdanim lokalnim partnerima na vašoj lokaciji.`}
                      </p>
                    </div>
                  </div>
                )}

                {/* Row: Type + Units */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#0f2742]/70 mb-1.5">
                      Tip objekta <span className="text-[#c9a86a]">*</span>
                    </label>
                    <select
                      name="propertyType"
                      required
                      value={form.propertyType}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Odaberite tip</option>
                      <option value="apartment">Apartman</option>
                      <option value="house">Kuća za odmor</option>
                      <option value="villa">Vila s bazenom</option>
                      <option value="studio">Studio</option>
                      <option value="other">Ostalo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#0f2742]/70 mb-1.5">
                      Broj jedinica (ako više)
                    </label>
                    <select
                      name="units"
                      value={form.units}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Odaberite</option>
                      <option value="1">1 jedinica</option>
                      <option value="2-3">2–3 jedinice</option>
                      <option value="4-6">4–6 jedinica</option>
                      <option value="7+">7 ili više</option>
                    </select>
                  </div>
                </div>

                {/* Already listed? */}
                <div>
                  <label className="block text-xs font-medium text-[#0f2742]/70 mb-2">
                    Trenutno oglašavate na Booking.com ili Airbnb?{' '}
                    <span className="text-[#c9a86a]">*</span>
                  </label>
                  <div className="flex gap-3">
                    {['Da', 'Ne'].map((opt) => (
                      <label
                        key={opt}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm cursor-pointer transition-all ${
                          form.alreadyListed === opt
                            ? 'bg-[#0f2742] border-[#0f2742] text-white font-medium'
                            : 'bg-white border-[#e8dcc8] text-[#0f2742]/70 hover:border-[#c9a86a]/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="alreadyListed"
                          value={opt}
                          checked={form.alreadyListed === opt}
                          onChange={handleChange}
                          className="sr-only"
                          required
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-[#0f2742]/70 mb-1.5">
                    Poruka (neobavezno)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Opišite vaš smještaj ili dodajte pitanja..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#c9a86a] hover:bg-[#b8924f] disabled:opacity-70 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg mt-1"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Slanje...
                    </>
                  ) : (
                    <>
                      Pošalji upit za besplatnu analizu
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#0f2742]/40">
                  Bez naplate. Bez obveza. Odgovaramo unutar 24h.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
