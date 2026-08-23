import React from "react";

interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "01",
    icon: "code",
    title: "Full-Stack SaaS & Web Platforms",
    description:
      "Transform ideas or outdated codebases into ultra-fast, modern web applications built on Next.js, TypeScript, and clean APIs that scale effortlessly.",
  },
  {
    id: "02",
    icon: "psychology",
    title: "AI Integration & Intelligent Automation",
    description:
      "Embed cutting-edge AI models, custom LLMs, and automated workflow pipelines that eliminate operational friction and give you an unfair market advantage.",
  },
  {
    id: "03",
    icon: "cloud_sync",
    title: "Cloud Modernization & DevOps",
    description:
      "Solve server crashes, reduce cloud bills by up to 60%, and achieve 99.99% uptime with scalable serverless, microservices, and automated CI/CD.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-section-gap bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-white/80 font-label-md uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 border border-white/10 inline-block">
            Our Solutions
          </span>
          <h2 className="text-headline-lg font-bold text-white">We Are The Solution To Your Tech Bottlenecks</h2>
          <p className="text-body-md text-text-muted">
            Specialized engineering squads dedicated to eliminating roadblocks, modernizing architecture, and driving measurable ROI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="glass-panel p-10 rounded-3xl group transition-all duration-500 hover:-translate-y-2 hover:border-white/30 border border-white/10"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                  <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                </div>
                <span className="text-headline-md font-bold text-white/10 group-hover:text-white/20 transition-colors">
                  {service.id}
                </span>
              </div>
              <h3 className="text-headline-md font-bold mb-4 text-white group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-body-md text-text-muted mb-8 leading-relaxed">{service.description}</p>
              <a className="group/link flex items-center gap-2 text-label-md font-bold text-white" href="#contact">
                Solve This Problem
                <span className="material-symbols-outlined text-[18px] group-hover/link:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
