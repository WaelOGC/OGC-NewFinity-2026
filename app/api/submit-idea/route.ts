import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, title, category, description } = body;

  if (!name || !email || !title || !description) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Log to console (replace with Resend email in production)
  console.log("=== NEW IDEA SUBMISSION ===");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Title: ${title}`);
  console.log(`Category: ${category}`);
  console.log(`Description: ${description}`);
  console.log("==========================");

  // TODO: Add Resend email notification
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'Nova <nova@ogcnewfinity.com>',
  //   to: process.env.LEAD_EMAIL!,
  //   subject: `New Idea: ${title} — ${category}`,
  //   html: `<h2>${title}</h2><p><b>From:</b> ${name} (${email})</p><p>${description}</p>`,
  // });

  return NextResponse.json({ success: true });
}
