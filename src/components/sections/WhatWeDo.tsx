import React from "react";

export default function WhatWeDo() {
  return (
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-primary font-label-md uppercase tracking-widest">What We Do</span>
              <h2 className="text-headline-lg font-bold">Strategic Excellence</h2>
              <p className="text-body-md text-text-muted italic">
                &quot;Unlock the potential of your Creative business.&quot;
              </p>
              <p className="text-body-md text-text-muted">
                Morbi interdum pellentesque nunc, luctus pretium nulla luctus at. Aliquam cursus nunc aliquam. Nam
                semper posuere risus, a gravida sapien tincidunt ac.
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3 text-on-surface font-medium">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  Creative Strategy
                </li>
                <li className="flex items-center gap-3 text-on-surface font-medium">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  Unique Production
                </li>
                <li className="flex items-center gap-3 text-on-surface font-medium">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  Rebranding Design
                </li>
                <li className="flex items-center gap-3 text-on-surface font-medium">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  Corporate Identity
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-2xl">
                <h3 className="text-headline-md font-bold text-primary mb-2">01</h3>
                <h4 className="font-bold text-lg mb-2">Research &amp; Discovery</h4>
                <p className="text-body-md text-text-muted">
                  Web development is the process offer than operdol creating otar eros augue, ultricies sedatoni.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-2xl">
                <h3 className="text-headline-md font-bold text-primary mb-2">02</h3>
                <h4 className="font-bold text-lg mb-2">Industry Expertise</h4>
                <p className="text-body-md text-text-muted">
                  Web development is the process offer than operdol creating otar eros augue, ultricies sedatoni.
                </p>
              </div>
              <div className="glass-panel p-6 rounded-2xl">
                <h3 className="text-headline-md font-bold text-primary mb-2">03</h3>
                <h4 className="font-bold text-lg mb-2">Quality Assurance</h4>
                <p className="text-body-md text-text-muted">
                  Web development is the process offer than operdol creating otar eros augue, ultricies sedatoni.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-[40px] overflow-hidden">
              <img
                alt="Valen Info strategy meeting and quality assurance"
                className="w-full h-auto rounded-[40px]"
                src="/images/what-we-do.png"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-center p-4">
              <p className="text-label-sm font-bold leading-tight">INNOVATIVE SOLUTIONS 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
