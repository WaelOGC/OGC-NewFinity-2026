"use client";
import { useRouter } from "next/navigation";
import { BLOG_POSTS } from "../data/blogData";

const tagColors: Record<string, { bg: string; color: string }> = {
  "AI Insights": { bg: "rgba(255,107,26,0.12)", color: "#FF6B1A" },
  "Tech Guides": { bg: "rgba(100,200,80,0.12)", color: "#8AC741" },
  "Blockchain": { bg: "rgba(80,150,255,0.12)", color: "#7AB4FF" },
};

export default function BlogPage() {
  const router = useRouter();
  const posts = Object.entries(BLOG_POSTS);

  return (
    <main style={{ minHeight: "100vh", background: "transparent", color: "#fff", fontFamily: "'Outfit', sans-serif", padding: "120px 24px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 64, textAlign: "center" as const }}>
          <div style={{ fontSize: 10, color: "#FF6B1A", textTransform: "uppercase" as const, letterSpacing: "0.2em", fontWeight: 700, marginBottom: 16 }}>Latest thinking</div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(32px,5vw,56px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 16 }}>
            Blog & <span style={{ color: "#FF6B1A" }}>Insights</span>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", maxWidth: 500, margin: "0 auto" }}>
            Thoughts, guides, and insights from the OGC NewFinity team.
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(255,107,26,0.2),transparent)", marginBottom: 56 }} />

        {/* Posts Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {posts.map(([slug, post]) => {
            const tagStyle = tagColors[post.tag] || { bg: "rgba(255,107,26,0.12)", color: "#FF6B1A" };
            return (
              <article
                key={slug}
                onClick={() => router.push(`/blog/${slug}`)}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 28, cursor: "pointer", transition: "all 0.3s", position: "relative" as const, overflow: "hidden" }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,107,26,0.25)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 16px 48px rgba(0,0,0,0.4)";
                  (el.querySelector('.bar') as HTMLElement).style.transform = "scaleX(1)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.07)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  (el.querySelector('.bar') as HTMLElement).style.transform = "scaleX(0)";
                }}>
                <div className="bar" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,#FF6B1A,#FFB347)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s" }} />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                  <span style={{ padding: "4px 12px", borderRadius: 999, fontSize: 9, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" as const, background: tagStyle.bg, color: tagStyle.color }}>
                    {post.tag}
                  </span>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>{post.date}</span>
                </div>

                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 17, fontWeight: 700, color: "#fff", lineHeight: 1.4, marginBottom: 12 }}>
                  {post.title}
                </h2>

                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 20 }}>
                  {post.excerpt}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#FF6B1A", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                  Read more →
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </main>
  );
}