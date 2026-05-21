import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Your inbox for new subscriber notifications
const TO_EMAIL = process.env.CONTACT_EMAIL ?? 'info@staymira.hr';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Nevažeći email.' }, { status: 400 });
    }

    // Notify owner of new subscriber
    await resend.emails.send({
      from: 'StayMira Newsletter <noreply@staymira.hr>',
      to: TO_EMAIL,
      subject: `Novi pretplatnik na newsletter: ${email}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 500px; margin: 0 auto; padding: 24px;">
          <div style="background: #0f2742; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #c9a86a; margin: 0; font-size: 16px;">Novi pretplatnik na newsletter</h2>
          </div>
          <p style="color: #333; font-size: 14px;">
            Email adresa: <strong>${email}</strong>
          </p>
          <p style="color: #999; font-size: 12px; margin-top: 16px;">
            Dodajte ga/je u vašu email listu (Mailchimp, Brevo, itd.).
          </p>
        </div>
      `,
    });

    // Welcome email to subscriber
    await resend.emails.send({
      from: 'StayMira <noreply@staymira.hr>',
      to: email,
      subject: 'Dobrodošli u StayMira newsletter! 🏠',
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
          <div style="background: #0f2742; padding: 28px; border-radius: 12px; text-align: center; margin-bottom: 24px;">
            <h1 style="color: #ffffff; font-size: 22px; margin: 0 0 8px;">Hvala na pretplati!</h1>
            <p style="color: #c9a86a; margin: 0; font-size: 15px;">StayMira Newsletter</p>
          </div>

          <p style="color: #333; font-size: 15px; line-height: 1.7;">
            Odlično — od sada ćete primati naše savjete, trendove i vijesti iz
            kratkoročnog najma u Hrvatskoj. Šaljemo newsletter jednom tjedno,
            bez spama.
          </p>

          <div style="background: #f4efe6; border-radius: 10px; padding: 20px; margin: 20px 0;">
            <p style="margin: 0 0 8px; color: #0f2742; font-weight: 700; font-size: 14px;">Što vas čeka:</p>
            <ul style="margin: 0; padding-left: 20px; color: #333; font-size: 14px; line-height: 1.8;">
              <li>Taktike za povećanje prihoda od najma</li>
              <li>Promjene na platformama Booking i Airbnb</li>
              <li>Sezonski trendovi u hrvatskom turizmu</li>
              <li>Savjeti za upravljanje gostima i recenzijama</li>
            </ul>
          </div>

          <div style="text-align: center; margin-top: 24px;">
            <a href="https://staymira.hr/blog" style="background: #c9a86a; color: white; text-decoration: none; font-weight: 600; padding: 12px 24px; border-radius: 999px; font-size: 14px; display: inline-block;">
              Pročitajte naš blog →
            </a>
          </div>

          <p style="color: #999; font-size: 12px; margin-top: 24px; border-top: 1px solid #eee; padding-top: 16px; text-align: center;">
            StayMira · info@staymira.hr<br />
            Možete se odjaviti u svakom trenutku odgovorom na ovaj email.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter API error:', err);
    return NextResponse.json({ error: 'Greška. Pokušajte ponovo.' }, { status: 500 });
  }
}
