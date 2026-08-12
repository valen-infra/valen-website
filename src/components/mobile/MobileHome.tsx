"use client";

import { useState } from "react";
import Logo from "@/components/ui/Logo";

const services = [
  {
    icon: "developer_mode",
    title: "Web Development",
    description:
      "Building robust, scalable, and high-performance web applications using cutting-edge frameworks.",
  },
  {
    icon: "settings_input_component",
    title: "Software Systems",
    description:
      "Custom enterprise software designed to streamline operations and drive business efficiency.",
  },
  {
    icon: "cloud",
    title: "Cloud Solutions",
    description:
      "Seamless cloud migration, management, and optimization for maximum security and scalability.",
  },
];

const caseStudies = [
  {
    title: "FinTech Evolution",
    description:
      "Re-architecting a legacy banking system for 10x scalability and enhanced security.",
    img: "/images/cloud-solutions.png",
  },
  {
    title: "Global Logistics AI",
    description:
      "Implementing AI-driven route optimization reducing fuel costs by 30% for global shipping leader.",
    img: "/images/mobile-solutions.png",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Research & Discovery",
    description: "In-depth analysis of your business landscape to identify unique opportunities.",
  },
  {
    step: "2",
    title: "Industry Expertise",
    description: "Leveraging decades of cross-vertical experience to solve complex challenges.",
  },
  {
    step: "3",
    title: "Quality Assurance",
    description: "Rigorous testing protocols ensuring flawless performance at scale.",
  },
];

const solutions = [
  {
    title: "Web Solutions",
    subtitle: "Enterprise Web Infrastructure",
    img: "/images/cloud-solutions.png",
  },
  {
    title: "Mobile First",
    subtitle: "Native & Hybrid Experiences",
    img: "/images/mobile-solutions.png",
  },
  {
    title: "Cloud Strategy",
    subtitle: "Infrastructure Modernization",
    img: "/images/ai-solutions.png",
  },
];

const navLinks = [
  { href: "#solutions", icon: "settings_input_component", label: "Solutions" },
  { href: "#case-studies", icon: "rocket_launch", label: "Case Studies" },
  { href: "#services", icon: "developer_mode", label: "Services" },
  { href: "#about", icon: "info", label: "About" },
  { href: "#contact", icon: "mail", label: "Contact" },
];

