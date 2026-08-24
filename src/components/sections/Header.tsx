"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "the-problem", label: "The Roadblocks", href: "#the-problem" },
  { id: "services", label: "Our Solutions", href: "#services" },
  { id: "cases", label: "Case Studies", href: "#cases" },
  { id: "blueprint", label: "The Blueprint", href: "#blueprint" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Active section detection
      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
      if (window.scrollY < 150) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTarget = (href: string) => {
    if (href === "#" || href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.history.pushState) {
        window.history.pushState(null, "", window.location.pathname);
      }
      setActiveSection("home");
      return;
    }

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 140;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (window.history.pushState) {
        window.history.pushState(null, "", href);
      }
      setActiveSection(targetId);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToTarget(href);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Valen Info | High-Tech IT Solutions & Digital Agency",
          text: "Transforming complex problems into elegant digital realities.",
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        scrollToTarget("#contact");
      }
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 hidden md:block">
      {/* Top Utility Bar */}
      <div className="hidden md:flex bg-surface-container-lowest/90 backdrop-blur-md px-gutter h-12 border-b border-white/5 items-center justify-between">
        <div className="flex gap-6 text-label-sm text-text-muted">
          <a
            href="tel:+180055582536"
            className="flex items-center gap-2 hover:text-white transition-colors"
            title="Call Valen Info"
          >
            <span className="material-symbols-outlined text-[16px] text-white">phone</span>
            <span>+1 (800) 555-VALEN</span>
          </a>
          <a
            href="mailto:contact@valen.info"
            className="flex items-center gap-2 hover:text-white transition-colors"
            title="Email Valen Info"
          >
            <span className="material-symbols-outlined text-[16px] text-white">mail</span>
            <span>contact@valen.info</span>
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-label-sm text-text-muted">
            For Client Support:{" "}
            <a href="mailto:info@valen.info" className="text-on-surface hover:text-white underline-offset-2 hover:underline">
              info@valen.info
            </a>
          </span>
          <div className="flex gap-3 ml-4 border-l border-white/10 pl-4 items-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget("#contact");
              }}
              className="text-text-muted hover:text-white transition-colors flex items-center"
              title="Get Solution Audit & Contact"
              aria-label="Scan or Contact"
            >
              <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
            </button>
            <button
              onClick={handleShare}
              className="text-text-muted hover:text-white transition-colors relative flex items-center"
              title="Share Valen Info"
              aria-label="Share"
            >
              <span className="material-symbols-outlined text-[18px]">share</span>
              {copied && (
                <span className="absolute -bottom-8 right-0 bg-white text-black text-xs font-semibold px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
                  Link copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`h-20 px-gutter border-b border-white/5 backdrop-blur-xl transition-all duration-300 ${
          isScrolled ? "bg-background/95 shadow-2xl shadow-black/80" : "bg-background/80"
        }`}
      >
        <div className="max-w-container-max mx-auto h-full flex justify-between items-center">
          <Logo size="md" href="#home" onClick={(e) => handleNavClick(e, "#home")} />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2 rounded-full font-label-md text-sm transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.35)] scale-[1.02]"
                      : "text-on-surface/75 font-medium hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              className="hidden lg:inline-flex items-center justify-center bg-white text-black font-bold px-6 py-2.5 rounded font-label-md neon-glow-btn transition-all duration-300 cursor-pointer hover:bg-slate-100 active:scale-95"
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Get Solution Audit
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-on-surface p-1 hover:text-white"
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Inside Desktop Component as fallback) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative flex flex-col w-4/5 max-w-sm h-full bg-background border-r border-white/10 p-6 z-50">
            <div className="flex items-center justify-between mb-8">
              <Logo size="sm" href="#home" onClick={(e) => handleNavClick(e, "#home")} />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-on-surface hover:text-white"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>
            <div className="flex flex-col gap-5 text-lg font-medium">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`py-1 cursor-pointer transition-colors ${
                    activeSection === item.id ? "text-white font-bold" : "text-on-surface/80 hover:text-white"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
              <a
                onClick={(e) => handleNavClick(e, "#contact")}
                className="bg-white text-black font-bold text-center px-6 py-3 rounded font-label-md neon-glow-btn transition-all mt-4 cursor-pointer"
                href="#contact"
              >
                Get Solution Audit
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
