import React from "react";

export default function WhatWeDo() {
  return (
    <section id="blueprint" className="py-section-gap">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-white/80 font-label-md uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 border border-white/10 inline-block">
                The Solution Blueprint
              </span>
              <h2 className="text-headline-lg font-bold text-white">How We Engineer Your Growth</h2>
              <p className="text-body-md text-white/90 italic font-medium">
                &quot;From technical debt to high-speed scalability in 3 clear steps.&quot;
              </p>
              <p className="text-body-md text-text-muted">
                We don&apos;t just write code — we align your technology directly with your business goals, removing bottlenecks and building high-converting digital products.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 text-on-surface font-medium">
                  <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  Codebase &amp; Architecture Audit
                </li>
                <li className="flex items-center gap-3 text-on-surface font-medium">
                  <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  High-Velocity Sprint Delivery
                </li>
                <li className="flex items-center gap-3 text-on-surface font-medium">
                  <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  Conversion-Focused UI/UX
                </li>
                <li className="flex items-center gap-3 text-on-surface font-medium">
                  <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  Auto-Scaling Cloud &amp; AI
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                <h3 className="text-headline-md font-bold text-white mb-2">01</h3>
                <h4 className="font-bold text-lg mb-2 text-white">Diagnose &amp; Unblock</h4>
                <p className="text-body-md text-text-muted">
                  We audit your tech stack, pinpointing bottlenecks, security gaps, and UX drop-offs to craft a rapid remediation plan.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                <h3 className="text-headline-md font-bold text-white mb-2">02</h3>
                <h4 className="font-bold text-lg mb-2 text-white">Execute With Velocity</h4>
                <p className="text-body-md text-text-muted">
                  Our senior engineering squads refactor, build, and deploy modern features with clean code and daily transparency.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                <h3 className="text-headline-md font-bold text-white mb-2">03</h3>
                <h4 className="font-bold text-lg mb-2 text-white">Scale &amp; Automate</h4>
                <p className="text-body-md text-text-muted">
                  We roll out resilient cloud systems, AI automations, and CI/CD pipelines so your product scales reliably as traffic surges.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-black/40 relative aspect-square">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover rounded-[40px]"
              >
                <source src="/video/Modern_tech_startup_war_room_a.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute -top-6 -right-6 w-36 h-36 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-center p-4 shadow-2xl">
              <p className="text-label-sm font-bold leading-tight text-white">VALEN INFO EXCELLENCE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
