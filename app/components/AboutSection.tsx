"use client";

const cards = [
  { icon: "🎯", title: "Our Mission", desc: "Deliver ethical, high-quality technology that empowers businesses to innovate — on time and on budget." },
  { icon: "👁️", title: "Our Vision", desc: "Become the go-to technology partner for ambitious companies across Europe and the Arab world." },
  { icon: "❤️", title: "Our Values", desc: "Transparency, craftsmanship, and long-term relationships. We succeed when our clients succeed." },
];

export default function AboutSection() {
  return (
    <section id="about" className="rev" style={{ padding: "88px 56px", background: "transparent" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gap: 72, alignItems: "center" }} className="about-grid">
        <div>
          <div style={{ fontSize: 10, color: "#FF6B1A", textTransform: "uppercase" as const, letterSpacing: "0.2em", fontWeight: 700, marginBottom: 12 }}>Who we are</div>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 24 }}>
            About OGC <em style={{ color: "#FF6B1A", fontStyle: "normal" }}>NewFinity</em>
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: 20 }}>
            Founded in 2022 in The Hague, OGC NewFinity connects ambitious clients with vetted development teams across Europe. We act as your technical partner — from first idea to live product.
          </p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: 28 }}>
            Whether you need a full web app, a mobile product, AI integrations, or a security audit — we bring the right team to the table, fast.
          </p>
          <div style={{ fontSize: 14, color: "#FF6B1A", fontWeight: 700, padding: "16px 20px", borderLeft: "2px solid #FF6B1A", background: "rgba(255,107,26,0.04)" }}>
            Ethical Innovation · AI · Web · Blockchain
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
          {cards.map(c => (
            <div key={c.title}
              style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "22px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, transition: "all 0.3s", cursor: "pointer" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,107,26,0.2)"; el.style.transform = "translateX(8px)"; el.style.background = "rgba(255,107,26,0.04)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.transform = "translateX(0)"; el.style.background = "rgba(255,255,255,0.03)"; }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>{c.icon}</span>
              <div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: 700, color: "#FF6B1A", marginBottom: 5 }}>{c.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`.about-grid{grid-template-columns:1fr;}@media(min-width:1024px){.about-grid{grid-template-columns:1fr 1fr;}}`}</style>
    </section>
  );
}