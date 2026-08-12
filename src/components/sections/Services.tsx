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
    title: "Web Development",
    description:
      "Web development is the process of creating websites and web applications for the internet or intranet.",
  },
  {
    id: "02",
    icon: "developer_mode",
    title: "Software Development",
    description:
      "Software development is the process of creating computer software programs that perform specific functions.",
  },
  {
    id: "03",
    icon: "cloud",
    title: "Cloud Solutions",
    description:
      "Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet.",
  },
];

export default function Services() {
  return (
    <section className="py-section-gap bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-label-md uppercase tracking-widest">Services</span>
          <h2 className="text-headline-lg font-bold">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="glass-panel p-10 rounded-3xl group transition-all duration-500 hover:-translate-y-2 hover:bg-primary/5"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                </div>
                <span className="text-headline-md font-bold text-white/5 group-hover:text-primary/10 transition-colors">
                  {service.id}
                </span>
              </div>
              <h3 className="text-headline-md font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-body-md text-text-muted mb-8 leading-relaxed">{service.description}</p>
              <a className="group/link flex items-center gap-2 text-label-md font-bold" href="#">
                Learn More
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
