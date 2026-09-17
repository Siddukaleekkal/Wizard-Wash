import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, address, city, zip, date, service, notes, authorize } = body;

    // Basic validation
    if (!name || !email || !phone || !address || !city || !zip || !service) {
      return Response.json(
        { error: "Missing required form fields." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in environment variables.");
      return Response.json(
        { error: "Email service is not configured. Please set RESEND_API_KEY." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Wizard Wash <onboarding@resend.dev>";
    const recipient = process.env.QUOTE_RECIPIENT_EMAIL || "omar@wizardwashva.com";

    const subject = `New Quote Request: ${service} - ${name}`;

    const textContent = `
New Quote Request Received:

Full Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Property Address: ${address}
City: ${city}
Zip Code: ${zip}
Requested Date: ${date || "Not specified"}
Authorized Contact: ${authorize ? "Yes" : "No"}

Additional Notes:
${notes || "None"}
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f7; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
    .header { background-color: #33155B; color: #ffffff; padding: 28px 32px; }
    .header h1 { margin: 0 0 6px; font-size: 22px; font-weight: 700; letter-spacing: 0.5px; }
    .header p { margin: 0; color: #d1c4e9; font-size: 14px; }
    .content { padding: 32px; }
    .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #00B55D; margin-bottom: 16px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    td { padding: 10px 0; border-bottom: 1px solid #edf2f7; vertical-align: top; font-size: 14px; }
    td.label { width: 38%; font-weight: 600; color: #7B2CBF; }
    td.value { color: #2d3748; }
    .notes-box { background: #f8fafc; border-left: 4px solid #00B55D; padding: 14px 18px; font-size: 14px; color: #334155; line-height: 1.5; border-radius: 0 6px 6px 0; }
    .footer { padding: 20px 32px; background: #f8fafc; border-top: 1px solid #edf2f7; font-size: 12px; color: #94a3b8; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Quote Request</h1>
      <p>Submitted via Wizard Wash website</p>
    </div>
    <div class="content">
      <div class="section-title">Client Details</div>
      <table>
        <tr>
          <td class="label">Full Name</td>
          <td class="value"><strong>${escapeHtml(name)}</strong></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value"><a href="mailto:${escapeHtml(email)}" style="color: #7B2CBF;">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td class="label">Phone Number</td>
          <td class="value"><a href="tel:${escapeHtml(phone)}" style="color: #7B2CBF;">${escapeHtml(phone)}</a></td>
        </tr>
        <tr>
          <td class="label">Service Requested</td>
          <td class="value"><strong style="color: #00B55D;">${escapeHtml(service)}</strong></td>
        </tr>
        <tr>
          <td class="label">Property Address</td>
          <td class="value">${escapeHtml(address)}</td>
        </tr>
        <tr>
          <td class="label">City, Zip</td>
          <td class="value">${escapeHtml(city)}, ${escapeHtml(zip)}</td>
        </tr>
        <tr>
          <td class="label">Requested Date</td>
          <td class="value">${escapeHtml(date || "Not specified")}</td>
        </tr>
        <tr>
          <td class="label">Contact Authorized</td>
          <td class="value">${authorize ? "Yes (Email / Text)" : "No"}</td>
        </tr>
      </table>

      <div class="section-title">Additional Notes</div>
      <div class="notes-box">
        ${escapeHtml(notes || "No additional notes provided.").replace(/\n/g, "<br/>")}
      </div>
    </div>
    <div class="footer">
      Wizard Wash &bull; Automated Quote Notification
    </div>
  </div>
</body>
</html>
    `.trim();

    const result = await resend.emails.send({
      from: fromEmail,
      to: [recipient],
      replyTo: email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    if (result.error) {
      console.error("Resend API error:", result.error);
      return Response.json(
        { error: result.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return Response.json({ success: true, id: result.data?.id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unexpected error occurred.";
    console.error("Quote form submission error:", err);
    return Response.json({ error: message }, { status: 500 });
  }
}

function escapeHtml(text: string): string {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
