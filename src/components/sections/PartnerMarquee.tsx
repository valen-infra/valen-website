import React from "react";

const logos = ["Logo 01", "Logo 02", "Logo 03", "Logo 04", "Logo 05", "Logo 06"];

export default function PartnerMarquee() {
  return (
    <section className="py-20 bg-surface-container-low border-y border-white/5 overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col items-center gap-12">
        <h5 className="text-label-md text-text-muted uppercase tracking-[4px]">
          We Worked With Global Largest Brands
        </h5>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo) => (
            <div key={logo} className="text-2xl font-bold flex items-center gap-2">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
