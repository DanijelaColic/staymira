import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ownerNotificationEmail, autoReplyEmail } from '@/lib/emailTemplates';

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

    const lead = {
      name,
      email,
      phone,
      location: locationDisplay,
      propertyType: propertyTypeMap[propertyType] || propertyType || undefined,
      units,
      alreadyListed,
      message,
    };

    // Notify the StayMira team
    const { error } = await resend.emails.send({
      from: 'StayMira Kontakt <noreply@staymira.hr>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `🏠 Novi upit — ${name} (${locationDisplay})`,
      html: ownerNotificationEmail(lead),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Greška pri slanju. Pokušajte ponovo.' }, { status: 500 });
    }

    // Auto-reply to the sender (fire-and-forget, don't block on error)
    resend.emails
      .send({
        from: 'StayMira <noreply@staymira.hr>',
        to: email,
        subject: `Primili smo vaš upit, ${name.split(' ')[0]}! — StayMira`,
        html: autoReplyEmail(name, locationDisplay),
      })
      .catch((err) => console.error('Auto-reply send error:', err));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Interna greška servera.' }, { status: 500 });
  }
}
