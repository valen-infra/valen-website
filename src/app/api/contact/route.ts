import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, serviceType, goal } = body;

    console.log("📨 Received contact form submission:", { name, phone, serviceType, goal });

    if (!phone || typeof phone !== "string" || phone.trim().length < 3) {
      return NextResponse.json(
        { error: "A valid phone number is required." },
        { status: 400 }
      );
    }

    const info = await sendContactEmail({
      name: name?.trim() || "",
      phone: phone.trim(),
      serviceType: serviceType || "Website",
      goal: goal?.trim() || "",
    });

    console.log("✅ Email sent successfully! MessageId:", (info as { messageId?: string }).messageId);

    return NextResponse.json(
      { success: true, message: "Thank you! Your request has been sent successfully." },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("❌ Error sending contact email:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json(
      { error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    );
  }
}
