"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: "#03030A", minHeight: "100vh", color: "#ffffff" }}>
      {/* Automatically includes the global Navbar on all blog pages */}
      <Navbar />
      
      {/* This renders the actual blog post content */}
      <div style={{ paddingTop: "40px" }}>
        {children}
      </div>
      
      {/* Automatically includes the global Footer on all blog pages */}
      <Footer />
    </div>
  );
}