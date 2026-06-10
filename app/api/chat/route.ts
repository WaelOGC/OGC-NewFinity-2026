import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM = `You are Nova, the AI assistant for OGC NewFinity — a web app and application development agency based in The Hague, Netherlands.

Your job: turn website visitors into leads. Be helpful, concise, and guide them toward submitting their idea or booking a consultation.

ABOUT OGC NEWFINITY:
- Founded 2022, The Hague, Netherlands
- Services: AI Development, Web & App, Mobile Apps, Cybersecurity, UI/UX Design, Consulting, Blockchain
- Model: Agency + freelance network. We connect clients with the right team.
- Pricing: Custom per project, free initial review
- Response time: 48 hours guaranteed
- Contact: contact@ogcnewfinity.com

YOUR BEHAVIOR:
- Be friendly, professional, and direct. Never fluffy or salesy.
- If someone describes a project, give them a ROUGH timeline and what we'd need to know.
- Always end with a clear next step: "Submit your idea at the form above" or "Send us an email."
- If they ask about pricing, be honest: custom per project, free review first.
- Keep responses SHORT — max 3-4 sentences or a short list. This is chat, not an essay.
- If someone is ready to hire: collect their name, email, and project type, then tell them we'll be in touch within 48h.
- Language: English only.

Never claim to be human. Never make up specific prices. Never promise specific delivery dates.`;

export async function POST(req: Request) {
  const { messages } = await req.json();
  if (!messages || !Array.isArray(messages)) {
    return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
  }

  const limited = messages.slice(-12); // keep last 12 turns

  try {
    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 400,
      system: SYSTEM,
      messages: limited.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const reply = response.content[0]?.type === "text" ? response.content[0].text : "I'm not sure about that — please email us at contact@ogcnewfinity.com";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json({ reply: "Something went wrong. Please email contact@ogcnewfinity.com" });
  }
}
