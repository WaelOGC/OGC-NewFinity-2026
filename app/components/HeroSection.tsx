"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const orbitRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let frame: number;
    let angle = 0;
    const animate = () => {
      angle += 0.25;
      if (orbitRef.current) orbitRef.current.style.transform = `rotate(${angle}deg)`;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 56px 80px", position: "relative", overflow: "hidden", background: "transparent" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(255,107,26,0.012) 80px,rgba(255,107,26,0.012) 81px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(255,107,26,0.012) 80px,rgba(255,107,26,0.012) 81px)" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,transparent,#FF6B1A,transparent)" }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>

        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", border: "1px solid rgba(255,107,26,0.3)", borderRadius: 999, fontSize: 11, color: "#FF6B1A", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: 40, background: "rgba(255,107,26,0.05)", animation: "fadeup 0.8s ease both" }}>
            <span style={{ width: 7, height: 7, background: "#FF6B1A", borderRadius: "50%", animation: "pulse 1.5s infinite", display: "inline-block" }} />
            The Hague, Netherlands — Est. 2022
          </div>

          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(36px,4.5vw,58px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 28 }}>
            <span style={{ display: "block", color: "#fff", animation: "fadeup 0.8s 0.1s ease both" }}>Build</span>
            <span style={{ display: "block", background: "linear-gradient(90deg,#FF6B1A,#FFB347,#FF6B1A)", backgroundSize: "200%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "fadeup 0.8s 0.2s ease both, shine 3s 1s linear infinite" }}>Smarter.</span>
            <span style={{ display: "block", WebkitTextStroke: "1.5px rgba(255,255,255,0.2)", color: "transparent", animation: "fadeup 0.8s 0.3s ease both" }}>Scale Faster.</span>
          </h1>

          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: 460, marginBottom: 40, animation: "fadeup 0.8s 0.4s ease both", fontFamily: "'Outfit', sans-serif" }}>
            We design and build web apps, mobile applications, and AI-powered solutions — connecting you with expert teams to bring your idea to life.
          </p>

          <div style={{ display: "flex", gap: 14, marginBottom: 64, animation: "fadeup 0.8s 0.5s ease both" }}>
            <button onClick={() => document.querySelector('#submit')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ padding: "13px 28px", background: "#FF6B1A", color: "#fff", fontWeight: 700, fontSize: 14, borderRadius: 8, border: "none", cursor: "pointer", fontFamily: "'Outfit', sans-serif", boxShadow: "0 0 28px rgba(255,107,26,0.25)", transition: "all 0.25s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 48px rgba(255,107,26,0.5)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(255,107,26,0.25)"; }}>
              Submit Your Idea →
            </button>
            <button onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ padding: "13px 28px", background: "transparent", color: "rgba(255,255,255,0.65)", fontWeight: 600, fontSize: 14, borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer", fontFamily: "'Outfit', sans-serif", transition: "all 0.25s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.4)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)"; }}>
              View Services
            </button>
          </div>

          <div style={{ display: "inline-flex", border: "1px solid rgba(255,107,26,0.1)", borderRadius: 12, overflow: "hidden", background: "rgba(255,107,26,0.03)", animation: "fadeup 0.8s 0.6s ease both" }}>
            {[["3+", "Years"], ["7", "Services"], ["48h", "Response"], ["100%", "Custom"]].map(([n, l], i) => (
              <div key={l} style={{ padding: "16px 28px", borderRight: i < 3 ? "1px solid rgba(255,107,26,0.08)" : "none" }}>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 22, fontWeight: 800, color: "#FF6B1A" }}>{n}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", textTransform: "uppercase" as const, letterSpacing: "0.14em", marginTop: 3, fontWeight: 600 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: 300, height: 300 }}>
            <div style={{ position: "absolute", inset: -20, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,107,26,0.08) 0%,transparent 65%)", animation: "orbglow 3s ease-in-out infinite" }} />
            <svg ref={orbitRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", transformOrigin: "center" }} viewBox="0 0 300 300">
              <ellipse cx="150" cy="150" rx="140" ry="55" fill="none" stroke="#FF6B1A" strokeWidth="1" opacity="0.6" />
              <ellipse cx="150" cy="150" rx="140" ry="55" fill="none" stroke="#FF6B1A" strokeWidth="0.6" opacity="0.3" transform="rotate(60 150 150)" />
              <ellipse cx="150" cy="150" rx="140" ry="55" fill="none" stroke="#FF6B1A" strokeWidth="0.6" opacity="0.3" transform="rotate(120 150 150)" />
              <circle cx="150" cy="95" r="5" fill="#FF6B1A" opacity="0.9" />
              <circle cx="285" cy="165" r="3" fill="#FFB347" opacity="0.7" />
              <circle cx="30" cy="180" r="3" fill="#FFB347" opacity="0.7" />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 90, height: 90, borderRadius: "50%", background: "rgba(17,17,24,0.9)", border: "1px solid rgba(255,107,26,0.25)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 50px rgba(255,107,26,0.18)" }}>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 17, fontWeight: 800, color: "#FF6B1A", letterSpacing: "0.1em" }}>OGC</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeup { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes shine { to { background-position: 200% center; } }
        @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(255,107,26,0.5); } 50% { box-shadow: 0 0 0 8px transparent; } }
        @keyframes orbglow { 0%,100% { opacity:0.5; } 50% { opacity:1; } }
        @media(max-width:1024px) { #hero > div > div { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}