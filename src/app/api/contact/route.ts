import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, matterType, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "Whitmore Harlow LLP <notifications@mail.whitmoreharlow.com>",
    to: process.env.CONTACT_EMAIL || "richard@whitmoreharlow.com",
    replyTo: email,
    subject: `New inquiry: ${matterType}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Matter Type:</strong> ${matterType}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
