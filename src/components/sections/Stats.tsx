import React from "react";

interface StatItem {
  number: string;
  label: string;
  description: string;
}

const statsData: StatItem[] = [
  {
    number: "5",
    label: "Years",
    description: "Working With Passion",
  },
  {
    number: "1.5k",
    label: "Customer",
    description: "Satisfied Customer",
  },
  {
    number: "800",
    label: "Project",
    description: "We Have Completed",
  },
  {
    number: "15",
    label: "Awards",
    description: "Achievement For Service",
  },
];

export default function Stats() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat) => (
            <div
              key={stat.label}
              className="glass-panel p-8 rounded-2xl text-center group transition-all hover:bg-primary/5"
            >
              <h3 className="text-headline-lg text-primary font-bold mb-1">{stat.number}</h3>
              <p className="text-label-md text-text-muted mb-1">{stat.label}</p>
              <p className="text-label-sm text-text-muted/60">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
