import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { newsletterOwnerEmail, newsletterWelcomeEmail } from '@/lib/emailTemplates';

export async function POST(req: NextRequest) {
  // Lazy init — avoids build-time crash when env var is missing
  const resend = new Resend(process.env.RESEND_API_KEY);
  const TO_EMAIL = process.env.CONTACT_EMAIL ?? 'info@staymira.hr';

  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Nevažeći email.' }, { status: 400 });
    }

    // Notify owner of new subscriber
    await resend.emails.send({
      from: 'StayMira Newsletter <noreply@staymira.hr>',
      to: TO_EMAIL,
      subject: `📧 Novi pretplatnik: ${email}`,
      html: newsletterOwnerEmail(email),
    });

    // Welcome email to subscriber (fire-and-forget)
    resend.emails
      .send({
        from: 'StayMira <noreply@staymira.hr>',
        to: email,
        subject: 'Dobrodošli u StayMira newsletter! 🏠',
        html: newsletterWelcomeEmail(),
      })
      .catch((err) => console.error('Welcome email error:', err));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter API error:', err);
    return NextResponse.json({ error: 'Greška. Pokušajte ponovo.' }, { status: 500 });
  }
}
