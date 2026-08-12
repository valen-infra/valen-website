"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 hidden md:block">
      <div className="hidden md:flex bg-surface-container-lowest/90 backdrop-blur-md px-gutter h-12 border-b border-white/5 items-center justify-between">
        <div className="flex gap-6 text-label-sm text-text-muted">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-primary">phone</span>
            <span>+1 (800) 555-VALEN</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-primary">mail</span>
            <span>contact@valen.info</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-label-sm text-text-muted">
            For Client Support: <span className="text-on-surface">info@valen.info</span>
          </span>
          <div className="flex gap-3 ml-4 border-l border-white/10 pl-4">
            <a className="text-text-muted hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
            </a>
            <a className="text-text-muted hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-[18px]">share</span>
            </a>
          </div>
        </div>
      </div>
      <nav
        className={`h-20 px-gutter border-b border-white/5 backdrop-blur-xl ${
          isScrolled ? "bg-background/95 shadow-lg" : "bg-background/80"
        }`}
      >
        <div className="max-w-container-max mx-auto h-full flex justify-between items-center">
          <Logo size="md" href="#" />
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-primary font-bold border-b-2 border-primary pb-1 font-label-md" href="#">
              Home
            </a>
            <a className="text-on-surface/80 font-medium hover:text-primary transition-colors font-label-md" href="#">
              About
            </a>
            <div className="group relative">
              <button className="flex items-center gap-1 text-on-surface/80 font-medium group-hover:text-primary transition-colors font-label-md">
                Service <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
            </div>
            <div className="group relative">
              <button className="flex items-center gap-1 text-on-surface/80 font-medium group-hover:text-primary transition-colors font-label-md">
                Project <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
            </div>
            <a className="text-on-surface/80 font-medium hover:text-primary transition-colors font-label-md" href="#">
              Pages
            </a>
            <a className="text-on-surface/80 font-medium hover:text-primary transition-colors font-label-md" href="#">
              Blog
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="hidden lg:block bg-primary text-on-primary px-6 py-2.5 rounded font-label-md neon-glow-btn transition-all duration-300"
              href="#"
            >
              Get A Quote
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-on-surface"
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative flex flex-col w-4/5 max-w-sm h-full bg-background border-r border-white/10 p-6 z-50">
            <div className="flex items-center justify-between mb-8">
              <Logo size="sm" href="#" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface" aria-label="Close menu">
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>
            <div className="flex flex-col gap-6 text-lg font-medium">
              <a onClick={() => setIsMobileMenuOpen(false)} className="text-primary" href="#">
                Home
              </a>
              <a onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface/80 hover:text-primary" href="#">
                About
              </a>
              <a onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface/80 hover:text-primary" href="#">
                Service
              </a>
              <a onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface/80 hover:text-primary" href="#">
                Project
              </a>
              <a onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface/80 hover:text-primary" href="#">
                Pages
              </a>
              <a onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface/80 hover:text-primary" href="#">
                Blog
              </a>
              <a
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-on-primary text-center px-6 py-3 rounded font-label-md neon-glow-btn transition-all mt-6"
                href="#"
              >
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
