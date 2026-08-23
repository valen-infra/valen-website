import React from "react";

export default function WhyChooseUs() {
  return (
    <section id="the-problem" className="py-section-gap relative">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-white/80 font-label-md uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 border border-white/10 inline-block">
            The Growth Roadblock
          </span>
          <h2 className="text-headline-lg font-bold text-white leading-tight">
            Where Most Businesses Get Stuck — And How We Break Through
          </h2>
          <p className="text-body-lg text-text-muted">
            You started with vision and momentum. But as you scale, unexpected technical debt, slow development, and outdated systems hold your business back from its true revenue potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Where You Are Stuck Now */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-red-500/20 bg-red-950/10 space-y-6 relative overflow-hidden">
            <div className="flex items-center gap-3 text-red-400 font-bold uppercase tracking-wider font-label-md">
              <span className="material-symbols-outlined text-2xl text-red-400">error</span>
              Where You Might Be Stuck Today
            </div>
            <h3 className="text-2xl font-bold text-white">The Cost of Stalled Technology</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-red-400 text-xl mt-0.5">close</span>
                <div>
                  <h4 className="font-semibold text-white">Sluggish Development Cycles</h4>
                  <p className="text-body-md text-text-muted">Features take months to release instead of days, letting competitors take market share.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-red-400 text-xl mt-0.5">close</span>
                <div>
                  <h4 className="font-semibold text-white">Clunky UX &amp; High Customer Churn</h4>
                  <p className="text-body-md text-text-muted">Dated interfaces confuse users and cause valuable prospects to abandon your product.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-red-400 text-xl mt-0.5">close</span>
                <div>
                  <h4 className="font-semibold text-white">Fragile Code &amp; Expensive Infrastructure</h4>
                  <p className="text-body-md text-text-muted">Constant bug-fixing and runaway server bills drain resources without producing growth.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-red-400 text-xl mt-0.5">close</span>
                <div>
                  <h4 className="font-semibold text-white">Missing AI &amp; Automation Edge</h4>
                  <p className="text-body-md text-text-muted">Repetitive manual tasks slow down your internal team while others automate and scale.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* What You Actually Want & What We Deliver */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/20 bg-white/5 space-y-6 relative overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-3 text-white font-bold uppercase tracking-wider font-label-md">
              <span className="material-symbols-outlined text-2xl text-white">check_circle</span>
              What You Want &amp; What We Deliver
            </div>
            <h3 className="text-2xl font-bold text-white">The Valen Info Solution Reality</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-white text-xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <div>
                  <h4 className="font-semibold text-white">Rapid Ship Velocity &amp; Clean Architecture</h4>
                  <p className="text-body-md text-text-muted">Production-ready, battle-tested code deployed on predictable, rapid sprint cycles.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-white text-xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <div>
                  <h4 className="font-semibold text-white">High-Converting, Modern UI/UX Design</h4>
                  <p className="text-body-md text-text-muted">Frictionless, responsive digital experiences that turn visitors into loyal customers.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-white text-xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <div>
                  <h4 className="font-semibold text-white">Scalable Cloud &amp; 99.99% Reliability</h4>
                  <p className="text-body-md text-text-muted">Auto-scaling serverless and containerized systems optimized for speed and cost efficiency.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-white text-xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <div>
                  <h4 className="font-semibold text-white">AI Automation &amp; Intelligent Workflows</h4>
                  <p className="text-body-md text-text-muted">Embedded GenAI and automated pipelines to give your business a decisive market advantage.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-lg neon-glow-btn transition-all duration-300"
          >
            Claim Your Free Solution Audit &amp; Roadmap
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
