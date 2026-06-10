"use client";

const posts = [
  { tag: "AI Insights", tagClass: "t1", date: "June 2026", title: "How to evaluate an AI vendor before signing anything", excerpt: "Most businesses get burned by AI promises. Here's the 5-question framework we use before recommending any tool to a client." },
  { tag: "Tech Guides", tagClass: "t2", date: "May 2026", title: "Building your first web app: the 2026 stack that actually works", excerpt: "Next.js, Tailwind, Postgres — no hype, just what works for 90% of projects out there." },
  { tag: "Blockchain", tagClass: "t3", date: "April 2026", title: "Web3 in 2026: what's real and what's still vapor", excerpt: "Cutting through the noise on blockchain adoption in Europe — where the real use cases are and where to stay cautious." },
];

const tagColors: Record<string, { bg: string; color: string }> = {
  t1: { bg: "rgba(255,107,26,0.12)", color: "#FF6B1A" },
  t2: { bg: "rgba(100,200,80,0.12)", color: "#8AC741" },
  t3: { bg: "rgba(80,150,255,0.12)", color: "#7AB4FF" },
};

export default function BlogSection() {
  return (
    <section id="blog" className="rev" style={{ padding: "88px 56px", background: "transparent" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ fontSize: 10, color: "#FF6B1A", textTransform: "uppercase" as const, letterSpacing: "0.2em", fontWeight: 700, marginBottom: 12 }}>Latest thinking</div>
        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 52 }}>
          Blog & <em style={{ color: "#FF6B1A", fontStyle: "normal" }}>Insights</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="blog-grid">
          {posts.map(p => (
            <article key={p.title}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 28, cursor: "pointer", transition: "all 0.35s", position: "relative" as const, overflow: "hidden" }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,107,26,0.2)";
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
                (el.querySelector('.bcard-bar') as HTMLElement).style.transform = "scaleX(1)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                (el.querySelector('.bcard-bar') as HTMLElement).style.transform = "scaleX(0)";
              }}>
              <div className="bcard-bar" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,#FF6B1A,#FFB347)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s" }} />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <span style={{ padding: "4px 12px", borderRadius: 999, fontSize: 9, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" as const, background: tagColors[p.tagClass].bg, color: tagColors[p.tagClass].color }}>{p.tag}</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>{p.date}</span>
              </div>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.4, marginBottom: 12 }}>{p.title}</h3>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 20 }}>{p.excerpt}</p>
              <span style={{ fontSize: 10, color: "#FF6B1A", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" as const }}>Read more →</span>
            </article>
          ))}
        </div>
      </div>
      <style>{`.blog-grid{grid-template-columns:1fr;}@media(min-width:768px){.blog-grid{grid-template-columns:repeat(3,1fr);}}`}</style>
    </section>
  );
}