"use client";
import { useState } from "react";

const services2 = [
  { icon: "🧠", label: "AI Development", desc: "Custom AI tools, chatbots, automation and intelligent workflows." },
  { icon: "🌐", label: "Web Development", desc: "Full-stack web apps, SaaS platforms, e-commerce, and APIs." },
  { icon: "🛡️", label: "Cybersecurity", desc: "Audits, penetration testing, and security hardening." },
];
const inp = { width: "100%", padding: "12px 16px", borderRadius: 8, background: "#0D0D0D", border: "1px solid #2A2A2A", color: "#fff", fontSize: 14, outline: "none", fontFamily: "inherit" };

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  return (
    <section id="contact" style={{ padding: "96px 0", background: "#0D0D0D" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)", marginBottom: 96 }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "grid", gap: 64, alignItems: "start" }} className="contact-grid">
        <div>
          <span style={{ display: "inline-block", padding: "4px 12px", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)", color: "#F97316", fontSize: 12, fontWeight: 500, borderRadius: 999, marginBottom: 24 }}>CONTACT OGC NEWFINITY</span>
          <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontFamily: "Georgia,serif", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            Get in <span style={{ color: "#F97316", fontStyle: "italic" }}>Touch</span>
          </h2>
          <div style={{ height: 2, width: 128, background: "linear-gradient(90deg, #F97316, transparent)", marginBottom: 32 }} />
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginBottom: 32 }}>
            {["AI Development","Blockchain","Web Development"].map(tag => (
              <span key={tag} style={{ padding: "6px 14px", borderRadius: 999, border: "1px solid #2A2A2A", color: "#A3A3A3", fontSize: 13 }}>{tag}</span>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 12, marginBottom: 32 }}>
            {services2.map(s => (
              <div key={s.label} style={{ padding: 16, borderRadius: 12, background: "#141414", border: "1px solid #2A2A2A", transition: "border-color 0.3s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#F97316"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#2A2A2A"}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 16 }}>{s.icon}</span>
                  <h3 style={{ fontWeight: 600, color: "#fff", fontSize: 14, margin: 0 }}>{s.label}</h3>
                </div>
                <p style={{ fontSize: 13, color: "#A3A3A3", margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ color: "#A3A3A3", fontSize: 14 }}>💬 Or chat with our AI assistant — available 24/7</p>
          <p style={{ color: "#525252", fontSize: 13, marginTop: 32 }}>The Hague, Netherlands · OGC NewFinity</p>
        </div>

        <div style={{ padding: 24, borderRadius: 16, background: "#141414", border: "1px solid #2A2A2A" }}>
          {status === "success" ? (
            <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", padding: "64px 0", textAlign: "center" as const }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: "#fff", marginBottom: 8 }}>Message Sent!</h3>
              <p style={{ color: "#A3A3A3", fontSize: 14 }}>We'll reply within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
              <input type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} style={inp} onFocus={e => e.target.style.borderColor="#F97316"} onBlur={e => e.target.style.borderColor="#2A2A2A"} />
              <input type="email" placeholder="Your Email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} style={inp} onFocus={e => e.target.style.borderColor="#F97316"} onBlur={e => e.target.style.borderColor="#2A2A2A"} />
              <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} style={{...inp, appearance: "none" as const}}>
                <option value="">Service (optional)</option>
                {["Web Application","Mobile App","AI / Automation","Cybersecurity","UI/UX Design","Consulting"].map(s => <option key={s}>{s}</option>)}
              </select>
              <textarea placeholder="Your message..." required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} style={{...inp, resize: "none" as const}} onFocus={e => e.target.style.borderColor="#F97316"} onBlur={e => e.target.style.borderColor="#2A2A2A"} />
              <button type="submit" disabled={status === "loading"} style={{ width: "100%", padding: "14px", background: "linear-gradient(135deg, #F97316, #EA580C)", color: "#fff", fontWeight: 600, borderRadius: 8, border: "none", cursor: "pointer", fontSize: 15, opacity: status === "loading" ? 0.6 : 1, fontFamily: "inherit" }}>
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && <p style={{ color: "#f87171", fontSize: 13, textAlign: "center" as const }}>Something went wrong. Email contact@ogcnewfinity.com</p>}
            </form>
          )}
        </div>
      </div>
      <style>{`.contact-grid{grid-template-columns:1fr;}@media(min-width:1024px){.contact-grid{grid-template-columns:1fr 1fr;}}`}</style>
    </section>
  );
}
