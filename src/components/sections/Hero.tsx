import React from "react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-52 md:pb-32 overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Innovative Digital Agency
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg leading-tight">
            Set Your <span className="text-primary">Business</span> <br /> New Ideas.
          </h1>
          <p className="text-body-lg text-text-muted leading-relaxed">
            Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. oltorrent gongi Duis a
            orci nunc. Suspendisse ac convallis sapien, quis commodo libero. Donec nec duomoi luctus.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <a
              className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-center neon-glow-btn transition-all"
              href="#"
            >
              Free Consultancy
            </a>
            <a
              className="group flex items-center justify-center gap-2 text-on-surface font-label-md border border-white/10 px-8 py-4 rounded-lg hover:bg-white/5 transition-all"
              href="#"
            >
              VIEW ALL WORK
              <span className="material-symbols-outlined group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                north_east
              </span>
            </a>
          </div>
          <div className="pt-8 flex items-center gap-6">
            <p className="text-label-sm text-text-muted uppercase tracking-wider">Review On</p>
            <div className="flex items-center gap-2">
              <div className="flex text-primary">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              </div>
              <span className="font-label-md text-on-surface">5.0/5.0</span>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden rounded-[40px] md:rounded-[80px] border border-white/10">
            <img
              alt="Valen Info Team working on innovative digital business solutions"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="/images/hero-team.png"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay"></div>
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-3xl overflow-hidden border-4 border-background hidden md:block">
            <img
              alt="Collaborative strategy workshop"
              className="w-full h-full object-cover"
              src="/images/hero-workshop.png"
            />
          </div>
          <div className="absolute top-10 -right-10 w-56 h-56 rounded-full overflow-hidden border-4 border-background hidden lg:block">
            <img
              alt="High-end technical developer workspace"
              className="w-full h-full object-cover"
              src="/images/hero-workspace.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
