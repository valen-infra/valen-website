"use client";

import React, { useState } from "react";

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyItem {
  id: string;
  tabLabel: string;
  category: string;
  title: string;
  clientType: string;
  deliveryTime: string;
  problem: string;
  solution: string;
  impact: string;
  metrics: Metric[];
  tags: string[];
  imgUrl: string;
  alt: string;
  highlightPill: string;
  highlightColor: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    id: "cloud-saas",
    tabLabel: "01. Cloud & Cost Cut",
    category: "Cloud Migration & Cost Optimization",
    title: "SaaS Scale: 64% Server Cost Cut with 99.99% Uptime",
    clientType: "Enterprise B2B SaaS",
    deliveryTime: "5 Weeks Deployment",
    problem:
      "Stuck with skyrocketing monthly AWS bills ($48k+/mo) and database query timeouts during peak traffic hours, paralyzing onboarding.",
    solution:
      "Re-architected monolithic EC2 cluster into event-driven serverless microservices with Redis caching, PostgreSQL connection pooling, and automated auto-scaling.",
    impact:
      "Drastically slashed infrastructure spend, eliminated server crashes during 10x traffic surges, and lowered query latency to sub-45ms.",
    metrics: [
      { value: "64%", label: "Server Cost Reduction" },
      { value: "99.99%", label: "Verified Production Uptime" },
      { value: "<45ms", label: "P95 Query Latency" },
    ],
    tags: ["AWS Serverless", "PostgreSQL", "Docker", "Terraform", "Redis"],
    imgUrl: "/images/Cloud Migration & Cost Optimization Card.png",
    alt: "Vibrant high-tech cloud datacenter with illuminated blue and purple server racks",
    highlightPill: "64% Cost Cut",
    highlightColor: "text-sky-400 border-sky-500/40 bg-sky-500/15 shadow-[0_0_15px_rgba(56,189,248,0.2)]",
  },
  {
    id: "ecommerce-pwa",
    tabLabel: "02. E-Commerce PWA",
    category: "Full-Stack Web & Mobile App",
    title: "E-Commerce Replatforming: 3.8x Mobile Conversion Jump",
    clientType: "Direct-to-Consumer Brand",
    deliveryTime: "8 Weeks Delivery",
    problem:
      "A dated, sluggish legacy frontend caused a massive 70% mobile checkout abandonment rate and terrible 4.8s initial page load speeds.",
    solution:
      "Engineered an ultra-fast Next.js Progressive Web App with frictionless 1-tap checkout, edge-rendered product catalogs, and headless CMS integration.",
    impact:
      "Mobile conversion rates surged immediately, page load dropped under 1 second, and average session duration grew by 140%.",
    metrics: [
      { value: "3.8x", label: "Mobile Conversion Surge" },
      { value: "0.8s", label: "LCP Page Load Speed" },
      { value: "-72%", label: "Checkout Drop-off Rate" },
    ],
    tags: ["Next.js", "TypeScript", "TailwindCSS", "GraphQL", "Stripe"],
    imgUrl: "/images/E-Commerce Replatforming & Mobile PWA Card.png",
    alt: "Vibrant and colorful analytics and mobile commerce dashboard with charts",
    highlightPill: "3.8x Conversion Rate",
    highlightColor: "text-amber-400 border-amber-500/40 bg-amber-500/15 shadow-[0_0_15px_rgba(251,191,36,0.2)]",
  },
  {
    id: "fintech-ai",
    tabLabel: "03. FinTech AI Engine",
    category: "AI Workflow Automation",
    title: "FinTech Enterprise: 15,000 Hours Saved Yearly",
    clientType: "Global Financial Services",
    deliveryTime: "6 Weeks Rollout",
    problem:
      "Compliance and underwriting teams spent hundreds of hours manually verifying cross-border invoices, leading to backlogs and human review errors.",
    solution:
      "Built a secure, enterprise-grade AI extraction and validation pipeline with automated fraud detection and direct ERP synchronization.",
    impact:
      "Automated 92% of document auditing workloads with 99.4% precision, freeing up senior underwriters for high-value strategic approvals.",
    metrics: [
      { value: "15k+", label: "Hours Saved Annually" },
      { value: "99.4%", label: "Verification Accuracy" },
      { value: "92%", label: "Automated Processing" },
    ],
    tags: ["Custom LLMs", "Python", "FastAPI", "OCR Pipeline", "LangChain"],
    imgUrl: "/images/FinTech AI Engine & Workflow Automation Card.png",
    alt: "Vibrant iridescent neon violet and magenta 3D AI neural network flows",
    highlightPill: "15,000h Saved / Year",
    highlightColor: "text-fuchsia-400 border-fuchsia-500/40 bg-fuchsia-500/15 shadow-[0_0_15px_rgba(232,121,249,0.2)]",
  },
  {
    id: "healthcare-legacy",
    tabLabel: "04. Healthcare Portal",
    category: "Legacy Modernization",
    title: "Healthcare Portal: Zero-Downtime HIPAA Modernization",
    clientType: "Healthcare Provider Network",
    deliveryTime: "10 Weeks Phased Migration",
    problem:
      "A 10-year-old monolithic EHR database was prone to downtime, non-responsive on tablets, and failing strict modern security audits.",
    solution:
      "Executed a zero-downtime phased stranglehold migration to a HIPAA-compliant Next.js ecosystem with role-based access control and micro-frontends.",
    impact:
      "Modernized provider portal across 20+ clinic locations with 0 seconds of unplanned downtime during transition and full HIPAA compliance certification.",
    metrics: [
      { value: "0s", label: "Unplanned Downtime" },
      { value: "100%", label: "HIPAA Compliant" },
      { value: "20+", label: "Clinics Synchronized" },
    ],
    tags: ["Next.js", "Kubernetes", "PostgreSQL", "HIPAA Vault", "Docker"],
    imgUrl: "/images/Healthcare Portal Zero-Downtime Modernization Card.png",
    alt: "Modern high-tech healthcare tablet and biometric digital records interface",
    highlightPill: "Zero Downtime",
    highlightColor: "text-indigo-400 border-indigo-500/40 bg-indigo-500/15 shadow-[0_0_15px_rgba(129,140,248,0.2)]",
  },
];

