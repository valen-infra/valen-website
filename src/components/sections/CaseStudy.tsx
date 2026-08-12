import React from "react";

interface CaseItem {
  title: string;
  category: string;
  description: string;
  imgUrl: string;
  alt: string;
  aspectClass: string;
  offsetClass: string;
}

const caseStudiesData: CaseItem[] = [
  {
    category: "Cloud Hosting",
    title: "Unlocking Scalability, Reliability, and Efficiency.",
    description:
      "Transforming enterprise infrastructure with high-performance automated cloud clusters.",
    imgUrl: "/images/cloud-solutions.png",
    alt: "Cloud Hosting architecture visualization showing enterprise scalability and digital efficiency",
    aspectClass: "aspect-[1.1]",
    offsetClass: "",
  },
  {
    category: "Mobile Development",
    title: "Empowering Businesses through Cutting-Edge Mobile.",
    description:
      "Native and hybrid mobile applications delivering seamless cross-platform customer experiences.",
    imgUrl: "/images/mobile-solutions.png",
    alt: "Mobile app development process illustrating interface design and user experience prototyping",
    aspectClass: "aspect-[0.92]",
    offsetClass: "md:mt-12",
  },
  {
    category: "IT Consulting",
    title: "Empowering Business Performance through Expert AI.",
    description:
      "Data-driven strategic engineering and continuous optimization for high-scale enterprise systems.",
    imgUrl: "/images/ai-solutions.png",
    alt: "IT consulting session featuring expert strategic planning and data-driven performance",
    aspectClass: "aspect-[1.04]",
    offsetClass: "",
  },
  {
    category: "Enterprise Systems",
    title: "Unlocking High Security, Reliability, and Performance.",
    description:
      "Next-generation digital workspace and system integration built for maximum security and uptime.",
    imgUrl: "/images/hero-team.png",
    alt: "Enterprise cloud solutions overview showing high-performance data infrastructure",
    aspectClass: "aspect-[1.04]",
    offsetClass: "md:mt-12",
  },
];

export default function CaseStudy() {
  return (
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="text-primary font-label-md uppercase tracking-widest">Case Study</span>
            <h2 className="text-headline-lg font-bold">Real-World Success Stories</h2>
          </div>
          <a
            className="bg-primary/10 text-primary border border-primary/20 px-8 py-3 rounded-lg font-label-md hover:bg-primary hover:text-on-primary transition-all duration-300"
            href="#"
          >
            View All Case
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudiesData.map((item, idx) => (
            <div key={idx} className={`group relative overflow-hidden rounded-3xl ${item.offsetClass}`}>
              <div className={`${item.aspectClass} relative`}>
                <img
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={item.imgUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 space-y-4">
                <span className="text-primary font-label-sm uppercase tracking-wider">{item.category}</span>
                <h3 className="text-headline-md font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-body-md text-text-muted max-w-md">{item.description}</p>
                <a className="inline-flex items-center gap-2 text-label-md font-bold" href="#">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
