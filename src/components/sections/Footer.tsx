import React from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest pt-section-gap border-t border-white/5">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12">
        <div className="space-y-8 lg:col-span-4 lg:pr-10">
          <Logo variant="stacked" size="lg" href="/" />
          <p className="text-body-md text-text-muted leading-relaxed">
            High-tech software engineering, AI workflow automation, and enterprise cloud architecture. We turn stalled projects into high-growth market leaders.
          </p>
          <div className="space-y-2">
            <p className="text-label-sm text-text-muted uppercase">Ready To Scale?</p>
            <a href="mailto:Ankitsinghrajput.mail@gmail.com" className="text-headline-md font-bold text-white hover:text-slate-300 transition-colors inline-block break-all">
              Ankitsinghrajput.mail@gmail.com
            </a>
          </div>
        </div>
        <div className="space-y-8 lg:col-span-3 lg:pl-6">
          <h4 className="text-label-md font-bold uppercase tracking-widest text-on-surface">Our Solutions</h4>
          <ul className="space-y-4">
            <li>
              <Link className="text-text-muted hover:text-white transition-colors" href="/#services">
                Full-Stack SaaS &amp; Web
              </Link>
            </li>
            <li>
              <Link className="text-text-muted hover:text-white transition-colors" href="/#services">
                AI Integration &amp; Automation
              </Link>
            </li>
            <li>
              <Link className="text-text-muted hover:text-white transition-colors" href="/#services">
                Cloud Architecture &amp; DevOps
              </Link>
            </li>
            <li>
              <Link className="text-text-muted hover:text-white transition-colors" href="/#services">
                Legacy Code Modernization
              </Link>
            </li>
            <li>
              <Link className="text-text-muted hover:text-white transition-colors" href="/#services">
                Conversion-Focused UI/UX
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-8 lg:col-span-2 lg:pl-2">
          <h4 className="text-label-md font-bold uppercase tracking-widest text-on-surface">Navigation</h4>
          <ul className="space-y-4">
            <li>
              <Link className="text-text-muted hover:text-white transition-colors" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-text-muted hover:text-white transition-colors" href="/#the-problem">
                The Roadblocks
              </Link>
            </li>
            <li>
              <Link className="text-text-muted hover:text-white transition-colors" href="/#services">
                Our Solutions
              </Link>
            </li>
            <li>
              <Link className="text-text-muted hover:text-white transition-colors" href="/#cases">
                Case Studies
              </Link>
            </li>
            <li>
              <Link className="text-text-muted hover:text-white transition-colors" href="/#blueprint">
                The Blueprint
              </Link>
            </li>
            <li>
              <Link className="text-text-muted hover:text-white transition-colors" href="/#contact">
                Free Solution Audit
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-8 lg:col-span-3 lg:pl-4">
          <h4 className="text-label-md font-bold uppercase tracking-widest text-on-surface">Headquarters</h4>
          <div className="space-y-6">
            <div>
              <p className="text-label-sm text-text-muted mb-1">Global Delivery</p>
              <p className="text-body-md text-on-surface">
                Engineering Squads Across North America &amp; Worldwide
              </p>
            </div>
            <div>
              <p className="text-label-sm text-text-muted mb-1">Direct Inquiries</p>
              <p className="text-body-md text-on-surface">
                <a href="mailto:Ankitsinghrajput.mail@gmail.com" className="hover:text-white transition-colors break-all">
                  Ankitsinghrajput.mail@gmail.com
                </a>
              </p>
              <p className="text-body-md text-on-surface mt-1">
                <a href="tel:+919354325755" className="hover:text-white transition-colors">
                  +91 9354325755
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-8">
        <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-label-sm text-text-muted">© Copyright 2026 Valen Info | All Rights Reserved</p>
          <div className="flex gap-8 text-label-sm">
            <Link className="text-text-muted hover:text-white transition-colors" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="text-text-muted hover:text-white transition-colors" href="/terms-and-conditions">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
