import React from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import CaseStudy from "@/components/sections/CaseStudy";
import PartnerMarquee from "@/components/sections/PartnerMarquee";
import WhatWeDo from "@/components/sections/WhatWeDo";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import MobileHome from "@/components/mobile/MobileHome";

export default function HomePage() {
  return (
    <>
      {/* Mobile — homemobile.html */}
      <MobileHome />

      {/* Desktop — homepc.html */}
      <div className="hidden md:block">
        <Header />
        <main className="w-full">
          <Hero />
          <Stats />
          <WhyChooseUs />
          <Services />
          <CaseStudy />
          <PartnerMarquee />
          <WhatWeDo />
          <SolutionsGrid />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