export default function CaseStudy() {
  const [activeIdx, setActiveIdx] = useState(0);

  const current = caseStudies[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="cases" className="py-section-gap relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-white/80 font-label-md uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 border border-white/10 inline-block">
              Proven Results &amp; Case Studies
            </span>
            <h2 className="text-display-lg-mobile md:text-headline-lg font-bold text-white tracking-tight">
              How We Turn Stalled Projects Into Wins
            </h2>
            <p className="text-text-muted text-body-md max-w-xl">
              Deep-dive into real enterprise transformations — how our engineering squads eliminate bottlenecks and deliver quantifiable ROI.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              className="bg-white text-black font-bold px-7 py-3 rounded-lg font-label-md neon-glow-btn transition-all duration-300 flex items-center gap-2"
              href="#contact"
            >
              Get Similar Results
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {caseStudies.map((item, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-xl font-label-md text-sm font-semibold transition-all duration-300 flex items-center gap-2 border ${
                  isActive
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{item.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Slider Card (Deep-Dive Problem -> Solution -> Impact) */}
        <div className="glass-card rounded-[32px] md:rounded-[40px] border border-white/15 p-6 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Visual & Quick Specs */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-black/40 group">
                <img
                  src={current.imgUrl}
                  alt={current.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Metric Pill */}
                <div className={`absolute top-4 left-4 px-3.5 py-1.5 rounded-full border text-xs font-bold backdrop-blur-md ${current.highlightColor}`}>
                  ★ {current.highlightPill}
                </div>

                {/* Meta details bar */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80 backdrop-blur-md bg-black/60 px-4 py-2.5 rounded-xl border border-white/10">
                  <span className="font-medium">{current.clientType}</span>
                  <span className="text-white/50">•</span>
                  <span className="text-sky-400 font-semibold">{current.deliveryTime}</span>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Deep-Dive Journey (Problem -> Solution -> Impact) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-white/60 font-semibold mb-2 block">
                  {current.category}
                </span>
                <h3 className="text-headline-md md:text-headline-lg font-bold text-white leading-tight">
                  {current.title}
                </h3>
              </div>

              {/* 3-Step Deep-Dive Container */}
              <div className="space-y-4">
                {/* 1. Problem */}
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-base">error_outline</span>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-rose-400 mb-1">The Bottleneck (Problem)</h4>
                    <p className="text-sm text-white/85 leading-relaxed">{current.problem}</p>
                  </div>
                </div>

                {/* 2. Solution */}
                <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-base">construction</span>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-blue-400 mb-1">The Valen Blueprint (Solution)</h4>
                    <p className="text-sm text-white/85 leading-relaxed">{current.solution}</p>
                  </div>
                </div>

                {/* 3. Impact */}
                <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-base">trending_up</span>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-indigo-400 mb-1">The Business Impact</h4>
                    <p className="text-sm text-white/85 leading-relaxed">{current.impact}</p>
                  </div>
                </div>
              </div>

              {/* Live Metric Badges */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {current.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center"
                  >
                    <div className="text-xl md:text-2xl font-extrabold text-white tracking-tight">{m.value}</div>
                    <div className="text-[11px] md:text-xs text-text-muted mt-0.5 leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Slider Controls Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-white tracking-widest">
                    CASE 0{activeIdx + 1} <span className="text-white/40">/ 0{caseStudies.length}</span>
                  </span>
                  <div className="flex gap-1.5">
                    {caseStudies.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setActiveIdx(dotIdx)}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          dotIdx === activeIdx ? "w-6 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Case Study"
                    className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">chevron_left</span>
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Case Study"
                    className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
