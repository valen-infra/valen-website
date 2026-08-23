import React from "react";

interface SolutionItem {
  title: string;
  subtitle: string;
  imgUrl: string;
  altText: string;
}

const solutionsData: SolutionItem[] = [
  {
    title: "Next-Gen Web & SaaS",
    subtitle: "Built for speed, security, and high conversions.",
    imgUrl: "/images/Cloud Migration & Cost Optimization Card.png",
    altText:
      "Enterprise cloud infrastructure visualization highlighting high-performance connectivity and software scalability",
  },
  {
    title: "Mobile & Cross-Platform",
    subtitle: "Fluid iOS & Android apps that engage and retain.",
    imgUrl: "/images/E-Commerce Replatforming & Mobile PWA Card.png",
    altText:
      "Mobile interface design mockup emphasizing user-centric software development and mobile technologies",
  },
  {
    title: "AI & Cloud Infrastructure",
    subtitle: "Automated scaling with sub-second latency.",
    imgUrl: "/images/FinTech AI Engine & Workflow Automation Card.png",
    altText:
      "Cloud computing infrastructure overview representing secure data analytics and global network services",
  },
];

export default function SolutionsGrid() {
  return (
    <section className="py-section-gap bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16 space-y-4">
          <span className="text-white/80 font-label-md uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 border border-white/10 inline-block">
            Engineering Pillars
          </span>
          <h2 className="text-headline-lg font-bold text-white">Engineered For Unstoppable Scale</h2>
          <p className="text-body-md text-text-muted max-w-2xl mx-auto">
            From frontend polish to backend fault-tolerance, we build systems that handle growth without breaking.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionsData.map((item) => (
            <div
              key={item.title}
              className="relative group rounded-[32px] overflow-hidden aspect-square border border-white/10 hover:border-white/30 transition-all duration-500 shadow-2xl bg-black/40"
            >
              <img
                alt={item.altText}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={item.imgUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 space-y-1.5">
                <h4 className="text-headline-md font-bold text-white group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-body-md text-text-muted leading-relaxed">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