export default function MobileHome() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="md:hidden bg-background text-on-surface font-body-md selection:bg-primary selection:text-on-primary">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface-glass backdrop-blur-xl border-b border-white/5 shadow-[0_0_20px_rgba(0,208,148,0.15)] flex justify-between items-center px-margin-mobile py-4">
        <div className="flex items-center gap-2">
          <button
            className="active:scale-95 duration-200 text-primary"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <Logo size="sm" href="#" />
        </div>
        <button className="active:scale-95 duration-200 text-primary" aria-label="Account">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </header>

      {/* Drawer */}
      <div
        className={`h-full w-4/5 fixed left-0 top-0 z-[60] bg-surface-container-high border-r border-white/5 shadow-2xl flex flex-col p-stack-lg gap-stack-md transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <Logo size="sm" href="#" />
          <button className="text-on-surface-variant" onClick={closeDrawer} aria-label="Close menu">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeDrawer}
              className={
                idx === 0
                  ? "bg-primary/10 text-primary font-bold rounded-lg p-3 flex items-center gap-3"
                  : "text-on-surface-variant hover:bg-surface-variant p-3 rounded-lg flex items-center gap-3 transition-all"
              }
            >
              <span className="material-symbols-outlined">{link.icon}</span> {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div
        className={`fixed inset-0 bg-black/60 z-[55] backdrop-blur-sm ${drawerOpen ? "" : "hidden"}`}
        onClick={closeDrawer}
      />

      <main className="pt-20 pb-20 overflow-x-hidden">
        {/* Hero */}
        <section className="px-margin-mobile py-stack-lg relative">
          <div className="flex flex-col gap-stack-md text-center">
            <span className="inline-block self-center px-4 py-1 rounded-full bg-primary/15 text-primary text-label-md font-label-md uppercase tracking-widest border border-primary/20">
              Next-Gen Solutions
            </span>
            <h1 className="font-display-lg-mobile text-display-lg-mobile text-on-surface leading-tight">
              Set Your Business <span className="text-primary">New Ideas</span>
            </h1>
            <p className="text-text-muted font-body-md text-body-md">
              Empowering enterprise innovation with bespoke software, cloud architecture, and strategic digital
              transformation.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              <button className="bg-primary text-on-primary font-label-md text-label-md py-4 px-8 rounded-lg font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                Start Your Project
              </button>
              <button className="border border-primary text-primary font-label-md text-label-md py-4 px-8 rounded-lg font-bold hover:bg-primary/5 active:scale-95 transition-transform">
                View Our Portfolio
              </button>
            </div>
          </div>
          <div className="mt-stack-lg relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full"></div>
            <img
              alt="Valen Info Hero visual"
              className="w-full h-auto rounded-xl relative z-10 glass-card"
              src="/images/hero-team.png"
            />
          </div>
        </section>

        {/* Stats */}
        <section className="px-margin-mobile py-stack-lg bg-surface-container-low">
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "5+", label: "Years Excellence" },
              { value: "1.5k", label: "Global Clients" },
              { value: "350+", label: "Success Stories" },
              { value: "98%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6 rounded-xl flex flex-col items-center text-center">
                <span className="text-primary font-headline-md text-headline-md">{stat.value}</span>
                <span className="text-text-muted text-label-sm font-label-sm uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-margin-mobile py-20">
          <div className="flex flex-col gap-2 mb-10 text-center">
            <h2 className="font-headline-md text-headline-md text-primary">Core Expertise</h2>
            <p className="text-text-muted">Tailored solutions for the modern digital era.</p>
          </div>
          <div className="flex flex-col gap-6">
            {services.map((service) => (
              <div key={service.title} className="glass-card neon-border-top p-stack-lg rounded-xl flex flex-col gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">{service.icon}</span>
                </div>
                <h3 className="font-headline-md text-[20px]">{service.title}</h3>
                <p className="text-text-muted font-body-md">{service.description}</p>
                <a className="text-primary font-label-md flex items-center gap-2 group" href="#">
                  Learn More{" "}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="px-margin-mobile py-20 bg-surface-container-lowest">
          <div className="flex flex-col gap-2 mb-10">
            <span className="text-primary font-label-md uppercase tracking-wider">Success Stories</span>
            <h2 className="font-headline-md text-headline-md text-on-surface">Delivering Excellence</h2>
          </div>
          <div className="flex flex-col gap-stack-lg">
            {caseStudies.map((item) => (
              <div key={item.title} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                  <img alt={item.title} className="w-full h-full object-cover" src={item.img} />
                </div>
                <h3 className="font-headline-md text-[22px] mb-2">{item.title}</h3>
                <p className="text-text-muted font-body-md mb-4">{item.description}</p>
                <button className="text-primary font-label-md underline underline-offset-4">Read Case Study</button>
              </div>
            ))}
          </div>
        </section>

        {/* What We Do */}
        <section id="about" className="px-margin-mobile py-20">
          <div className="flex flex-col gap-stack-md">
            <div className="mb-10">
              <img
                alt="Strategic Process"
                className="w-full h-auto rounded-2xl glass-card"
                src="/images/what-we-do.png"
              />
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-display-lg-mobile text-headline-md mb-4">
                  Strategic <span className="text-primary">Excellence</span>
                </h2>
                <p className="text-text-muted mb-8">
                  Our approach combines technical rigor with business acumen to deliver transformative results.
                </p>
              </div>
              {processSteps.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-headline-md text-[18px] mb-1">{step.title}</h4>
                    <p className="text-text-muted text-body-md">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="px-margin-mobile py-20 bg-surface-container">
          <h2 className="font-headline-md text-headline-md text-center mb-10">Scalable Solutions</h2>
          <div className="grid grid-cols-1 gap-4">
            {solutions.map((item) => (
              <div key={item.title} className="relative h-64 rounded-2xl overflow-hidden glass-card group">
                <img
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                  src={item.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h4 className="font-headline-md text-[20px] text-primary">{item.title}</h4>
                  <p className="text-on-surface-variant text-label-sm">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-margin-mobile py-20">
          <div className="glass-card p-stack-lg rounded-3xl neon-shadow">
            <h2 className="font-headline-md text-headline-md mb-4">Free Consulting</h2>
            <p className="text-text-muted mb-8">
              Discuss your vision with our senior architects and get a strategic roadmap.
            </p>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                className="w-full bg-surface border border-white/10 rounded-lg p-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Full Name"
                type="text"
              />
              <input
                className="w-full bg-surface border border-white/10 rounded-lg p-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Work Email"
                type="email"
              />
              <select className="w-full bg-surface border border-white/10 rounded-lg p-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                <option>Web Development</option>
                <option>Cloud Architecture</option>
                <option>AI Solutions</option>
              </select>
              <textarea
                className="w-full bg-surface border border-white/10 rounded-lg p-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Tell us about your project..."
                rows={4}
              ></textarea>
              <button
                className="w-full bg-primary text-on-primary font-bold py-4 rounded-lg shadow-xl shadow-primary/20 active:scale-95 transition-transform mt-4"
                type="submit"
              >
                Request Strategy Session
              </button>
            </form>
            <div className="mt-12 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-label-sm text-text-muted">Call Us</p>
                  <p className="font-headline-md text-[16px]">+1 (234) 567-8900</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-label-sm text-text-muted">Email Us</p>
                  <p className="font-headline-md text-[16px]">hello@technova.io</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mb-16 border-t border-white/5 bg-surface-container-lowest flex flex-col items-center text-center p-stack-lg gap-stack-md">
        <Logo size="md" href="#" />
        <p className="text-text-muted font-body-md max-w-xs">
          © 2026 Valen Info. Built for the future of high-tech enterprise software &amp; digital solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <a className="text-text-muted hover:text-primary transition-colors text-label-md" href="#">
            Privacy
          </a>
          <a className="text-text-muted hover:text-primary transition-colors text-label-md" href="#">
            Terms
          </a>
          <a className="text-text-muted hover:text-primary transition-colors text-label-md" href="#">
            LinkedIn
          </a>
          <a className="text-text-muted hover:text-primary transition-colors text-label-md" href="#">
            GitHub
          </a>
        </div>
      </footer>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full z-50 bg-surface-container border-t border-white/5 backdrop-blur-md flex justify-around items-center h-16 px-4 pb-safe shadow-[0_-4px_20px_rgba(0,208,148,0.15)]">
        <a
          className="flex flex-col items-center justify-center bg-primary/20 text-primary rounded-full px-4 py-1 active:scale-90 transition-transform duration-150"
          href="#"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-sm text-[10px]">Home</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-secondary-container hover:text-primary-fixed active:scale-90 transition-transform duration-150"
          href="#case-studies"
        >
          <span className="material-symbols-outlined">work_outline</span>
          <span className="font-label-sm text-[10px]">Work</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-secondary-container hover:text-primary-fixed active:scale-90 transition-transform duration-150"
          href="#services"
        >
          <span className="material-symbols-outlined">terminal</span>
          <span className="font-label-sm text-[10px]">Services</span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-secondary-container hover:text-primary-fixed active:scale-90 transition-transform duration-150"
          href="#contact"
        >
          <span className="material-symbols-outlined">send</span>
          <span className="font-label-sm text-[10px]">Contact</span>
        </a>
      </nav>
    </div>
  );
}
