"use client";

const topics = [
  { icon: "❓", title: "General", desc: "Questions about our process, pricing, and timelines." },
  { icon: "🔧", title: "Technical Support", desc: "Questions about ongoing projects or technical decisions." },
  { icon: "🤝", title: "Collaboration", desc: "Interested in partnering with us or joining our network?" },
];

const faqs = [
  { q: "How long does a typical project take?", a: "Landing page: 1–2 weeks. Full web app: 4–12 weeks. We define a clear timeline before we start." },
  { q: "What does 'free review' mean?", a: "Submit your idea and get an honest expert assessment — stack, timeline, and budget estimate — at no cost." },
  { q: "Do you work with existing teams?", a: "Yes. We can augment your team, take over a stalled project, or connect you with our partner network." },
  { q: "No technical background?", a: "That's exactly who we work best with. We translate business goals into technical solutions in plain language." },
];

export default function HelpSection() {
  return (
    <section id="help" className="rev" style={{ padding: "88px 56px", background: "transparent" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gap: 72 }} className="help-grid">
        <div>
          <div style={{ fontSize: 10, color: "#FF6B1A", textTransform: "uppercase" as const, letterSpacing: "0.2em", fontWeight: 700, marginBottom: 12 }}>We're here</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(30px,4vw,46px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 24 }}>
            Help & <em style={{ color: "#FF6B1A", fontStyle: "normal" }}>Support</em>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 28 }}>
            Browse FAQs or reach out — 48h response guaranteed.
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
            {topics.map(t => (
              <div key={t.title}
                style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "20px 22px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,107,26,0.2)"; el.style.transform = "translateX(6px)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.transform = "translateX(0)"; }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{t.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{t.title}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 10, color: "#FF6B1A", textTransform: "uppercase" as const, letterSpacing: "0.2em", fontWeight: 700, marginBottom: 20 }}>FAQ</div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
            {faqs.map(f => (
              <details key={f.q}
                style={{ padding: "16px 20px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, cursor: "pointer", transition: "border-color 0.3s" }}
                onToggle={e => (e.currentTarget as HTMLElement).style.borderColor = (e.currentTarget as HTMLDetailsElement).open ? "rgba(255,107,26,0.2)" : "rgba(255,255,255,0.07)"}>
                <summary style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.9)", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                  {f.q}
                  <span style={{ color: "#FF6B1A", fontSize: 20, fontWeight: 300, flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginTop: 12 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
      <style>{`.help-grid{grid-template-columns:1fr;}@media(min-width:1024px){.help-grid{grid-template-columns:1fr 1fr;}}`}</style>
    </section>
  );
}