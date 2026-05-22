import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  // Lazy init — avoids build-time crash when env var is missing
  const resend = new Resend(process.env.RESEND_API_KEY);
  const TO_EMAIL = process.env.CONTACT_EMAIL ?? 'info@staymira.hr';

  try {
    const body = await req.json();
    const { name, email, phone, location, locationOther, propertyType, units, alreadyListed, message } = body;

    if (!name || !email || !location) {
      return NextResponse.json({ error: 'Nedostaju obavezna polja.' }, { status: 400 });
    }

    const locationDisplay = location === 'Ostalo' ? locationOther || 'Ostalo' : location;

    const propertyTypeMap: Record<string, string> = {
      apartment: 'Apartman',
      house: 'Kuća za odmor',
      villa: 'Vila s bazenom',
      studio: 'Studio',
      other: 'Ostalo',
    };

    const { error } = await resend.emails.send({
      from: 'StayMira Kontakt <noreply@staymira.hr>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `Novi upit za analizu — ${name} (${locationDisplay})`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #0f2742; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0 0 4px;">Novi upit za besplatnu analizu</h1>
            <p style="color: #c9a86a; margin: 0; font-size: 14px;">StayMira kontakt forma</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            ${[
              ['Ime i prezime', name],
              ['Email', email],
              ['Telefon', phone || '—'],
              ['Lokacija', locationDisplay],
              ['Tip objekta', propertyTypeMap[propertyType] || propertyType || '—'],
              ['Broj jedinica', units || '—'],
              ['Oglašava se', alreadyListed || '—'],
            ]
              .map(
                ([label, value]) => `
              <tr>
                <td style="padding: 10px 12px; background: #f4efe6; border-bottom: 2px solid #fff; font-size: 12px; font-weight: 600; color: #0f2742; text-transform: uppercase; letter-spacing: 0.5px; width: 40%; border-radius: 4px;">
                  ${label}
                </td>
                <td style="padding: 10px 12px; background: #fafafa; border-bottom: 2px solid #fff; font-size: 14px; color: #333;">
                  ${value}
                </td>
              </tr>`,
              )
              .join('')}
          </table>

          ${
            message
              ? `
            <div style="margin-top: 20px; padding: 16px; background: #f4efe6; border-radius: 8px; border-left: 4px solid #c9a86a;">
              <p style="margin: 0 0 6px; font-size: 12px; font-weight: 600; color: #0f2742; text-transform: uppercase; letter-spacing: 0.5px;">Poruka</p>
              <p style="margin: 0; font-size: 14px; color: #333; line-height: 1.6;">${message}</p>
            </div>`
              : ''
          }

          <div style="margin-top: 24px; padding: 16px; background: #0f2742; border-radius: 8px; text-align: center;">
            <a href="mailto:${email}" style="color: #c9a86a; text-decoration: none; font-weight: 600; font-size: 14px;">
              Odgovori na: ${email}
            </a>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Greška pri slanju. Pokušajte ponovo.' }, { status: 500 });
    }

    // Auto-reply to the sender
    await resend.emails.send({
      from: 'StayMira <noreply@staymira.hr>',
      to: email,
      subject: 'Primili smo vaš upit — StayMira',
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
          <div style="background: #0f2742; padding: 28px; border-radius: 12px; text-align: center; margin-bottom: 24px;">
            <h1 style="color: #ffffff; font-size: 22px; margin: 0 0 8px;">Hvala, ${name.split(' ')[0]}!</h1>
            <p style="color: #c9a86a; margin: 0; font-size: 15px;">Vaš upit je zaprimljen</p>
          </div>

          <p style="color: #333; font-size: 15px; line-height: 1.7;">
            Zaprimili smo vaš upit za besplatnu analizu smještaja u
            <strong>${locationDisplay}</strong>. Javit ćemo vam se unutar
            <strong>24 sata</strong> s prijedlogom kako povećati popunjenost i
            prihod vašeg smještaja.
          </p>

          <div style="background: #f4efe6; border-radius: 10px; padding: 20px; margin: 20px 0;">
            <p style="margin: 0; color: #0f2742; font-size: 14px;">
              U međuvremenu, posjetite naš blog za korisne savjete:
            </p>
            <a href="https://staymira.hr/blog" style="display: inline-block; margin-top: 10px; color: #c9a86a; font-weight: 600; font-size: 14px;">
              staymira.hr/blog →
            </a>
          </div>

          <p style="color: #999; font-size: 13px; margin-top: 24px; border-top: 1px solid #eee; padding-top: 16px;">
            StayMira · info@staymira.hr · +385 1 234 5678<br />
            Zagreb, Hrvatska
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Interna greška servera.' }, { status: 500 });
  }
}
