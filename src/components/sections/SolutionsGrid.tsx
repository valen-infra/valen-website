import React from "react";

interface SolutionItem {
  title: string;
  subtitle: string;
  imgUrl: string;
  altText: string;
}

const solutionsData: SolutionItem[] = [
  {
    title: "Web Solutions",
    subtitle: "Advanced architectural frameworks.",
    imgUrl: "/images/cloud-solutions.png",
    altText:
      "Enterprise cloud infrastructure visualization highlighting high-performance connectivity and software scalability",
  },
  {
    title: "Mobile First",
    subtitle: "Cross-platform digital excellence.",
    imgUrl: "/images/mobile-solutions.png",
    altText:
      "Mobile interface design mockup emphasizing user-centric software development and mobile technologies",
  },
  {
    title: "Cloud Strategy",
    subtitle: "Scalable infrastructure as service.",
    imgUrl: "/images/ai-solutions.png",
    altText:
      "Cloud computing infrastructure overview representing secure data analytics and global network services",
  },
];

export default function SolutionsGrid() {
  return (
    <section className="py-section-gap bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <span className="text-primary font-label-md uppercase tracking-widest">Global Solutions</span>
          <h2 className="text-headline-lg font-bold">Engineered for Performance</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionsData.map((item) => (
            <div key={item.title} className="relative group rounded-3xl overflow-hidden aspect-square border border-white/5">
              <img
                alt={item.altText}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={item.imgUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="text-headline-md font-bold mb-2">{item.title}</h4>
                <p className="text-body-md text-text-muted">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
