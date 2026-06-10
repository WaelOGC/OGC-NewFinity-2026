"use client";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import MissionSection from "./components/MissionSection";
import BlogSection from "./components/BlogSection";
import SubmitIdeaSection from "./components/SubmitIdeaSection";
import HelpSection from "./components/HelpSection";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

export default function Home() {
  useEffect(() => {
    // Particles
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:0.4;';
    document.body.prepend(canvas);
    const ctx = canvas.getContext('2d')!;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    const pts: { x:number;y:number;vx:number;vy:number;r:number;o:number }[] = [];
    for(let i=0;i<70;i++) pts.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height, vx:(Math.random()-.5)*.4, vy:(Math.random()-.5)*.4, r:Math.random()*1.5+.5, o:Math.random()*.3+.1 });
    let animId: number;
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      pts.forEach(p => {
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>canvas.width) p.vx*=-1;
        if(p.y<0||p.y>canvas.height) p.vy*=-1;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(255,107,26,${p.o})`; ctx.fill();
      });
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.sqrt(dx*dx+dy*dy);
        if(d<120){ ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.strokeStyle=`rgba(255,107,26,${.05*(1-d/120)})`; ctx.lineWidth=.5; ctx.stroke(); }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    // Scroll reveal
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.rev').forEach(el => obs.observe(el));

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.remove();
      obs.disconnect();
    };
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "transparent" }}>
      <Navbar />
      <HeroSection />
      <div className="hr" />
      <ServicesSection />
      <div className="hr" />
      <AboutSection />
      <div className="hr" />
      <MissionSection />
      <div className="hr" />
      <BlogSection />
      <div className="hr" />
      <SubmitIdeaSection />
      <div className="hr" />
      <HelpSection />
      <div className="hr" />
      <Footer />
      <Chatbot />
    </main>
  );
}