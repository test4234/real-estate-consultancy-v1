import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      message,
      source,
      date,
      company,
      city,
    } = body;

    if (!name || !phone) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Website Leads <onboarding@resend.dev>",
      to: process.env.LEAD_RECEIVER_EMAIL,
      subject: `New Lead — ${company}`,
      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f9fafb;
          padding: 24px;
          color: #111827;
        ">
          <div style="
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #e5e7eb;
            padding: 24px;
          ">

            <h2 style="
              margin: 0 0 20px;
              font-size: 20px;
              font-weight: 600;
            ">
              New Lead Received
            </h2>

            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
              <tr>
                <td style="padding:8px 0; color:#6b7280;">Name</td>
                <td style="padding:8px 0; font-weight:600;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; color:#6b7280;">Phone</td>
                <td style="padding:8px 0; font-weight:600;">${phone}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; color:#6b7280;">City</td>
                <td style="padding:8px 0;">${city}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; color:#6b7280;">Message</td>
                <td style="padding:8px 0;">${message || "—"}</td>
              </tr>
            </table>

            <hr style="
              border: none;
              border-top: 1px solid #e5e7eb;
              margin: 20px 0;
            " />

            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:13px; color:#6b7280;">
              <tr>
                <td style="padding:6px 0;">Source</td>
                <td style="padding:6px 0;">${source}</td>
              </tr>
              <tr>
                <td style="padding:6px 0;">Date</td>
                <td style="padding:6px 0;">${new Date(date).toLocaleString()}</td>
              </tr>
            </table>

          </div>

          <p style="
            text-align:center;
            font-size:11px;
            color:#9ca3af;
            margin-top:16px;
          ">
            This lead was generated from your website.
          </p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Lead email error:", error);

    return new Response(
      JSON.stringify({ error: "Email sending failed" }),
      { status: 500 }
    );
  }
}
