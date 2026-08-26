import type { Metadata } from "next";
import Link from "next/link";
import LegalPageShell, { TocItem } from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Terms & Conditions | Valen Info",
  description:
    "Read the terms and conditions governing access to the Valen Info website and use of our technology and digital services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Valen Info",
    description:
      "Read the terms and conditions governing access to the Valen Info website and use of our technology and digital services.",
    url: "https://valen.info/terms-and-conditions",
    siteName: "Valen Info",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Valen Info",
    description:
      "Read the terms and conditions governing access to the Valen Info website and use of our technology and digital services.",
  },
};

const tocItems: TocItem[] = [
  { id: "about-valen-info", title: "About Valen Info", number: "01." },
  { id: "use-of-website", title: "Use of the Website", number: "02." },
  { id: "services-and-engagements", title: "Services & Project Engagements", number: "03." },
  { id: "quotes-and-proposals", title: "Quotes, Estimates & Proposals", number: "04." },
  { id: "intellectual-property", title: "Intellectual Property", number: "05." },
  { id: "client-project-ip", title: "Client Project Intellectual Property", number: "06." },
  { id: "third-party-services", title: "Third-Party Services", number: "07." },
  { id: "website-availability", title: "Website Availability", number: "08." },
  { id: "disclaimer", title: "Disclaimer of Warranties", number: "09." },
  { id: "limitation-of-liability", title: "Limitation of Liability", number: "10." },
  { id: "indemnification", title: "Indemnification", number: "11." },
  { id: "privacy", title: "Privacy", number: "12." },
  { id: "changes-to-terms", title: "Changes to These Terms", number: "13." },
  { id: "governing-law", title: "Governing Law", number: "14." },
  { id: "contact-information", title: "Contact Information", number: "15." },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPageShell
      title="Terms & Conditions"
      subtitle="Terms governing your access to and use of the Valen Info website and digital engineering services."
      lastUpdated="August 26, 2026"
      badge="Terms of Service & Usage"
      tocItems={tocItems}
    >
      {/* Intro section */}
      <section className="space-y-4 text-on-surface/90 leading-relaxed font-body-md text-sm sm:text-base">
        <p>
          Welcome to Valen Info (&quot;Valen Info&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of our website (<Link href="/" className="text-white underline underline-offset-4 hover:text-slate-300">https://valen.info</Link>), technical audits, consultation requests, and related digital materials.
        </p>
        <p>
          By visiting, browsing, or interacting with the Valen Info website, you acknowledge that you have read, understood, and agree to be bound by these Terms, to the extent permitted by applicable law. If you do not agree with these Terms, please discontinue use of the website.
        </p>
      </section>

      {/* Section 1 */}
      <section id="about-valen-info" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            1. About Valen Info
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            Valen Info is a high-tech IT engineering consultancy and digital solutions provider specializing in:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-text-muted">
            <li><strong className="text-white">Full-Stack Web &amp; SaaS Development:</strong> Next-generation scalable web applications and software systems.</li>
            <li><strong className="text-white">Mobile Application Engineering:</strong> Cross-platform iOS, Android, and progressive web apps (PWA).</li>
            <li><strong className="text-white">AI Integration &amp; Workflow Automation:</strong> Custom LLM embeddings, data intelligence pipelines, and operational automation.</li>
            <li><strong className="text-white">Cloud Architecture &amp; DevOps:</strong> Resilient cloud infrastructure, serverless migrations, CI/CD automation, and cost optimization.</li>
            <li><strong className="text-white">Legacy Code Modernization:</strong> Refactoring outdated monolithic applications into modern, high-performance tech stacks.</li>
          </ul>
        </div>
      </section>

      {/* Section 2 */}
      <section id="use-of-website" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            2. Use of the Website
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            You agree to use the website strictly for lawful, legitimate business inquiries. You expressly agree not to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-text-muted">
            <li>Engage in any unlawful, fraudulent, or harmful conduct.</li>
            <li>Attempt to gain unauthorized access to any part of the website, server networks, databases, or systems connected to Valen Info.</li>
            <li>Introduce viruses, trojans, worms, logic bombs, or other malicious or technologically harmful software.</li>
            <li>Use automated scrapers, crawlers, spiders, or harvesting tools to extract data without explicit prior written authorization.</li>
            <li>Impersonate any individual or entity, or provide false or misleading contact or project details.</li>
            <li>Attack the website via denial-of-service (DoS/DDoS) attacks or interfere with the normal operation, speed, and security of the website.</li>
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section id="services-and-engagements" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            3. Services and Project Engagements
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            Information, case studies, architectural blueprints, and service descriptions presented on this website are provided for general informational and marketing purposes.
          </p>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
            <p className="font-semibold text-white">Important Notice on Service Agreements:</p>
            <p className="text-text-muted text-sm leading-relaxed">
              Submitting a contact form, requesting an audit call, or discussing a potential build does NOT constitute a binding client relationship or service contract.
            </p>
          </div>
          <p>
            Formal software engineering and consulting engagements are governed strictly by separate, mutually executed legal agreements, including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-muted">
            <li>Master Services Agreements (MSA)</li>
            <li>Statements of Work (SOW) &amp; Project Specifications</li>
            <li>Non-Disclosure Agreements (NDA)</li>
            <li>Dedicated Service Level Agreements (SLA)</li>
          </ul>
          <p className="text-text-muted">
            Where a separate written agreement signed between you and Valen Info conflicts with these website Terms regarding an active contracted project, the signed client agreement shall prevail.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section id="quotes-and-proposals" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            04
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            4. Quotes, Estimates and Proposals
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            Any preliminary estimates, milestone projections, ballpark figures, or roadmaps discussed during initial audit calls or through email correspondence are indicative only and non-binding.
          </p>
          <p className="text-text-muted">
            Final project scopes, deliverables, timelines, milestone payments, and pricing are finalized only upon the formal execution of a mutually agreed Statement of Work. Project scopes may be adjusted depending on technical discovery, architecture refinement, and agreed requirement changes.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section id="intellectual-property" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            05
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            5. Intellectual Property
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            Unless otherwise indicated, the Valen Info website, source code, visual design, animations, graphics, icons, branding, trade dress, logos, and original written copy are the exclusive intellectual property of Valen Info and are protected by international copyright, trademark, and intellectual property laws.
          </p>
          <p className="text-text-muted">
            You may not copy, reproduce, republish, modify, distribute, reverse-engineer, create derivative works from, or commercially exploit any website materials without explicit prior written permission from Valen Info.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section id="client-project-ip" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            06
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            6. Client Project Intellectual Property
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            Ownership, intellectual property assignment, licensing of custom software codebases, third-party open-source dependencies, and project deliverables developed for clients are established solely by the applicable Master Services Agreement (MSA) and Statement of Work (SOW) executed between Valen Info and the client.
          </p>
          <p className="text-text-muted">
            Nothing in these general website Terms alters or supersedes IP transfer and ownership clauses negotiated under specific client contracts.
          </p>
        </div>
      </section>

      {/* Section 7 */}
      <section id="third-party-services" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            07
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            7. Third-Party Services
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            Our website and client software engineering solutions may incorporate or interface with third-party software libraries, cloud infrastructure providers (such as AWS, Google Cloud, Vercel), APIs, or communication platforms.
          </p>
          <p className="text-text-muted">
            Valen Info does not control third-party infrastructure and cannot guarantee uninterrupted availability of external platforms. Your interactions with third-party platforms are governed by their respective terms and service level policies.
          </p>
        </div>
      </section>

      {/* Section 8 */}
      <section id="website-availability" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            08
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            8. Website Availability
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            We strive to maintain continuous availability and optimal performance of our website. However, the website is provided on an &quot;as is&quot; and &quot;as available&quot; basis.
          </p>
          <p className="text-text-muted">
            We do not warrant that the website will be uninterrupted, error-free, or free of technical bugs. Access may be temporarily restricted or suspended without prior notice due to server maintenance, system updates, emergency repairs, or external network disruptions outside our reasonable control.
          </p>
        </div>
      </section>

      {/* Section 9 */}
      <section id="disclaimer" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            09
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            9. Disclaimer of Warranties
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            To the maximum extent permitted by applicable law, the Valen Info website and all published materials are provided without warranties of any kind, whether express, implied, statutory, or otherwise, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p className="text-text-muted">
            While we take reasonable steps to ensure the accuracy and timeliness of information presented, we make no guarantees that website content is complete, exhaustive, or error-free at all times.
          </p>
        </div>
      </section>

      {/* Section 10 */}
      <section id="limitation-of-liability" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            10
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            10. Limitation of Liability
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            To the maximum extent permitted by applicable law, Valen Info, its founders, directors, employees, affiliates, and contractors shall not be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, data, revenue, goodwill, or business interruption) resulting from:
          </p>
          <ul className="list-disc list-inside space-y-1 text-text-muted">
            <li>Your access to, use of, or inability to access or use the public website</li>
            <li>Any unauthorized access to our servers or transmission endpoints</li>
            <li>Any content or behavior of any third party on or linked through the website</li>
          </ul>
          <p className="text-text-muted">
            Nothing in these Terms limits or excludes liability for gross negligence, willful misconduct, or any other liability that cannot be excluded under applicable consumer protection legislation.
          </p>
        </div>
      </section>

      {/* Section 11 */}
      <section id="indemnification" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            11
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            11. Indemnification
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            You agree to defend, indemnify, and hold harmless Valen Info and its officers, directors, employees, and agents from and against any third-party claims, liabilities, damages, losses, and reasonable legal expenses arising out of or in connection with:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-text-muted">
            <li>Your unlawful misuse of the Valen Info website</li>
            <li>Your violation of any provision of these Terms</li>
            <li>Your infringement of any third-party intellectual property or privacy right</li>
          </ul>
        </div>
      </section>

      {/* Section 12 */}
      <section id="privacy" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            12
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            12. Privacy
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            Your privacy is of utmost importance to Valen Info. Our handling and protection of your personal information are detailed in our dedicated Privacy Policy.
          </p>
          <p>
            Please review our{" "}
            <Link
              href="/privacy-policy"
              className="text-white font-semibold underline underline-offset-4 hover:text-slate-300 inline-flex items-center gap-1"
            >
              Privacy Policy <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </Link>{" "}
            to understand our practices regarding data collection, processing, and storage.
          </p>
        </div>
      </section>

      {/* Section 13 */}
      <section id="changes-to-terms" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            13
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            13. Changes to These Terms
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            Valen Info reserves the right to modify, amend, or update these Terms &amp; Conditions periodically to reflect changes in our service offerings, operational structure, or regulatory standards.
          </p>
          <p className="text-text-muted">
            The latest revision will always be accessible on this page with the &quot;Last Updated&quot; date indicated at the top. Your continued use of the website following the posting of updated Terms constitutes your acknowledgment and agreement to such modifications.
          </p>
        </div>
      </section>

      {/* Section 14 */}
      <section id="governing-law" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            14
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            14. Governing Law
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <p className="font-semibold text-white">
              Governing Law: <span className="text-amber-300 font-mono text-xs sm:text-sm px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">[INSERT VERIFIED COMPANY JURISDICTION]</span>
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              These Terms &amp; Conditions, and any disputes or claims arising out of or in connection with the access or use of this website, shall be governed by and construed in accordance with the laws of <strong>[INSERT VERIFIED COMPANY JURISDICTION]</strong>, without giving effect to any principles of conflicts of law.
            </p>
            <p className="text-xs text-text-muted italic">
              *(Note: Verified company jurisdiction will be finalized in formal commercial contracts prior to deployment).*
            </p>
          </div>
        </div>
      </section>

      {/* Section 15 */}
      <section id="contact-information" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            15
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            15. Contact Information
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            For any legal inquiries, questions concerning these Terms &amp; Conditions, or service engagement inquiries, please contact Valen Info:
          </p>
          <div className="p-6 rounded-2xl bg-surface-container border border-white/10 space-y-2">
            <h3 className="font-bold text-white text-lg">Valen Info</h3>
            <p className="text-text-muted">High-Tech IT Solutions &amp; Digital Engineering</p>
            <p className="text-on-surface">
              <strong>Email:</strong>{" "}
              <a href="mailto:Ankitsinghrajput.mail@gmail.com" className="text-white hover:underline">
                Ankitsinghrajput.mail@gmail.com
              </a>
            </p>
            <p className="text-on-surface">
              <strong>Phone:</strong>{" "}
              <a href="tel:+919354325755" className="text-white hover:underline">
                +91 9354325755
              </a>
            </p>
            <p className="text-on-surface">
              <strong>Website:</strong>{" "}
              <Link href="/" className="text-white hover:underline">
                https://valen.info
              </Link>
            </p>
            <p className="text-on-surface">
              <strong>Operations:</strong> Global Delivery squads across North America &amp; Worldwide
            </p>
          </div>
        </div>
      </section>
    </LegalPageShell>
  );
}
