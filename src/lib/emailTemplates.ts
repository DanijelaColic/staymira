/**
 * Shared branded HTML email templates for StayMira.
 * All templates are pure HTML strings compatible with Resend.
 */

const BASE_URL = 'https://staymira.hr';

const BRAND = {
  navy: '#0f2742',
  gold: '#c9a86a',
  cream: '#f4efe6',
  text: '#1a1a2e',
  muted: '#6b7280',
  border: '#e8dcc8',
};

/** Shared outer wrapper + header logo */
function emailWrapper(previewText: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="hr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light" />
  <title>StayMira</title>
  <!--[if mso]><style>td{font-family:Arial,sans-serif!important}</style><![endif]-->
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <!-- Preview text (hidden) -->
  <div style="display:none;max-height:0;overflow:hidden;color:#f0f4f8;font-size:1px;">
    ${previewText}&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:580px;" cellpadding="0" cellspacing="0">

          <!-- Logo header -->
          <tr>
            <td style="padding-bottom:20px;text-align:center;">
              <a href="${BASE_URL}" style="text-decoration:none;">
                <span style="font-size:22px;font-weight:800;color:${BRAND.navy};letter-spacing:-0.5px;">
                  Stay<span style="color:${BRAND.gold};">Mira</span>
                </span>
              </a>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 16px rgba(15,39,66,0.08);">
              ${body}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 0 8px;text-align:center;">
              <p style="margin:0;font-size:12px;color:${BRAND.muted};line-height:1.6;">
                StayMira · <a href="mailto:info@staymira.hr" style="color:${BRAND.gold};text-decoration:none;">info@staymira.hr</a><br />
                <a href="${BASE_URL}" style="color:${BRAND.muted};text-decoration:none;">staymira.hr</a>
                &nbsp;·&nbsp;
                <a href="${BASE_URL}/privatnost" style="color:${BRAND.muted};text-decoration:none;">Privatnost</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Gold top bar accent */
function goldBar(): string {
  return `<div style="height:5px;background:linear-gradient(90deg,${BRAND.gold},#e8c87d);"></div>`;
}

/** Section padding wrapper */
function section(content: string, bg = '#ffffff'): string {
  return `<div style="background:${bg};padding:28px 32px;">${content}</div>`;
}

/** Divider line */
const divider = `<div style="height:1px;background:${BRAND.border};margin:8px 0;"></div>`;

/** CTA button */
function button(label: string, href: string, color = BRAND.gold): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px auto 0;">
      <tr>
        <td style="background:${color};border-radius:100px;text-align:center;">
          <a href="${href}" style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:-0.2px;">
            ${label}
          </a>
        </td>
      </tr>
    </table>`;
}

/** Data row for tables */
function dataRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 14px;background:${BRAND.cream};font-size:11px;font-weight:700;color:${BRAND.navy};text-transform:uppercase;letter-spacing:0.6px;width:38%;vertical-align:top;">
        ${label}
      </td>
      <td style="padding:10px 14px;background:#fafaf8;font-size:14px;color:${BRAND.text};border-left:2px solid ${BRAND.border};">
        ${value}
      </td>
    </tr>
    <tr><td colspan="2" style="height:2px;background:#ffffff;"></td></tr>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 1: Owner notification — new lead from contact form
// ─────────────────────────────────────────────────────────────────────────────
export type LeadData = {
  name: string;
  email: string;
  phone?: string;
  location: string;
  propertyType?: string;
  units?: string;
  alreadyListed?: string;
  message?: string;
};

export function ownerNotificationEmail(lead: LeadData): string {
  const rows = [
    dataRow('Ime i prezime', lead.name),
    dataRow('Email', `<a href="mailto:${lead.email}" style="color:${BRAND.gold};font-weight:600;">${lead.email}</a>`),
    dataRow('Telefon', lead.phone
      ? `<a href="tel:${lead.phone.replace(/\s/g, '')}" style="color:${BRAND.gold};font-weight:600;">${lead.phone}</a>`
      : '—'),
    dataRow('Lokacija', lead.location),
    dataRow('Tip objekta', lead.propertyType || '—'),
    dataRow('Broj jedinica', lead.units || '—'),
    dataRow('Već oglašava', lead.alreadyListed || '—'),
  ].join('');

  const messageBlock = lead.message ? `
    <div style="margin-top:20px;padding:16px 20px;background:${BRAND.cream};border-radius:10px;border-left:4px solid ${BRAND.gold};">
      <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:${BRAND.navy};text-transform:uppercase;letter-spacing:0.6px;">Poruka vlasnika</p>
      <p style="margin:0;font-size:14px;color:${BRAND.text};line-height:1.7;">${lead.message}</p>
    </div>` : '';

  const body = `
    ${goldBar()}
    ${section(`
      <h1 style="margin:0 0 4px;font-size:20px;font-weight:800;color:#ffffff;"> </h1>
    `, BRAND.navy)}
    ${section(`
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:4px;">
        <div style="width:10px;height:10px;border-radius:50%;background:#22c55e;flex-shrink:0;"></div>
        <h1 style="margin:0;font-size:18px;font-weight:800;color:${BRAND.navy};">Novi upit za besplatnu analizu</h1>
      </div>
      <p style="margin:4px 0 0;font-size:13px;color:${BRAND.muted};">Primljeno s kontakt forme — staymira.hr</p>
    `)}
    ${section(`
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid ${BRAND.border};">
        ${rows}
      </table>
      ${messageBlock}
      ${button(`Odgovori ${lead.name.split(' ')[0]}`, `mailto:${lead.email}`, BRAND.navy)}
    `)}
    ${section(`
      <p style="margin:0;font-size:12px;color:${BRAND.muted};text-align:center;">
        Preporučeno: javite se unutar 2 sata — konverzija pada exponencijalno s kašnjenjem odgovora.
      </p>
    `, BRAND.cream)}
  `;

  return emailWrapper(`Novi upit — ${lead.name} iz ${lead.location}`, body);
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 2: Auto-reply to the person who submitted the form
// ─────────────────────────────────────────────────────────────────────────────
export function autoReplyEmail(name: string, location: string): string {
  const firstName = name.split(' ')[0];

  const steps = [
    { num: '1', title: 'Analiza vašeg tržišta', desc: 'Pregledavamo podatke za ' + location + ' i procjenjujemo realni potencijal vašeg smještaja.' },
    { num: '2', title: 'Personalizirani prijedlog', desc: 'Šaljemo vam konkretne brojke — prihod, popunjenost, preporučenu cijenu po noći.' },
    { num: '3', title: 'Razgovor bez obveza', desc: 'Dogovaramo kratki poziv ili sastanak da odgovorimo na sva vaša pitanja.' },
  ];

  const stepsHtml = steps.map(s => `
    <div style="display:flex;gap:16px;margin-bottom:20px;align-items:flex-start;">
      <div style="flex-shrink:0;width:32px;height:32px;border-radius:50%;background:${BRAND.gold};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;color:#fff;text-align:center;line-height:32px;">
        ${s.num}
      </div>
      <div>
        <p style="margin:0 0 3px;font-size:14px;font-weight:700;color:${BRAND.navy};">${s.title}</p>
        <p style="margin:0;font-size:13px;color:${BRAND.muted};line-height:1.6;">${s.desc}</p>
      </div>
    </div>`).join('');

  const body = `
    ${goldBar()}
    ${section(`
      <h1 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#ffffff;">Hvala, ${firstName}!</h1>
      <p style="margin:0;font-size:14px;color:${BRAND.gold};">Vaš upit je zaprimljen ✓</p>
    `, BRAND.navy)}
    ${section(`
      <p style="margin:0 0 20px;font-size:15px;color:${BRAND.text};line-height:1.7;">
        Vaš upit za besplatnu analizu smještaja u <strong>${location}</strong> je zaprimljen.
        Javit ćemo vam se unutar <strong>24 sata</strong>.
      </p>
      ${divider}
      <p style="margin:20px 0 16px;font-size:12px;font-weight:700;color:${BRAND.navy};text-transform:uppercase;letter-spacing:0.6px;">Što se događa dalje</p>
      ${stepsHtml}
    `)}
    ${section(`
      <p style="margin:0 0 12px;font-size:14px;color:${BRAND.navy};font-weight:600;">U međuvremenu:</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${[
          ['Blog', 'Savjeti za povećanje prihoda', `${BASE_URL}/blog`],
          ['Paketi', 'Transparentni uvjeti suradnje', `${BASE_URL}/paketi`],
          ['Studije slučaja', 'Pravi rezultati vlasnika', `${BASE_URL}/studije-slucaja`],
        ].map(([title, desc, href]) => `
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};">
              <a href="${href}" style="text-decoration:none;">
                <span style="font-size:14px;font-weight:600;color:${BRAND.navy};">${title}</span>
                <span style="font-size:12px;color:${BRAND.muted};display:block;margin-top:2px;">${desc}</span>
              </a>
            </td>
            <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};text-align:right;vertical-align:middle;">
              <a href="${href}" style="color:${BRAND.gold};font-size:18px;text-decoration:none;">›</a>
            </td>
          </tr>`).join('')}
      </table>
    `, BRAND.cream)}
  `;

  return emailWrapper(`Zaprimili smo vaš upit, ${firstName}! Javit ćemo se unutar 24h.`, body);
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 3: Owner notification — new newsletter subscriber
// ─────────────────────────────────────────────────────────────────────────────
export function newsletterOwnerEmail(email: string): string {
  const body = `
    ${goldBar()}
    ${section(`
      <h1 style="margin:0 0 4px;font-size:18px;font-weight:800;color:#ffffff;">Novi pretplatnik</h1>
      <p style="margin:0;font-size:13px;color:${BRAND.gold};">StayMira Newsletter</p>
    `, BRAND.navy)}
    ${section(`
      <p style="margin:0 0 16px;font-size:15px;color:${BRAND.text};">
        Nova osoba se pretplatila na StayMira newsletter:
      </p>
      <div style="padding:16px 20px;background:${BRAND.cream};border-radius:10px;border-left:4px solid ${BRAND.gold};">
        <p style="margin:0;font-size:16px;font-weight:700;color:${BRAND.navy};">📧 ${email}</p>
      </div>
      ${button('Dodaj u email listu', `mailto:${email}?subject=Dobrodošli u StayMira newsletter`, BRAND.navy)}
      <p style="margin:20px 0 0;font-size:12px;color:${BRAND.muted};text-align:center;">
        Preporučujemo: dodajte ovu adresu u Brevo / Mailchimp listu za redovne newsletter kampanje.
      </p>
    `)}
  `;

  return emailWrapper(`Novi pretplatnik: ${email}`, body);
}

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE 4: Welcome email to new newsletter subscriber
// ─────────────────────────────────────────────────────────────────────────────
export function newsletterWelcomeEmail(): string {
  const articles = [
    { title: 'Kako povećati prihod bez spuštanja cijene', slug: 'kako-povecati-prihod-apartmana', tag: 'Strategija' },
    { title: 'Booking.com ili Airbnb: gdje se isplati više?', slug: 'booking-vs-airbnb', tag: 'Platforme' },
    { title: 'Dinamične cijene: zarađujte više u sezoni', slug: 'dinamicne-cijene-sezona', tag: 'Cijene' },
  ];

  const articlesHtml = articles.map(a => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid ${BRAND.border};">
        <a href="${BASE_URL}/blog/${a.slug}" style="text-decoration:none;">
          <span style="font-size:10px;font-weight:700;color:${BRAND.gold};text-transform:uppercase;letter-spacing:0.5px;">${a.tag}</span>
          <p style="margin:4px 0 0;font-size:14px;font-weight:600;color:${BRAND.navy};line-height:1.4;">${a.title}</p>
        </a>
      </td>
      <td style="padding:12px 0 12px 12px;border-bottom:1px solid ${BRAND.border};vertical-align:middle;text-align:right;">
        <a href="${BASE_URL}/blog/${a.slug}" style="color:${BRAND.gold};font-size:18px;text-decoration:none;font-weight:700;">›</a>
      </td>
    </tr>`).join('');

  const perks = [
    'Taktike za povećanje prihoda od kratkoročnog najma',
    'Promjene na Booking.com i Airbnb platformama',
    'Sezonski trendovi u hrvatskom turizmu',
    'Savjeti za upravljanje gostima i recenzijama',
  ];

  const body = `
    ${goldBar()}
    ${section(`
      <h1 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#ffffff;">Dobrodošli u newsletter!</h1>
      <p style="margin:0;font-size:14px;color:${BRAND.gold};">StayMira · savjeti za vlasnike smještaja</p>
    `, BRAND.navy)}
    ${section(`
      <p style="margin:0 0 20px;font-size:15px;color:${BRAND.text};line-height:1.7;">
        Od sada primajte praktične savjete za kratkoročni najam — jednom tjedno,
        bez spama. Naš newsletter čita <strong>više od 500 vlasnika smještaja</strong>
        u Hrvatskoj.
      </p>
      <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:${BRAND.navy};text-transform:uppercase;letter-spacing:0.6px;">Što dobivate</p>
      <ul style="margin:0;padding:0;list-style:none;">
        ${perks.map(p => `
          <li style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
            <span style="color:${BRAND.gold};font-size:16px;flex-shrink:0;">✓</span>
            <span style="font-size:14px;color:${BRAND.text};">${p}</span>
          </li>`).join('')}
      </ul>
    `)}
    ${section(`
      <p style="margin:0 0 14px;font-size:13px;font-weight:700;color:${BRAND.navy};text-transform:uppercase;letter-spacing:0.5px;">Popularni članci za početak</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${articlesHtml}
      </table>
      ${button('Pročitajte sve savjete →', `${BASE_URL}/blog`)}
    `, BRAND.cream)}
    ${section(`
      <p style="margin:0;font-size:13px;color:${BRAND.muted};line-height:1.6;text-align:center;">
        Odjavite se u bilo kojem trenutku odgovorom na ovaj email s temom "Odjava".<br />
        Newsletter šaljemo jednom tjedno — samo korisni sadržaj, nula spama.
      </p>
    `)}
  `;

  return emailWrapper('Dobrodošli! Evo vaših prvih savjeta za kratkoročni najam.', body);
}
