import type { Metadata } from "next";
import Link from "next/link";
import LegalPageShell, { TocItem } from "@/components/legal/LegalPageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Valen Info",
  description:
    "Learn how Valen Info collects, uses, protects, and manages information when you use our website and services.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Valen Info",
    description:
      "Learn how Valen Info collects, uses, protects, and manages information when you use our website and services.",
    url: "https://valen.info/privacy-policy",
    siteName: "Valen Info",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Valen Info",
    description:
      "Learn how Valen Info collects, uses, protects, and manages information when you use our website and services.",
  },
};

const tocItems: TocItem[] = [
  { id: "information-we-collect", title: "Information We Collect", number: "01." },
  { id: "how-we-use-information", title: "How We Use Information", number: "02." },
  { id: "cookies-and-similar-technologies", title: "Cookies & Technologies", number: "03." },
  { id: "how-we-share-information", title: "How We Share Information", number: "04." },
  { id: "data-security", title: "Data Security", number: "05." },
  { id: "data-retention", title: "Data Retention", number: "06." },
  { id: "user-privacy-rights", title: "User Privacy Rights", number: "07." },
  { id: "third-party-links", title: "Third-Party Links", number: "08." },
  { id: "childrens-privacy", title: "Children's Privacy", number: "09." },
  { id: "international-transfers", title: "International Data Transfers", number: "10." },
  { id: "changes-to-policy", title: "Changes to This Privacy Policy", number: "11." },
  { id: "contact-us", title: "Contact Us", number: "12." },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information when engaging with Valen Info."
      lastUpdated="August 26, 2026"
      badge="Data Privacy & Protection"
      tocItems={tocItems}
    >
      {/* Intro section */}
      <section className="space-y-4 text-on-surface/90 leading-relaxed font-body-md text-sm sm:text-base">
        <p>
          Valen Info (&quot;Valen Info&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects the privacy of visitors, prospective clients, customers, and users of our website (<Link href="/" className="text-white underline underline-offset-4 hover:text-slate-300">https://valen.info</Link>) and high-tech IT services.
        </p>
        <p>
          This Privacy Policy explains how information may be collected, used, stored, and protected when you visit the Valen Info website, submit a project inquiry, request a technical solution audit, or otherwise interact with us.
        </p>
      </section>

      {/* Section 1 */}
      <section id="information-we-collect" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            1. Information We Collect
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            We collect personal information that you provide to us directly, as well as limited technical information generated automatically when you access our website.
          </p>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
            <h3 className="text-base sm:text-lg font-semibold text-white">
              Information Provided Directly by Users
            </h3>
            <p>
              When you submit an inquiry form, schedule a roadmap consultation, or communicate with Valen Info, you may voluntarily provide:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-text-muted">
              <li><strong className="text-white">Full Name</strong> or representative name</li>
              <li><strong className="text-white">Phone Number</strong> for consultation and follow-up communication</li>
              <li><strong className="text-white">Email Address</strong> (when communicating via direct correspondence)</li>
              <li><strong className="text-white">Project Requirements</strong> (such as Web, Mobile App, Cloud, or AI Automation requirements)</li>
              <li><strong className="text-white">Project Goals &amp; Timelines</strong> and any additional technical details voluntarily provided in your inquiry message</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
            <h3 className="text-base sm:text-lg font-semibold text-white">
              Information Collected Automatically
            </h3>
            <p>
              When you browse our website, our hosting web servers automatically record standard, non-invasive access logs for security and performance purposes. This technical data may include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-text-muted">
              <li>Internet Protocol (IP) address</li>
              <li>Browser type and version</li>
              <li>Operating system and device type</li>
              <li>Referring website addresses and URLs visited on our site</li>
              <li>Date and time stamps of site visits</li>
            </ul>
            <p className="text-xs text-text-muted italic pt-1">
              Note: Valen Info does not use invasive third-party cross-site trackers, advertising pixels, or data broker integrations on this website.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="how-we-use-information" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            2. How We Use Information
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            We process the information we collect only for legitimate business and communication purposes, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-text-muted">
            <li><strong className="text-white">Responding to Inquiries:</strong> Reviewing your project requirements and reaching out regarding your consultation request.</li>
            <li><strong className="text-white">Providing Requested Consultations &amp; Audits:</strong> Conducting architecture assessments, technical audits, and delivery roadmap discussions.</li>
            <li><strong className="text-white">Preparing Estimates &amp; Proposals:</strong> Formulating customized project scopes, timelines, technical architecture plans, and service agreements.</li>
            <li><strong className="text-white">Service Delivery &amp; Relationship Management:</strong> Executing software engineering, cloud architecture, and AI automation deliverables.</li>
            <li><strong className="text-white">Website Maintenance &amp; Security:</strong> Monitoring website performance, detecting fraudulent requests, preventing security incidents, and maintaining server integrity.</li>
            <li><strong className="text-white">Legal Compliance:</strong> Complying with applicable statutory requirements, tax regulations, and maintaining standard business records.</li>
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section id="cookies-and-similar-technologies" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            3. Cookies and Similar Technologies
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            Valen Info respects user privacy and employs a clean, minimalist web architecture:
          </p>
          <ul className="list-disc list-inside space-y-2 text-text-muted">
            <li><strong className="text-white">Essential Technical Functions:</strong> Our website uses minimal session storage and essential browser mechanisms necessary to render fonts, process contact submissions, and maintain dark mode UI preferences.</li>
            <li><strong className="text-white">No Advertising Cookies:</strong> We do not deploy third-party advertising cookies, retargeting pixels, or commercial tracking tags.</li>
            <li><strong className="text-white">Browser Controls:</strong> You can configure your browser settings to block or notify you about cookies. Because our site relies only on essential mechanisms, disabling cookies will not impede your ability to browse our solutions.</li>
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section id="how-we-share-information" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            04
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            4. How We Share Information
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p className="font-semibold text-white">
            Valen Info does not sell, rent, or monetize your personal information to third parties.
          </p>
          <p>
            We may disclose collected information only under the following limited circumstances:
          </p>
          <ul className="list-disc list-inside space-y-2 text-text-muted">
            <li><strong className="text-white">Trusted Service Providers:</strong> Vetted infrastructure, secure cloud hosting providers, and transactional email dispatch servers (e.g., SMTP transport) strictly necessary to transmit and process your inquiries.</li>
            <li><strong className="text-white">Engineering Contractors:</strong> Senior engineers and technical specialists working on Valen Info&apos;s behalf who are bound by strict non-disclosure agreements (NDAs) and confidentiality obligations.</li>
            <li><strong className="text-white">Legal &amp; Regulatory Authorities:</strong> When required to comply with a valid court order, subpoena, government regulation, or applicable law.</li>
            <li><strong className="text-white">Business Transfers:</strong> In the event of a merger, corporate restructuring, or acquisition of assets, personal information may be transferred as a business asset under equivalent confidentiality standards.</li>
          </ul>
        </div>
      </section>

      {/* Section 5 */}
      <section id="data-security" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            05
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            5. Data Security
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            We implement reasonable and appropriate technical and organizational security measures designed to safeguard personal data against unauthorized access, loss, misuse, or alteration. These measures include:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-text-muted">
            <li>SSL/TLS encryption for all website traffic and communication endpoints</li>
            <li>Restricted, role-based access controls to email systems and databases</li>
            <li>Regular code audits and dependency vulnerability monitoring</li>
          </ul>
          <p className="text-text-muted">
            However, please note that no internet transmission or electronic data storage mechanism can be guaranteed to be 100% secure. While we take every reasonable precaution, we cannot promise absolute immunity from cyber threats.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section id="data-retention" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            06
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            6. Data Retention
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            We retain personal information only for as long as reasonably necessary to:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-text-muted">
            <li>Fulfill the specific purpose for which it was collected (such as answering your inquiry or delivering agreed consulting services)</li>
            <li>Maintain ongoing client and vendor communication records</li>
            <li>Resolve disputes and enforce contractual commitments</li>
            <li>Satisfy legal, accounting, tax, or regulatory compliance mandates</li>
          </ul>
          <p>
            When personal information is no longer needed, it is securely deleted or anonymized in accordance with standard data disposal procedures.
          </p>
        </div>
      </section>

      {/* Section 7 */}
      <section id="user-privacy-rights" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            07
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            7. User Privacy Rights
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            Depending on your jurisdiction and applicable data protection legislation (such as the GDPR in Europe, the UK Data Protection Act, or relevant regional privacy statutes), you may have specific rights regarding your personal data, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-text-muted">
            <li><strong className="text-white">Right of Access:</strong> The right to request copies of the personal data we hold about you.</li>
            <li><strong className="text-white">Right to Rectification:</strong> The right to request correction of inaccurate or incomplete information.</li>
            <li><strong className="text-white">Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> The right to request deletion of your personal data under certain conditions.</li>
            <li><strong className="text-white">Right to Restrict or Object to Processing:</strong> The right to limit or object to our processing of your information.</li>
            <li><strong className="text-white">Right to Data Portability:</strong> The right to receive your personal data in a structured, machine-readable format where applicable.</li>
            <li><strong className="text-white">Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw your consent at any time.</li>
          </ul>
          <p>
            To exercise any applicable rights, please submit your request to{" "}
            <a href="mailto:Ankitsinghrajput.mail@gmail.com" className="text-white font-semibold underline underline-offset-4 hover:text-slate-300">
              Ankitsinghrajput.mail@gmail.com
            </a>
            . We will respond to verified requests within statutory timeframes.
          </p>
        </div>
      </section>

      {/* Section 8 */}
      <section id="third-party-links" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            08
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            8. Third-Party Links
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            Our website may contain links to external third-party websites, platforms, or resources (such as partner portals, client case study domains, or social profiles). Valen Info has no control over the content, security, or privacy practices of external websites.
          </p>
          <p className="text-text-muted">
            We encourage you to review the privacy policies of any third-party websites you visit before providing them with personal information.
          </p>
        </div>
      </section>

      {/* Section 9 */}
      <section id="childrens-privacy" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            09
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            9. Children&apos;s Privacy
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            The Valen Info website and enterprise software engineering services are intended exclusively for business professionals and individuals who have reached the age of majority in their jurisdiction.
          </p>
          <p className="text-text-muted">
            We do not knowingly solicit or collect personal information from children. If we become aware that personal data of a minor has been collected without verified parental or legal guardian consent, we will promptly delete such information from our records.
          </p>
        </div>
      </section>

      {/* Section 10 */}
      <section id="international-transfers" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            10
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            10. International Data Transfers
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            Valen Info operates with global delivery capabilities, utilizing engineering teams and cloud infrastructure situated across North America and worldwide. Consequently, your personal information may be transferred to, stored, or processed in jurisdictions other than your own.
          </p>
          <p className="text-text-muted">
            When cross-border data transfers occur, we implement reasonable safeguards, including standard contractual clauses and robust encryption standards, to ensure your information receives protection consistent with applicable data privacy laws.
          </p>
        </div>
      </section>

      {/* Section 11 */}
      <section id="changes-to-policy" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            11
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            11. Changes to This Privacy Policy
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            We may update this Privacy Policy periodically to reflect enhancements in our services, technological advancements, or changes in legal regulations.
          </p>
          <p className="text-text-muted">
            Any revisions will be posted directly to this page with an updated &quot;Last Updated&quot; date. We encourage you to review this policy periodically to remain informed about how Valen Info protects your information.
          </p>
        </div>
      </section>

      {/* Section 12 */}
      <section id="contact-us" className="scroll-mt-32 space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shrink-0">
            12
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-headline-md">
            12. Contact Us
          </h2>
        </div>

        <div className="space-y-4 text-on-surface/90 text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
          <p>
            If you have questions, feedback, or requests regarding this Privacy Policy or your personal information, please contact us:
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
