"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export interface TocItem {
  id: string;
  title: string;
  number?: string;
}

interface LegalPageShellProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  badge: string;
  tocItems: TocItem[];
  children: React.ReactNode;
}

export default function LegalPageShell({
  title,
  subtitle,
  lastUpdated,
  badge,
  tocItems,
  children,
}: LegalPageShellProps) {
  const [activeId, setActiveId] = useState<string>(tocItems[0]?.id || "");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const scrollPosition = window.scrollY + 180;
      for (let i = tocItems.length - 1; i >= 0; i--) {
        const item = tocItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      const headerOffset = 120;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (window.history.pushState) {
        window.history.pushState(null, "", `#${id}`);
      }
      setActiveId(id);
      setMobileTocOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col selection:bg-white/20 selection:text-white">
      {/* Reusable Global Header */}
      <Header />

      <main className="flex-grow pt-28 md:pt-36 pb-20 w-full">
        {/* Hero Section */}
        <section className="w-full border-b border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-text-muted">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-text-muted">Legal</span>
              <span className="text-white/30">/</span>
              <span className="text-white font-medium truncate">{title}</span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-white text-xs font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                {badge}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-headline-lg">
                {title}
              </h1>

              <p className="text-base sm:text-lg text-text-muted leading-relaxed font-body-lg">
                {subtitle}
              </p>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-text-muted pt-2">
                <span className="material-symbols-outlined text-[16px] text-white/70">schedule</span>
                <span>Last Updated: <strong className="text-white font-medium">{lastUpdated}</strong></span>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile / Tablet Collapsible Quick Jump TOC */}
        <div className="lg:hidden sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-3">
          <button
            onClick={() => setMobileTocOpen(!mobileTocOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-sm font-medium text-white transition-all active:scale-[0.99]"
            aria-expanded={mobileTocOpen}
            aria-controls="mobile-toc-drawer"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="material-symbols-outlined text-white text-lg">toc</span>
              <span className="text-text-muted text-xs uppercase tracking-wider">Jump to:</span>
              <span className="truncate text-white font-semibold">
                {tocItems.find((i) => i.id === activeId)?.title || "Table of Contents"}
              </span>
            </div>
            <span
              className={`material-symbols-outlined text-lg transition-transform duration-200 ${
                mobileTocOpen ? "rotate-180" : ""
              }`}
            >
              expand_more
            </span>
          </button>

          {mobileTocOpen && (
            <div
              id="mobile-toc-drawer"
              className="mt-2 max-h-72 overflow-y-auto rounded-xl bg-surface-container border border-white/10 p-2 shadow-2xl space-y-1"
            >
              {tocItems.map((item, idx) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`block px-3 py-2 rounded-lg text-xs sm:text-sm transition-colors ${
                      isActive
                        ? "bg-white text-black font-bold"
                        : "text-text-muted hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="opacity-70 mr-1.5">{item.number || `${idx + 1}.`}</span>
                    {item.title}
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Content Layout */}
        <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Desktop Sticky Table of Contents */}
            <aside className="hidden lg:block lg:col-span-4 xl:col-span-4">
              <div className="sticky top-36 rounded-2xl bg-surface-container/70 border border-white/10 backdrop-blur-xl p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                  <span className="material-symbols-outlined text-white text-xl">menu_book</span>
                  <h2 className="text-xs uppercase tracking-widest font-bold text-white">
                    Table of Contents
                  </h2>
                </div>

                <nav aria-label="Table of contents" className="space-y-1 max-h-[calc(100vh-260px)] overflow-y-auto pr-2 custom-scrollbar">
                  {tocItems.map((item, idx) => {
                    const isActive = activeId === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => scrollToSection(e, item.id)}
                        className={`group flex items-start gap-2 px-3 py-2 rounded-lg text-xs transition-all ${
                          isActive
                            ? "bg-white text-black font-bold shadow-md translate-x-1"
                            : "text-text-muted hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className={`text-[11px] font-mono shrink-0 ${isActive ? "text-black/80 font-bold" : "text-white/40 group-hover:text-white/70"}`}>
                          {item.number || `${String(idx + 1).padStart(2, "0")}.`}
                        </span>
                        <span className="leading-snug">{item.title}</span>
                      </a>
                    );
                  })}
                </nav>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-text-muted">
                  <span>Valen Info Legal</span>
                  <Link href="/#contact" className="text-white hover:underline flex items-center gap-1 font-medium">
                    Questions? <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Document Content */}
            <article className="lg:col-span-8 xl:col-span-8 max-w-3xl space-y-12">
              {children}

              {/* Verified Contact Card at Bottom of Page */}
              <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-surface-container border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                    <span className="material-symbols-outlined text-xl">contact_support</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-headline-md">Have Legal or Privacy Inquiries?</h3>
                    <p className="text-xs sm:text-sm text-text-muted">Our compliance and engineering team is available for direct assistance.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <p className="text-xs uppercase tracking-wider text-text-muted">Direct Email</p>
                    <a
                      href="mailto:Ankitsinghrajput.mail@gmail.com"
                      className="text-sm font-semibold text-white hover:underline break-all block"
                    >
                      Ankitsinghrajput.mail@gmail.com
                    </a>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <p className="text-xs uppercase tracking-wider text-text-muted">Direct Phone</p>
                    <a
                      href="tel:+919354325755"
                      className="text-sm font-semibold text-white hover:underline block"
                    >
                      +91 9354325755
                    </a>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 items-center justify-between text-xs text-text-muted">
                  <span>Valen Info • Enterprise High-Tech Solutions</span>
                  <Link href="/" className="text-white hover:underline font-medium">
                    ← Back to Home
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white text-black font-bold shadow-2xl hover:bg-slate-200 active:scale-95 transition-all flex items-center justify-center"
          aria-label="Back to top"
          title="Back to top"
        >
          <span className="material-symbols-outlined text-xl">arrow_upward</span>
        </button>
      )}

      {/* Reusable Global Footer */}
      <Footer />
    </div>
  );
}
