import React from "react";

const techPartners = [
  { name: "Next.js", icon: "terminal" },
  { name: "AWS Cloud", icon: "cloud" },
  { name: "Google Cloud", icon: "cloud_sync" },
  { name: "TypeScript", icon: "code" },
  { name: "OpenAI", icon: "psychology" },
  { name: "Kubernetes", icon: "view_in_ar" },
  { name: "Docker", icon: "dataset" },
  { name: "PostgreSQL", icon: "database" },
];

export default function PartnerMarquee() {
  return (
    <section className="py-16 bg-surface-container-lowest border-y border-white/5 overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col items-center gap-8">
        <h5 className="text-label-sm text-text-muted uppercase tracking-[3px] text-center font-semibold">
          Engineered With Modern Enterprise Ecosystems
        </h5>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {techPartners.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 font-semibold text-lg"
            >
              <span className="material-symbols-outlined text-xl text-white/70">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
