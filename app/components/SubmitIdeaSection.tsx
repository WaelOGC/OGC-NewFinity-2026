"use client";
import { useState } from "react";

const categories = ["Web Application","Mobile App","AI / Automation","E-Commerce","SaaS Platform","UI/UX Design","Consulting","Other"];
const perks = [["📄","Expert Review — Always Free"],["🔒","100% Confidential"],["🚀","Fast Kickoff Once Approved"]];

const inp: React.CSSProperties = { 
  width: "100%", 
  padding: "13px 16px", 
  background: "rgba(255,255,255,0.03)", 
  border: "1px solid rgba(255,255,255,0.07)", 
  borderRadius: 8, 
  color: "#fff", 
  fontSize: 13, 
  outline: "none", 
  fontFamily: "'Outfit', sans-serif", 
  marginBottom: 12, 
  transition: "border-color 0.25s", 
  display: "block" 
};

export default function SubmitIdeaSection() {
  const [form, setForm] = useState({ name: "", email: "", title: "", category: "", description: "" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/submit-idea", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(form) 
      });

      setStatus(res.ok ? "success" : "error");

    } catch { 
      setStatus("error"); 
    }
  };


  return (

    <section id="submit" className="rev" style={{ padding: "88px 56px", background: "transparent" }}>

      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gap: 72, alignItems: "start" }} className="submit-grid">

        <div>

          <div style={{ fontSize: 10, color: "#FF6B1A", textTransform: "uppercase" as const, letterSpacing: "0.2em", fontWeight: 700, marginBottom: 12 }}>
            Get started
          </div>


          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 16 }}>

            Submit Your <em style={{ color: "#FF6B1A", fontStyle: "normal" }}>Idea</em>

          </h2>


          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: 36 }}>

            Free review, honest feedback, 48h response. No commitment required.

          </p>


          <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>

            {perks.map(([icon, text]) => (

              <div key={text}

                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 14, 
                  padding: "15px 20px", 

                  background: "rgba(255,255,255,0.03)",

                  border: "1px solid rgba(255,255,255,0.07)", 
                  borderRadius: 16, 
                  transition: "all 0.35s" 
                }}

                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,107,26,0.2)";
                  el.style.background = "rgba(255,255,255,0.05)";
                  el.style.transform = "translateX(8px)";
                  el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
                }}

                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.07)";
                  el.style.background = "rgba(255,255,255,0.03)";
                  el.style.transform = "translateX(0)";
                  el.style.boxShadow = "none";
                }}

              >

                <span style={{ fontSize: 20 }}>{icon}</span>

                <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.75)" }}>
                  {text}
                </span>

              </div>

            ))}

          </div>

        </div>



        <div style={{ 
          background: "rgba(255,255,255,0.03)", 
          border: "1px solid rgba(255,255,255,0.07)", 
          borderRadius: 20, 
          padding: 36, 
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)" 
        }}>


          {status === "success" ? (

            <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", padding: "64px 0", textAlign: "center" as const }}>

              <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>

              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 8 }}>
                Idea Received!
              </h3>

              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14 }}>
                We'll review it and get back to you within 48 hours.
              </p>

            </div>

          ) : (

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" as const }}>


              {[
                { key: "name", placeholder: "Your Name", type: "text" },
                { key: "email", placeholder: "Your Email", type: "email" },
                { key: "title", placeholder: "Project Title", type: "text" },
              ].map(f => (

                <input 
                  key={f.key} 
                  type={f.type} 
                  placeholder={f.placeholder} 
                  required
                  value={(form as Record<string,string>)[f.key]}
                  onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  style={inp}
                  onFocus={e => e.target.style.borderColor = "rgba(255,107,26,0.4)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.07)"}
                />

              ))}


              <select 
                required 
                value={form.category} 
                onChange={e => setForm({ ...form, category: e.target.value })}
                style={{ ...inp, appearance: "none" as const }}
              >

                <option value="" disabled>Category</option>

                {categories.map(c => 
                  <option key={c} value={c} style={{ background: "#05050F" }}>
                    {c}
                  </option>
                )}

              </select>


              <textarea 
                placeholder="Describe your idea..." 
                required 
                rows={4}
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                style={{ ...inp, resize: "none" as const }}
                onFocus={e => e.target.style.borderColor = "rgba(255,107,26,0.4)"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.07)"}
              />


              <button 
                type="submit" 
                disabled={status === "loading"}

                style={{ 
                  width: "100%", 
                  padding: 15, 
                  background: "linear-gradient(135deg,#FF6B1A,#E05510)", 
                  color: "#fff", 
                  fontWeight: 800, 
                  fontSize: 14, 
                  borderRadius: 10, 
                  border: "none", 
                  cursor: "pointer", 
                  fontFamily: "'Outfit', sans-serif", 
                  letterSpacing: "0.04em",
                  boxShadow: "0 0 32px rgba(255,107,26,0.2)",
                  opacity: status === "loading" ? 0.6 : 1 
                }}

              >

                {status === "loading" ? "Sending..." : "🚀 Submit Idea"}

              </button>


              {status === "error" && 
                <p style={{ color: "#f87171", fontSize: 13, textAlign: "center" as const, marginTop: 12 }}>
                  Something went wrong. Email contact@ogcnewfinity.com
                </p>
              }


            </form>

          )}

        </div>


      </div>


      <style>
        {`
        .submit-grid{grid-template-columns:1fr;}

        @media(min-width:1024px){
          .submit-grid{grid-template-columns:1fr 1fr;}
        }
        `}
      </style>

    </section>
  );
}