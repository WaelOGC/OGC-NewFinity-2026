"use client";
import { useParams, useRouter } from "next/navigation";
import { BLOG_POSTS, BlogBlock } from "../../data/blogData";

const tagColors: Record<string, { bg: string; color: string }> = {
  "AI Insights": { bg: "rgba(255,107,26,0.12)", color: "#FF6B1A" },
  "Tech Guides": { bg: "rgba(100,200,80,0.12)", color: "#8AC741" },
  "Blockchain": { bg: "rgba(80,150,255,0.12)", color: "#7AB4FF" },
};

function renderBlock(block: BlogBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, marginBottom: 24 }}>
          {block.text}
        </p>
      );

    case "heading":
      return (
        <h2 key={index} style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginTop: 48, marginBottom: 16, letterSpacing: "-0.01em", borderLeft: "3px solid #FF6B1A", paddingLeft: 16 }}>
          {block.text}
        </h2>
      );

    case "subheading":
      return (
        <h3 key={index} style={{ fontSize: 18, fontWeight: 600, color: "rgba(255,255,255,0.9)", marginTop: 32, marginBottom: 12 }}>
          {block.text}
        </h3>
      );

    case "list":
      return (
        <ul key={index} style={{ marginBottom: 24, paddingLeft: 0, listStyle: "none" }}>
          {block.items.map((item, i) => (
            <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12, fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
              <span style={{ color: "#FF6B1A", fontWeight: 700, marginTop: 2, flexShrink: 0 }}>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "code":
      return (
        <div key={index} style={{ marginBottom: 28, borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,107,26,0.2)" }}>
          <div style={{ background: "rgba(255,107,26,0.1)", padding: "8px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 11, color: "#FF6B1A", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>{block.language}</span>
          </div>
          <pre style={{ background: "rgba(0,0,0,0.4)", padding: "20px 24px", margin: 0, overflowX: "auto", fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", fontFamily: "'Fira Code', 'Courier New', monospace" }}>
            <code>{block.code}</code>
          </pre>
        </div>
      );

    case "callout":
      return (
        <div key={index} style={{ background: "rgba(255,107,26,0.08)", border: "1px solid rgba(255,107,26,0.3)", borderRadius: 12, padding: "20px 24px", marginTop: 48, marginBottom: 24 }}>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, margin: 0 }}>
            💡 {block.text}
          </p>
        </div>
      );

    case "divider":
      return (
        <div key={index} style={{ height: 1, background: "linear-gradient(90deg,rgba(255,107,26,0.2),transparent)", margin: "40px 0" }} />
      );

    default:
      return null;
  }
}

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();

  const slug = params?.slug as string;
  const post = BLOG_POSTS[slug];

  if (!post) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#111118", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>
        <h1 style={{ fontSize: 32, marginBottom: 16 }}>Post Not Found</h1>
        <button onClick={() => router.push("/")} style={{ padding: "10px 20px", background: "#FF6B1A", border: "none", color: "#fff", borderRadius: 6, cursor: "pointer", fontWeight: 700 }}>
          Go Back Home
        </button>
      </div>
    );
  }

  const tagStyle = tagColors[post.tag] || { bg: "rgba(255,107,26,0.12)", color: "#FF6B1A" };

  return (
    <main style={{ minHeight: "100vh", background: "transparent", color: "#fff", fontFamily: "'Outfit', sans-serif", padding: "120px 24px 80px" }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>

        {/* Back button */}
        <button
          onClick={() => router.push("/blog")}
          style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: 14, marginBottom: 40, display: "flex", alignItems: "center", gap: 8, transition: "color 0.2s", padding: 0 }}
          onMouseEnter={e => e.currentTarget.style.color = "#FF6B1A"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
          ← Back to Blog
        </button>

        {/* Tag + date + read time */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
          <span style={{ padding: "4px 12px", borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", background: tagStyle.bg, color: tagStyle.color }}>
            {post.tag}
          </span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{post.date}</span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>· {post.readTime}</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 48 }}>
          {post.title}
        </h1>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg, rgba(255,107,26,0.3), transparent)", marginBottom: 48 }} />

        {/* Content blocks */}
        <article>
          {post.content.map((block, index) => renderBlock(block, index))}
        </article>

      </div>
    </main>
  );
}