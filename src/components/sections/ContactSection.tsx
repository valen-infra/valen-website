"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "Website",
    goal: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send request.");
      }

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        serviceType: "Website",
        goal: "",
      });
    } catch (err: unknown) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-section-gap relative overflow-hidden bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-white/80 font-label-md uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 border border-white/10 inline-block">
                Start Your Transformation
              </span>
              <h2 className="text-headline-lg font-bold text-white leading-tight">
                Ready To Get Unstuck? Let&apos;s Build Your Solution.
              </h2>
              <p className="text-body-lg text-text-muted">
                Book a free 30-minute technical roadmap call with our principal engineers. We&apos;ll diagnose your current blockers and provide an actionable strategy to scale.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white font-bold bg-white/5 flex-shrink-0">
                  01
                </div>
                <div>
                  <h4 className="font-semibold text-white">No-Obligation Tech &amp; UX Audit</h4>
                  <p className="text-body-md text-text-muted">We review your architecture, bottlenecks, and release cadence for free.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white font-bold bg-white/5 flex-shrink-0">
                  02
                </div>
                <div>
                  <h4 className="font-semibold text-white">Clear Sprint Roadmap &amp; Cost Estimate</h4>
                  <p className="text-body-md text-text-muted">Get transparent deliverables, timelines, and measurable milestones upfront.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white font-bold bg-white/5 flex-shrink-0">
                  03
                </div>
                <div>
                  <h4 className="font-semibold text-white">Rapid Deployment Squad Ready</h4>
                  <p className="text-body-md text-text-muted">Senior engineers ready to integrate and start shipping within 5 business days.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 md:p-10 rounded-[32px] border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-2 text-white">Request Free Solution Audit</h3>
            <p className="text-text-muted text-sm mb-6">Tell us where your project is stuck and what you want to achieve.</p>

            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-white/5 border border-emerald-500/30 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Roadmap Request Received!</h4>
                <p className="text-text-muted text-sm leading-relaxed">
                  Thank you for reaching out. Our engineering team has received your details and will call or message you back promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3 text-red-400 text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{errorMessage || "Failed to submit request. Please try again."}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-text-muted font-medium">Your Name</label>
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
                      placeholder="Alex Morgan"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-text-muted font-medium">Phone Number</label>
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-text-muted font-medium">Project Type</label>
                  <select
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-white focus:ring-1 focus:ring-white outline-none transition-all cursor-pointer"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  >
                    <option value="Website">Website</option>
                    <option value="App">App</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-text-muted font-medium">What is your primary goal / timeline?</label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all resize-none"
                    placeholder="Describe what you want to build..."
                    rows={3}
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-white text-black font-bold py-4 rounded-xl neon-glow-btn transition-all duration-300 mt-2 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    "Claim Free 30-Min Roadmap Call"
                  )}
                </button>
                <p className="text-center text-xs text-text-muted mt-2">
                  🔒 100% confidential. No spam, strict NDA guaranteed.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
