"use client";
import { useState, useRef, useEffect } from "react";

type Message = { role: "user" | "assistant"; content: string };
const WELCOME: Message = { role: "assistant", content: "Hi! I'm Nova, OGC NewFinity's assistant 👋\n\nI can help you understand our services, give you a rough estimate, or connect you with the right team. What are you working on?" };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (open) { setUnread(0); setTimeout(() => inputRef.current?.focus(), 100); } }, [open]);
  useEffect(() => { if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const updated: Message[] = [...messages, { role: "user", content: text }];
    setMessages(updated);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: updated.slice(1) }) });
      const data = await res.json();
      setMessages(m => [...m, { role: "assistant", content: data.reply || "Let me check on that." }]);
      if (!open) setUnread(n => n + 1);
    } catch {
      setMessages(m => [...m, { role: "assistant", content: "Something went wrong. Email contact@ogcnewfinity.com" }]);
    } finally { setLoading(false); }
  };

  return (
    <>
      {/* Bubble */}
      <button onClick={() => setOpen(!open)}
        style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50, width: 56, height: 56, borderRadius: "50%", background: "#FF6B1A", border: "none", color: "#fff", fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(255,107,26,0.4)", transition: "transform 0.2s" }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.1)"}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}>
        {open ? "✕" : "💬"}
        {!open && unread > 0 && (
          <span style={{ position: "absolute", top: -4, right: -4, width: 20, height: 20, background: "#ef4444", borderRadius: "50%", fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>{unread}</span>
        )}
      </button>

      {/* Window */}
      {open && (
        <div style={{ position: "fixed", bottom: 96, right: 24, zIndex: 50, width: 360, height: 520, background: "#05050F", border: "1px solid rgba(255,107,26,0.15)", borderRadius: 16, display: "flex", flexDirection: "column" as const, boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,107,26,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🤖</div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: 0, fontFamily: "'Syne', sans-serif" }}>Nova</p>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80" }} />
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: 0 }}>OGC NewFinity Assistant</p>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", cursor: "pointer", fontSize: 18 }}>✕</button>
          </div>

          {/* Messages */}
          <div className="chat-scroll" style={{ flex: 1, overflowY: "auto" as const, padding: 16, display: "flex", flexDirection: "column" as const, gap: 12 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", gap: 8, flexDirection: m.role === "user" ? "row-reverse" : "row" as const }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: m.role === "assistant" ? "rgba(255,107,26,0.15)" : "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0, marginTop: 4 }}>
                  {m.role === "assistant" ? "🤖" : "👤"}
                </div>
                <div style={{ maxWidth: "80%", padding: "10px 14px", borderRadius: 12, fontSize: 13, lineHeight: 1.55, whiteSpace: "pre-wrap" as const, background: m.role === "assistant" ? "rgba(255,255,255,0.04)" : "#FF6B1A", color: "#fff", borderTopLeftRadius: m.role === "assistant" ? 4 : 12, borderTopRightRadius: m.role === "user" ? 4 : 12 }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(255,107,26,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>🤖</div>
                <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 12, borderTopLeftRadius: 4, padding: "12px 16px", display: "flex", gap: 4, alignItems: "center" }}>
                  {[0,150,300].map(d => <div key={d} style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF6B1A", animation: "bounce 1s infinite", animationDelay: `${d}ms` }} />)}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: 12, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ display: "flex", gap: 8 }}>
              <input ref={inputRef} type="text" value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
                placeholder="Ask about our services..."
                style={{ flex: 1, padding: "9px 14px", borderRadius: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "#fff", fontSize: 13, outline: "none", fontFamily: "inherit" }} />
              <button onClick={send} disabled={!input.trim() || loading}
                style={{ width: 36, height: 36, borderRadius: 8, background: "#FF6B1A", border: "none", cursor: "pointer", fontSize: 14, opacity: !input.trim() || loading ? 0.4 : 1, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                ➤
              </button>
            </div>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", textAlign: "center" as const, marginTop: 8 }}>Powered by OGC NewFinity AI</p>
          </div>
        </div>
      )}
      <style>{`@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}`}</style>
    </>
  );
}