"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const services = [
  {
    icon: "code",
    title: "Full-Stack SaaS & Web",
    description:
      "Transform stalled MVPs and outdated code into fast, scalable Next.js and TypeScript apps.",
  },
  {
    icon: "psychology",
    title: "AI Integration & Automation",
    description:
      "Embed custom LLMs and automated workflows to cut costs and automate operations.",
  },
  {
    icon: "cloud_sync",
    title: "Cloud & DevOps Scale",
    description:
      "Cut cloud bills by up to 60% with resilient serverless and 99.99% guaranteed uptime.",
  },
];

const caseStudies = [
  {
    title: "SaaS Scale: 64% Server Cost Cut",
    category: "Cloud Migration & Cost Optimization",
    metric: "64% Cost Cut",
    description:
      "Migrated monolithic architecture into serverless microservices with 99.99% uptime and sub-45ms latency.",
    img: "/images/Cloud Migration & Cost Optimization Card.png",
  },
  {
    title: "E-Commerce: 3.8x Mobile Conversion",
    category: "Full-Stack Web & Mobile App",
    metric: "3.8x Conversion Jump",
    description:
      "Fixed slow checkout and drop-offs with high-speed frictionless mobile PWA loaded in under 0.8s.",
    img: "/images/E-Commerce Replatforming & Mobile PWA Card.png",
  },
  {
    title: "FinTech: 15,000 Hours Saved Yearly",
    category: "AI Workflow Automation",
    metric: "15,000h Saved / Year",
    description:
      "Automated manual verification pipelines with 99.4% accuracy using custom AI & LLM workflows.",
    img: "/images/FinTech AI Engine & Workflow Automation Card.png",
  },
  {
    title: "Healthcare Portal: Zero Downtime",
    category: "Legacy Modernization",
    metric: "0s Downtime / HIPAA",
    description:
      "Refactored 10-year legacy EHR database into a HIPAA-compliant modern Next.js ecosystem without outages.",
    img: "/images/Healthcare Portal Zero-Downtime Modernization Card.png",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Diagnose & Unblock",
    description: "Deep audit of your codebase, UX friction, and bottlenecks to craft an immediate fix.",
  },
  {
    step: "02",
    title: "Execute With Velocity",
    description: "Senior engineering team refactors and deploys clean code in rapid sprint cycles.",
  },
  {
    step: "03",
    title: "Scale & Automate",
    description: "Deploy automated CI/CD and AI infrastructure built for seamless high-traffic growth.",
  },
];

const solutions = [
  {
    title: "Next-Gen Web & SaaS",
    subtitle: "Built for speed & conversions",
    img: "/images/cloud-solutions.png",
  },
  {
    title: "Mobile & Apps",
    subtitle: "Cross-platform fluid experiences",
    img: "/images/mobile-solutions.png",
  },
  {
    title: "AI & Cloud Scale",
    subtitle: "Automated fault-tolerant infrastructure",
    img: "/images/ai-solutions.png",
  },
];

const navLinks = [
  { href: "#mobile-home", icon: "home", label: "Home" },
  { href: "#mobile-the-problem", icon: "warning", label: "The Roadblocks" },
  { href: "#mobile-services", icon: "code", label: "Our Solutions" },
  { href: "#mobile-cases", icon: "rocket_launch", label: "Case Studies" },
  { href: "#mobile-blueprint", icon: "schema", label: "The Blueprint" },
  { href: "#mobile-contact", icon: "mail", label: "Get Solution Audit" },
];

const bottomNavItems = [
  { id: "mobile-home", label: "Home", icon: "home", href: "#mobile-home" },
  { id: "mobile-services", label: "Services", icon: "terminal", href: "#mobile-services" },
  { id: "mobile-cases", label: "Work", icon: "work_outline", href: "#mobile-cases" },
  { id: "mobile-contact", label: "Contact", icon: "send", href: "#mobile-contact" },
];

