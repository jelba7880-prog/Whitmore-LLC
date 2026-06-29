import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  // TODO: wire to CONTACT_EMAIL via nodemailer or Resend
  console.log("Consultation request submission:", body);

  return NextResponse.json({ success: true });
}
