"use client";

const values = [
  { icon: "🧠", title: "Intelligence With Purpose", desc: "Every AI solution we build solves a real problem — not just a tech showcase." },
  { icon: "❤️", title: "Ethical by Design", desc: "Privacy, fairness, and security are built into every brief we take." },
  { icon: "🏙️", title: "Future Innovation", desc: "We stay ahead so our clients don't have to. Emerging tech, real outcomes." },
];

export default function MissionSection() {
  return (
    <section 
      id="mission" 
      className="rev" 
      style={{ 
        padding: "88px 56px", 
        background: "transparent" 
      }}
    >
      <div 
        style={{ 
          maxWidth: 1280, 
          margin: "0 auto", 
          display: "grid", 
          gap: 72, 
          alignItems: "center" 
        }} 
        className="mission-grid"
      >

        <div>
          <div 
            style={{ 
              fontSize: 10, 
              color: "#FF6B1A", 
              textTransform: "uppercase" as const, 
              letterSpacing: "0.2em", 
              fontWeight: 700, 
              marginBottom: 12 
            }}
          >
            Why we exist
          </div>

          <h2 
            style={{ 
              fontFamily: "'Outfit', sans-serif", 
              fontSize: "clamp(28px,3.5vw,40px)", 
              fontWeight: 800, 
              letterSpacing: "-0.02em", 
              lineHeight: 1.1, 
              marginBottom: 24 
            }}
          >
            Our <em style={{ color: "#FF6B1A", fontStyle: "normal" }}>Mission</em>
          </h2>

          <p 
            style={{ 
              fontSize: 15, 
              color: "rgba(255,255,255,0.55)", 
              lineHeight: 1.85, 
              marginBottom: 20 
            }}
          >
            We build technology that serves people, not the other way around. Our mission is to make world-class development accessible to every business — with integrity at every step.
          </p>

          <div 
            style={{ 
              fontSize: 14, 
              color: "#FF6B1A", 
              fontWeight: 700, 
              padding: "16px 20px", 
              borderLeft: "2px solid #FF6B1A", 
              background: "rgba(255,107,26,0.04)",
              borderRadius: 8
            }}
          >
            Intelligence With Purpose · Ethical by Design · Future Innovation
          </div>
        </div>


        <div 
          style={{ 
            display: "flex", 
            flexDirection: "column" as const, 
            gap: 14 
          }}
        >

          {values.map(v => (

            <div 
              key={v.title}

              style={{ 
                display: "flex", 
                gap: 16, 
                alignItems: "flex-start", 
                padding: "22px 24px",

                background: "rgba(255,255,255,0.03)",

                border: "1px solid rgba(255,255,255,0.07)", 
                borderRadius: 16,

                transition: "all 0.35s", 
                cursor: "pointer" 
              }}

              onMouseEnter={e => { 
                const el = e.currentTarget as HTMLElement;

                el.style.borderColor = "rgba(255,107,26,0.2)";
                el.style.transform = "translateX(8px)";
                el.style.background = "rgba(255,255,255,0.05)";
                el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
              }}

              onMouseLeave={e => { 
                const el = e.currentTarget as HTMLElement;

                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.transform = "translateX(0)";
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.boxShadow = "none";
              }}

            >

              <span 
                style={{ 
                  fontSize: 22, 
                  flexShrink: 0 
                }}
              >
                {v.icon}
              </span>


              <div>

                <div 
                  style={{ 
                    fontFamily: "'Outfit', sans-serif", 
                    fontSize: 13, 
                    fontWeight: 700, 
                    color: "#FF6B1A", 
                    marginBottom: 5 
                  }}
                >
                  {v.title}
                </div>

                <div 
                  style={{ 
                    fontSize: 12, 
                    color: "rgba(255,255,255,0.55)", 
                    lineHeight: 1.65 
                  }}
                >
                  {v.desc}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>


      <style>
        {`
          .mission-grid {
            grid-template-columns: 1fr;
          }

          @media(min-width:1024px){
            .mission-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
        `}
      </style>

    </section>
  );
}