export default function MobileHome() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("mobile-home");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "Website",
    goal: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const closeDrawer = () => setDrawerOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      const allSections = [
        "mobile-contact",
        "mobile-blueprint",
        "mobile-cases",
        "mobile-services",
        "mobile-the-problem",
        "mobile-home",
      ];

      for (const sectionId of allSections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      if (window.scrollY < 120) {
        setActiveSection("mobile-home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTarget = (href: string) => {
    setDrawerOpen(false);
    if (href === "#" || href === "#mobile-home" || href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("mobile-home");
      return;
    }

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send request.");
      }

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        serviceType: "Website",
        goal: "",
      });
    } catch (err: unknown) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="md:hidden bg-background text-on-surface font-body-md selection:bg-white/20 selection:text-white">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-margin-mobile py-4">
        <div className="flex items-center gap-3">
          <button
            className="active:scale-95 duration-200 text-white cursor-pointer"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <Logo size="sm" href="#mobile-home" onClick={(e) => { e.preventDefault(); scrollToTarget("#mobile-home"); }} />
        </div>
        <a
          href="#mobile-contact"
          onClick={(e) => { e.preventDefault(); scrollToTarget("#mobile-contact"); }}
          className="bg-white text-black font-bold text-xs px-3 py-1.5 rounded-md active:scale-95 transition-transform cursor-pointer"
        >
          Audit Call
        </a>
      </header>

      {/* Drawer */}
      <div
        className={`h-full w-4/5 fixed left-0 top-0 z-[60] bg-[#0c0c0c] border-r border-white/10 shadow-2xl flex flex-col p-stack-lg gap-stack-md transition-transform duration-300 ease-in-out ${drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center mb-4">
          <Logo size="sm" href="#mobile-home" onClick={(e) => { e.preventDefault(); scrollToTarget("#mobile-home"); }} />
          <button className="text-on-surface-variant hover:text-white cursor-pointer" onClick={closeDrawer} aria-label="Close menu">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const linkId = link.href.replace("#", "");
            const isActive = activeSection === linkId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget(link.href);
                }}
                className={`p-3 rounded-lg flex items-center gap-3 transition-all cursor-pointer font-medium ${isActive
                    ? "bg-white/15 text-white font-bold"
                    : "text-text-muted hover:text-white hover:bg-white/5"
                  }`}
              >
                <span className="material-symbols-outlined text-white">{link.icon}</span> {link.label}
              </a>
            );
          })}
        </nav>
      </div>
      <div
        className={`fixed inset-0 bg-black/70 z-[55] backdrop-blur-sm ${drawerOpen ? "" : "hidden"}`}
        onClick={closeDrawer}
      />

      <main className="pt-20 pb-0 overflow-x-hidden">
        {/* Hero */}
        <section id="mobile-home" className="px-margin-mobile py-10 relative">
          <div className="flex flex-col gap-stack-md text-center">
            <span className="inline-block self-center px-4 py-1 rounded-full bg-white/10 text-white text-label-sm font-label-md uppercase tracking-widest border border-white/20">
              High-Tech Solution Partner
            </span>
            <h1 className="font-display-lg-mobile text-display-lg-mobile text-white leading-tight">
              You Started With A Vision. <br />
              <span className="text-slate-300">We Solve What Holds You Back.</span>
            </h1>
            <p className="text-text-muted font-body-md">
              Don&apos;t let slow development, legacy tech debt, or bad UX stall your growth. We engineer high-performance software and AI cloud architecture to get you scaling fast.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              <a
                href="#mobile-contact"
                onClick={(e) => { e.preventDefault(); scrollToTarget("#mobile-contact"); }}
                className="bg-white text-black font-label-md py-4 px-8 rounded-lg font-bold shadow-lg shadow-white/10 active:scale-95 transition-transform text-center cursor-pointer"
              >
                Claim Free Solution Audit
              </a>
              <a
                href="#mobile-the-problem"
                onClick={(e) => { e.preventDefault(); scrollToTarget("#mobile-the-problem"); }}
                className="border border-white/20 text-white font-label-md py-4 px-8 rounded-lg font-bold hover:bg-white/5 active:scale-95 transition-transform text-center cursor-pointer"
              >
                See How We Solve It
              </a>
            </div>
          </div>
          <div className="mt-stack-lg relative">
            <img
              alt="Valen Info Hero visual"
              className="w-full h-auto rounded-2xl relative z-10 glass-card border border-white/10"
              src="/images/hero-team.png"
            />
          </div>
        </section>

        {/* The Roadblocks vs Desired Solution */}
        <section id="mobile-the-problem" className="px-margin-mobile py-10 bg-surface-container-low">
          <div className="flex flex-col gap-2 mb-8 text-center">
            <span className="text-xs uppercase tracking-widest text-text-muted">The Problem</span>
            <h2 className="font-headline-md text-headline-md text-white">Where You&apos;re Stuck Now</h2>
          </div>
          <div className="flex flex-col gap-4">
            <div className="glass-card p-6 rounded-2xl border border-red-500/20 bg-red-950/10 space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-bold text-sm uppercase">
                <span className="material-symbols-outlined text-lg">error</span> The Roadblocks
              </div>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span> Sluggish sprint delivery &amp; missed deadlines
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span> Clunky UX causing user drop-off &amp; churn
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✕</span> Fragile legacy code &amp; expensive server bills
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/20 bg-white/5 space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-sm uppercase">
                <span className="material-symbols-outlined text-lg">check_circle</span> The Valen Info Solution
              </div>
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-white">✓</span> Rapid sprint velocity with production-ready code
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">✓</span> Frictionless, high-converting modern UI/UX
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white">✓</span> 99.99% uptime with auto-scaling AI &amp; cloud systems
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-margin-mobile py-10 bg-surface-container-lowest">
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "4.2x", label: "Faster Releases" },
              { value: "99.99%", label: "Uptime SLA" },
              { value: "60%", label: "Cloud Cost Cut" },
              { value: "150+", label: "Wins Delivered" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6 rounded-xl flex flex-col items-center text-center border border-white/10">
                <span className="text-white font-headline-md text-headline-md font-bold">{stat.value}</span>
                <span className="text-text-muted text-label-sm font-label-sm uppercase mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="mobile-services" className="px-margin-mobile py-10">
          <div className="flex flex-col gap-2 mb-8 text-center">
            <span className="text-xs uppercase tracking-widest text-text-muted">Our Solutions</span>
            <h2 className="font-headline-md text-headline-md text-white">We Solve The Bottlenecks</h2>
          </div>
          <div className="flex flex-col gap-6">
            {services.map((service) => (
              <div key={service.title} className="glass-card neon-border-top p-stack-lg rounded-2xl flex flex-col gap-4 border border-white/10">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">{service.icon}</span>
                </div>
                <h3 className="font-headline-md text-[20px] text-white">{service.title}</h3>
                <p className="text-text-muted font-body-md">{service.description}</p>
                <a
                  className="text-white font-label-md flex items-center gap-2 group font-bold cursor-pointer"
                  href="#mobile-contact"
                  onClick={(e) => { e.preventDefault(); scrollToTarget("#mobile-contact"); }}
                >
                  Solve This Problem{" "}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section id="mobile-cases" className="px-margin-mobile py-10 bg-surface-container-lowest">
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-white/80 font-label-md uppercase tracking-wider">Proven Results</span>
            <h2 className="font-headline-md text-headline-md text-white">Real Client Success Stories</h2>
          </div>
          <div className="flex flex-col gap-stack-lg">
            {caseStudies.map((item) => (
              <div key={item.title} className="group border border-white/10 rounded-2xl p-5 bg-white/5 space-y-3">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] border border-white/10">
                  <img alt={item.title} className="w-full h-full object-cover" src={item.img} />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-black/70 backdrop-blur-md border border-white/20 text-white">
                    ★ {item.metric}
                  </div>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">{item.category}</span>
                  <h3 className="font-headline-md text-lg text-white font-bold mt-0.5">{item.title}</h3>
                </div>
                <p className="text-text-muted font-body-md text-sm leading-relaxed">{item.description}</p>
                <a
                  href="#mobile-contact"
                  onClick={(e) => { e.preventDefault(); scrollToTarget("#mobile-contact"); }}
                  className="inline-flex items-center gap-1.5 text-white font-label-md text-sm font-bold pt-1 cursor-pointer"
                >
                  Get Similar Results <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 3-Step Process / Blueprint */}
        <section id="mobile-blueprint" className="px-margin-mobile py-10">
          <div className="flex flex-col gap-stack-md">
            <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 glass-card aspect-square">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src="/video/Modern_tech_startup_war_room_a.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-display-lg-mobile text-headline-md mb-4 text-white">
                  The 3-Step <span className="text-slate-300">Transformation</span>
                </h2>
                <p className="text-text-muted mb-8">
                  How we diagnose, refactor, and scale your technology into a high-growth market leader.
                </p>
              </div>
              {processSteps.map((step) => (
                <div key={step.step} className="flex gap-4 glass-card p-4 rounded-xl border border-white/10">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-headline-md text-[18px] mb-1 text-white">{step.title}</h4>
                    <p className="text-text-muted text-body-md text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="mobile-contact" className="px-margin-mobile py-10">
          <div className="glass-card p-stack-lg rounded-3xl neon-shadow border border-white/10">
            <span className="text-xs uppercase tracking-widest text-text-muted">Take Action</span>
            <h2 className="font-headline-md text-headline-md mb-2 text-white">Claim Free Solution Audit</h2>
            <p className="text-text-muted mb-6 text-sm">
              Speak with our senior software architects. We will diagnose your technical roadblocks and provide an actionable scaling roadmap.
            </p>
            {status === "success" ? (
              <div className="p-6 rounded-2xl bg-white/5 border border-emerald-500/30 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Roadmap Request Received!</h4>
                <p className="text-text-muted text-xs leading-relaxed">
                  Thank you! Our engineering team has received your information and will review your project within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="px-4 py-2 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                className="flex flex-col gap-4"
                onSubmit={handleFormSubmit}
              >
                {status === "error" && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-2 text-red-400 text-xs">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{errorMessage || "Failed to submit request. Please try again."}</span>
                  </div>
                )}
                <input
                  className="w-full bg-surface border border-white/10 rounded-lg p-4 text-on-surface focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
                  placeholder="Your Name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  className="w-full bg-surface border border-white/10 rounded-lg p-4 text-on-surface focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
                  placeholder="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <select
                  className="w-full bg-[#111] border border-white/10 rounded-lg p-4 text-on-surface focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                >
                  <option value="Website">Website</option>
                  <option value="App">App</option>
                </select>
                <textarea
                  className="w-full bg-surface border border-white/10 rounded-lg p-4 text-on-surface focus:border-white focus:ring-1 focus:ring-white outline-none transition-all resize-none"
                  placeholder="What is your primary goal / timeline?"
                  rows={3}
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                ></textarea>
                <button
                  className="w-full bg-white text-black font-bold py-4 rounded-lg neon-glow-btn active:scale-95 transition-transform mt-2 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    "Claim Free 30-Min Roadmap Call"
                  )}
                </button>
                <p className="text-center text-xs text-text-muted mt-1">
                  🔒 100% confidential. Strict NDA guaranteed.
                </p>
              </form>
            )}

            <div className="mt-8 flex flex-col gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-label-sm text-text-muted">Client Inquiries</p>
                  <p className="font-headline-md text-[15px] text-white">contact@valen.info</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mb-16 border-t border-white/5 bg-surface-container-lowest flex flex-col items-center text-center pt-8 pb-16 px-margin-mobile gap-stack-md">
        <Logo
          variant="stacked"
          size="md"
          href="#mobile-home"
          onClick={(e) => {
            e.preventDefault();
            scrollToTarget("#mobile-home");
          }}
        />
        <p className="text-text-muted font-body-md max-w-xs">
          © 2026 Valen Info. High-tech enterprise software, AI systems, and digital solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <a className="text-text-muted hover:text-white transition-colors text-label-md" href="#">
            Privacy
          </a>
          <a className="text-text-muted hover:text-white transition-colors text-label-md" href="#">
            Terms
          </a>
          <a className="text-text-muted hover:text-white transition-colors text-label-md" href="#">
            LinkedIn
          </a>
          <a className="text-text-muted hover:text-white transition-colors text-label-md" href="#">
            GitHub
          </a>
        </div>
      </footer>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-black/90 border-t border-white/10 backdrop-blur-xl flex justify-around items-center h-16 px-2 pb-safe shadow-[0_-4px_24px_rgba(0,0,0,0.8)]">
        {bottomNavItems.map((item) => {
          const isActive =
            activeSection === item.id ||
            (item.id === "mobile-cases" && activeSection === "mobile-blueprint") ||
            (item.id === "mobile-services" && activeSection === "mobile-the-problem");
          return (
            <button
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget(item.href);
              }}
              className={`flex flex-col items-center justify-center py-1 px-4 rounded-full transition-all duration-200 cursor-pointer active:scale-90 ${isActive
                  ? "bg-white/15 text-white font-bold"
                  : "text-text-muted hover:text-white"
                }`}
              aria-label={item.label}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="font-label-sm text-[10px] tracking-wide mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
