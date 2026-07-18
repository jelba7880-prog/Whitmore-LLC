import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    name,
    email,
    phone,
    bestTime,
    matterType,
    lossAmount,
    message,
    hearAbout,
  } = body;

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
    subject: `New consultation request: ${matterType}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Best Time to Reach:</strong> ${bestTime || "Not provided"}</p>
      <p><strong>Matter Type:</strong> ${matterType}</p>
      <p><strong>Estimated Loss Amount:</strong> ${lossAmount || "Not provided"}</p>
      <p><strong>How They Heard About Us:</strong> ${hearAbout || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
