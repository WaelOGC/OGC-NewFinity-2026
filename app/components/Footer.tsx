export default function Footer() {
  return (
    <footer style={{ background: "transparent", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "56px 56px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gap: 48, marginBottom: 48 }} className="ft-grid">
          
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'Outfit', sans-serif", fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 12 }}>
              <div style={{ width: 28, height: 28, border: "2px solid #FF6B1A", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: "#FF6B1A" }}>
                OGC
              </div>
              OGC NewFinity
            </div>

            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: 20 }}>
              Build Smarter. Scale Faster. Your technology partner from first idea to live product.
            </p>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: 6 }}>
              {["📍 The Hague, Netherlands", "✉️ contact@ogcnewfinity.com", "🌐 ogcnewfinity.com"].map(item => (
                <span key={item} style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>{item}</span>
              ))}
            </div>
          </div>



          <div>
            <h5 style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", textTransform: "uppercase" as const, letterSpacing: "0.16em", fontWeight: 700, marginBottom: 16 }}>
              Services
            </h5>

            {["AI Development", "Web & App", "Mobile Apps", "Cybersecurity", "UI/UX Design", "Consulting"].map(s => (

              <a 
                key={s} 
                href="#services" 
                style={{ 
                  display: "block", 
                  fontSize: 13, 
                  color: "rgba(255,255,255,0.55)", 
                  textDecoration: "none", 
                  marginBottom: 10, 
                  transition: "color 0.2s" 
                }}

                onMouseEnter={e => (e.target as HTMLElement).style.color = "#FF6B1A"}

                onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"}
              >

                {s}

              </a>

            ))}

          </div>




          <div>

            <h5 style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", textTransform: "uppercase" as const, letterSpacing: "0.16em", fontWeight: 700, marginBottom: 16 }}>
              Company
            </h5>


            {[["About Us","#about"],["Our Mission","#mission"],["Blog","#blog"],["Help & Support","#help"],["Contact","#submit"]].map(([label, href]) => (

              <a 
                key={label} 
                href={href} 

                style={{ 
                  display: "block", 
                  fontSize: 13, 
                  color: "rgba(255,255,255,0.55)", 
                  textDecoration: "none", 
                  marginBottom: 10, 
                  transition: "color 0.2s" 
                }}

                onMouseEnter={e => (e.target as HTMLElement).style.color = "#FF6B1A"}

                onMouseLeave={e => (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"}

              >

                {label}

              </a>

            ))}

          </div>




          <div>

            <h5 style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", textTransform: "uppercase" as const, letterSpacing: "0.16em", fontWeight: 700, marginBottom: 16 }}>
              Start Today
            </h5>


            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 16 }}>
              Free review, 48h response. No commitment required.
            </p>


            <button

              onClick={() => document.querySelector('#submit')?.scrollIntoView({ behavior: 'smooth' })}

              style={{ 
                padding: "10px 24px", 
                background: "transparent", 
                color: "#FF6B1A", 
                fontSize: 13, 
                fontWeight: 700, 
                borderRadius: 8, 
                border: "1px solid #FF6B1A", 
                cursor: "pointer", 
                fontFamily: "'Outfit', sans-serif", 
                transition: "all 0.25s" 
              }}

              onMouseEnter={e => { 
                (e.currentTarget as HTMLElement).style.background = "#FF6B1A"; 
                (e.currentTarget as HTMLElement).style.color = "#fff"; 
              }}

              onMouseLeave={e => { 
                (e.currentTarget as HTMLElement).style.background = "transparent"; 
                (e.currentTarget as HTMLElement).style.color = "#FF6B1A"; 
              }}

            >

              Submit Your Idea

            </button>

          </div>

        </div>



        <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)", marginBottom: 28 }} />



        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" as const, gap: 12 }}>

          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
            © 2024 OGC NewFinity. All rights reserved.
          </p>

          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
            Est. 2022 · The Hague, Netherlands
          </p>

        </div>

      </div>



      <style>
        {`
        .ft-grid{
          grid-template-columns:1fr;
        }

        @media(min-width:768px){
          .ft-grid{
            grid-template-columns:1.5fr 1fr 1fr 1fr;
          }
        }
        `}
      </style>


    </footer>
  );
}