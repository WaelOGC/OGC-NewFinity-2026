"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Mission", href: "#mission" },
  { label: "Blog", href: "#blog" },
  { label: "Help", href: "#help" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "20px 56px",
      background: scrolled ? "rgba(17,17,24,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(24px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,107,26,0.08)" : "none",
      transition: "all 0.4s ease",
    }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>
        <div style={{ width: 34, height: 34, border: "2px solid #FF6B1A", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: "#FF6B1A", animation: "spin 8s linear infinite", flexShrink: 0 }}>OGC</div>
        NewFinity
      </Link>

      <div style={{ display: "flex", gap: 36 }} className="nav-desktop">
        {links.map(l => (
          <a key={l.label} href={l.href} style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
            onMouseEnter={e => (e.target as HTMLElement).style.color = "#fff"}
            onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)"}>
            {l.label}
          </a>
        ))}
      </div>

      <button
        onClick={() => document.querySelector('#submit')?.scrollIntoView({ behavior: 'smooth' })}
        style={{ padding: "10px 24px", background: "transparent", color: "#FF6B1A", fontSize: 13, fontWeight: 700, borderRadius: 6, border: "1px solid #FF6B1A", cursor: "pointer", fontFamily: "inherit", transition: "all 0.25s" }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#FF6B1A"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#FF6B1A"; }}
        className="nav-desktop">
        Submit Idea
      </button>

      <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: 22, display: "none" }} className="nav-mobile">
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(17,17,24,0.98)", borderBottom: "1px solid rgba(255,107,26,0.08)", padding: "20px 56px", display: "flex", flexDirection: "column" as const, gap: 16 }}>
          {links.map(l => (
            <a key={l.label} href={l.href} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", textDecoration: "none" }} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <button
            onClick={() => { document.querySelector('#submit')?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); }}
            style={{ padding: "12px", background: "#FF6B1A", color: "#fff", fontSize: 14, fontWeight: 700, borderRadius: 8, border: "none", cursor: "pointer", fontFamily: "inherit" }}>
            Submit Idea
          </button>
        </div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) { .nav-desktop { display: none !important; } .nav-mobile { display: block !important; } }
      `}</style>
    </nav>
  );
}