"use client";

const services = [
  { num: "01", icon: "🧠", title: "AI Development", desc: "Custom AI integrations, chatbots, automation, and intelligent workflows tailored to your business.", tag: "Hot" },
  { num: "02", icon: "🌐", title: "Web & App", desc: "Full-stack web applications, SaaS platforms, and progressive web apps built to scale.", tag: null },
  { num: "03", icon: "📱", title: "Mobile Apps", desc: "Cross-platform iOS and Android applications with smooth UX and native performance.", tag: null },
  { num: "04", icon: "🛡️", title: "Cybersecurity", desc: "Security audits, penetration testing, and hardening for your digital infrastructure.", tag: null },
  { num: "05", icon: "🎨", title: "UI/UX Design", desc: "User-first design systems, wireframes, prototypes, and brand identity that converts.", tag: null },
  { num: "06", icon: "📈", title: "Consulting", desc: "Technical strategy, architecture reviews, and roadmaps to move your product forward fast.", tag: null },
];

export default function ServicesSection() {
  return (
    <section id="services" className="rev" style={{ padding: "88px 56px", background: "transparent" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ fontSize: 10, color: "#FF6B1A", textTransform: "uppercase" as const, letterSpacing: "0.2em", fontWeight: 700, marginBottom: 12 }}>What we do</div>
        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 52 }}>
          Our <em style={{ color: "#FF6B1A", fontStyle: "normal" }}>Services</em>
        </h2>
        
        {/* تم تعديل الـ Gap والـ Border ليناسب هيكل شبكة المدونة */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="svc-grid">
          {services.map(s => (
            <div key={s.title}
              style={{ 
                background: "rgba(255,255,255,0.03)", 
                border: "1px solid rgba(255,255,255,0.07)", 
                borderRadius: 16, 
                padding: 28, 
                position: "relative" as const, 
                cursor: "pointer", 
                transition: "all 0.35s", 
                overflow: "hidden" 
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,107,26,0.2)";
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
                (el.querySelector('.svc-line') as HTMLElement).style.transform = "scaleX(1)";
                (el.querySelector('.svc-glow') as HTMLElement).style.opacity = "1";
                (el.querySelector('.svc-arrow') as HTMLElement).style.opacity = "1";
                (el.querySelector('.svc-arrow') as HTMLElement).style.transform = "translate(0,0)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                (el.querySelector('.svc-line') as HTMLElement).style.transform = "scaleX(0)";
                (el.querySelector('.svc-glow') as HTMLElement).style.opacity = "0";
                (el.querySelector('.svc-arrow') as HTMLElement).style.opacity = "0";
                (el.querySelector('.svc-arrow') as HTMLElement).style.transform = "translate(-4px,4px)";
              }}>
              
              <div className="svc-line" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,#FF6B1A,#FFB347)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s" }} />
              <div className="svc-glow" style={{ position: "absolute", bottom: -60, left: "50%", transform: "translateX(-50%)", width: 120, height: 120, background: "radial-gradient(circle,rgba(255,107,26,0.15),transparent 70%)", opacity: 0, transition: "opacity 0.35s" }} />
              
              {s.tag && <span style={{ position: "absolute", top: 16, right: 16, padding: "4px 12px", background: "rgba(255,107,26,0.12)", color: "#FF6B1A", fontSize: 9, fontWeight: 800, borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>{s.tag}</span>}
              
              <div style={{ fontSize: 11, color: "rgba(255,107,26,0.3)", fontWeight: 700, letterSpacing: "0.12em", marginBottom: 20 }}>{s.num}</div>
              <div style={{ fontSize: 32, marginBottom: 18 }}>{s.icon}</div>
              
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.4, marginBottom: 12 }}>{s.title}</h3>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{s.desc}</div>
              
              <div className="svc-arrow" style={{ position: "absolute", bottom: 24, right: 24, color: "#FF6B1A", fontSize: 18, opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.3s", fontWeight: 800 }}>↗</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .svc-grid{grid-template-columns:1fr;}
        @media(min-width:768px){.svc-grid{grid-template-columns:repeat(3,1fr);}}
      `}</style>
    </section>
  );
}