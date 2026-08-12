import React from "react";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest pt-section-gap border-t border-white/5">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20">
        <div className="space-y-8">
          <Logo size="lg" href="#" />
          <p className="text-body-md text-text-muted">
            Your premier partner for cutting-edge IT solutions. We transform complex problems into elegant digital
            realities.
          </p>
          <div className="space-y-4">
            <p className="text-label-sm text-text-muted uppercase">Call Any Time</p>
            <h4 className="text-headline-md font-bold text-primary">+1 (800) 555-VALEN</h4>
          </div>
        </div>
        <div className="space-y-8">
          <h4 className="text-label-md font-bold uppercase tracking-widest text-on-surface">Our Solutions</h4>
          <ul className="space-y-4">
            <li>
              <a className="text-text-muted hover:text-primary transition-colors" href="#">
                Web Development
              </a>
            </li>
            <li>
              <a className="text-text-muted hover:text-primary transition-colors" href="#">
                Mobile Development
              </a>
            </li>
            <li>
              <a className="text-text-muted hover:text-primary transition-colors" href="#">
                Cloud Services
              </a>
            </li>
            <li>
              <a className="text-text-muted hover:text-primary transition-colors" href="#">
                Network Connectivity
              </a>
            </li>
            <li>
              <a className="text-text-muted hover:text-primary transition-colors" href="#">
                Data analytics
              </a>
            </li>
            <li>
              <a className="text-text-muted hover:text-primary transition-colors" href="#">
                Software Development
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-8">
          <h4 className="text-label-md font-bold uppercase tracking-widest text-on-surface">Company</h4>
          <ul className="space-y-4">
            <li>
              <a className="text-text-muted hover:text-primary transition-colors" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="text-text-muted hover:text-primary transition-colors" href="#">
                Case Study
              </a>
            </li>
            <li>
              <a className="text-text-muted hover:text-primary transition-colors" href="#">
                News &amp; Article
              </a>
            </li>
            <li>
              <a className="text-text-muted hover:text-primary transition-colors" href="#">
                Our Team
              </a>
            </li>
            <li>
              <a className="text-text-muted hover:text-primary transition-colors" href="#">
                All Portfolio
              </a>
            </li>
            <li>
              <a className="text-text-muted hover:text-primary transition-colors" href="#">
                Pricing Plan
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-8">
          <h4 className="text-label-md font-bold uppercase tracking-widest text-on-surface">Say Hello</h4>
          <div className="space-y-6">
            <div>
              <p className="text-label-sm text-text-muted mb-1">Office Location</p>
              <p className="text-body-md text-on-surface">
                100 Innovation Way, Suite 400, Tech Park, CA 94025
              </p>
            </div>
            <div>
              <p className="text-label-sm text-text-muted mb-1">Email Support</p>
              <p className="text-body-md text-on-surface">info@valen.info</p>
            </div>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">share</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">favorite</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-8">
        <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-label-sm text-text-muted">© Copyright 2026 Valen Info | All Rights Reserved</p>
          <div className="flex gap-8 text-label-sm">
            <a className="text-text-muted hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-text-muted hover:text-primary transition-colors" href="#">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
