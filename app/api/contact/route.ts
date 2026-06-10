import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, service, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  console.log("=== NEW CONTACT MESSAGE ===");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Service: ${service}`);
  console.log(`Message: ${message}`);
  console.log("===========================");

  return NextResponse.json({ success: true });
}
