import React from "react";

export default function ContactSection() {
  return (
    <section className="py-section-gap relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-primary font-label-md uppercase tracking-widest">Contact</span>
              <h2 className="text-headline-lg font-bold">Let&apos;s Build Something Amazing</h2>
              <p className="text-body-lg text-text-muted">
                We&apos;re happy to answer any questions you may have and help your determine which of our services
                best fit your needs.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-label-sm text-text-muted uppercase mb-1">Call Us Now</p>
                  <h4 className="text-headline-md font-bold">+880 123 345 6789</h4>
                </div>
              </div>
              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold">
                    01
                  </div>
                  <p className="text-body-md text-text-muted">
                    Expert strategic planning for your digital roadmap.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold">
                    02
                  </div>
                  <p className="text-body-md text-text-muted">Agile development cycles with rapid prototyping.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold">
                    03
                  </div>
                  <p className="text-body-md text-text-muted">Continuous support and performance monitoring.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-panel p-10 md:p-12 rounded-[40px]">
            <h5 className="text-headline-md font-bold mb-8">Make a Free Consulting</h5>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-label-sm uppercase tracking-wider text-text-muted">First Name</label>
                <input
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="John"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-label-sm uppercase tracking-wider text-text-muted">Last Name</label>
                <input
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="Doe"
                  type="text"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-label-sm uppercase tracking-wider text-text-muted">Company</label>
                <input
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="Acme Inc"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-label-sm uppercase tracking-wider text-text-muted">Email</label>
                <input
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-label-sm uppercase tracking-wider text-text-muted">Phone</label>
                <input
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="+1..."
                  type="tel"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-label-sm uppercase tracking-wider text-text-muted">Message</label>
                <textarea
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                  placeholder="How can we help?"
                  rows={4}
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button
                  type="button"
                  className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl neon-glow-btn transition-all"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
    </section>
  );
}
