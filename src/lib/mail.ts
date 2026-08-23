import nodemailer from "nodemailer";

export interface ContactFormData {
  name: string;
  phone: string;
  serviceType?: string;
  goal?: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const host = process.env.SMTP_HOST || "mail.dealrushs.com";
  const port = parseInt(process.env.SMTP_PORT || "25", 10);
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const ignoreTLS = process.env.SMTP_IGNORE_TLS === "true";
  const requireTLS = process.env.SMTP_REQUIRE_TLS === "true";

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user && pass ? { user, pass } : undefined,
    ignoreTLS,
    requireTLS,
    tls: {
      rejectUnauthorized: false,
    },
  });

  const from = process.env.FROM_EMAIL || '"DealRush" <no-reply@dealrushs.com>';
  const to = process.env.TO_EMAIL || "ankitsingh44844844@gmail.com";
  const cc = process.env.CC_EMAIL || "ankitsinghrajput.mail@gmail.com";

  const subject = `🚀 New Project Inquiry (${data.serviceType || "Website/App"}) from ${data.name || "Client"}`;

  const htmlContent = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0b0c10; color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #1f2833;">
      <div style="background: linear-gradient(135deg, #1f2833 0%, #0b0c10 100%); padding: 24px; border-bottom: 2px solid #66fcf1;">
        <h2 style="margin: 0; color: #66fcf1; font-size: 22px; font-weight: 700; letter-spacing: 0.5px;">New Project Inquiry</h2>
        <p style="margin: 6px 0 0 0; color: #c5c6c7; font-size: 14px;">A new inquiry has been submitted through the website.</p>
      </div>
      
      <div style="padding: 24px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f2833; color: #8892b0; width: 140px; font-weight: 600;">Name:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f2833; color: #ffffff; font-weight: bold;">${data.name || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f2833; color: #8892b0; font-weight: 600;">Phone Number:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f2833; color: #66fcf1;"><a href="tel:${data.phone}" style="color: #66fcf1; text-decoration: none; font-weight: bold;">${data.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f2833; color: #8892b0; font-weight: 600;">Project Type:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #1f2833; color: #ffffff; font-weight: 600;">${data.serviceType || "Website"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; color: #8892b0; font-weight: 600; vertical-align: top;">Goal / Details:</td>
            <td style="padding: 12px 0; color: #c5c6c7; line-height: 1.5; white-space: pre-wrap;">${data.goal || "No additional details provided."}</td>
          </tr>
        </table>
      </div>

      <div style="background-color: #12141d; padding: 16px 24px; text-align: center; border-top: 1px solid #1f2833; color: #8892b0; font-size: 12px;">
        Sent automatically by Valen Website Contact Form • ${new Date().toUTCString()}
      </div>
    </div>
  `;

  const textContent = `
New Project Inquiry:
--------------------------------------
Name: ${data.name || "N/A"}
Phone: ${data.phone}
Project Type: ${data.serviceType || "Website"}
Goal / Timeline: ${data.goal || "Not specified"}
Date: ${new Date().toISOString()}
--------------------------------------
`;

  return transporter.sendMail({
    from,
    to,
    cc,
    subject,
    text: textContent,
    html: htmlContent,
  });
}
