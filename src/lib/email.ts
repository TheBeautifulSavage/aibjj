import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "AIBJJ <onboarding@resend.dev>";
const ADMIN_EMAIL = "hulljessej@gmail.com";

const baseStyle = `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #09090b; color: #e4e4e7; margin: 0; padding: 0;`;
const containerStyle = `max-width: 560px; margin: 0 auto; padding: 40px 24px;`;
const headingStyle = `font-size: 24px; font-weight: 700; color: #f4f4f5; margin: 0 0 8px;`;
const textStyle = `font-size: 15px; line-height: 1.6; color: #a1a1aa; margin: 0 0 16px;`;
const btnStyle = `display: inline-block; background: #dc2626; color: #fff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 15px; margin: 8px 0;`;
const dividerStyle = `border: none; border-top: 1px solid #27272a; margin: 28px 0;`;
const footerStyle = `font-size: 12px; color: #52525b; text-align: center; margin-top: 32px;`;
const logoStyle = `font-family: monospace; font-size: 22px; font-weight: 900; color: #dc2626; letter-spacing: -0.05em;`;
const cardStyle = `background: #18181b; border: 1px solid #27272a; border-radius: 10px; padding: 20px; margin: 12px 0;`;

function wrap(content: string): string {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="${baseStyle}"><div style="${containerStyle}">
<div style="margin-bottom:32px;"><span style="${logoStyle}">AIBJJ</span></div>
${content}
<hr style="${dividerStyle}">
<div style="${footerStyle}">© ${new Date().getFullYear()} AIBJJ — The #1 Platform for BJJ Creators and Students<br>
<a href="https://aibjj.com" style="color:#52525b;">aibjj.com</a></div>
</div></body></html>`;
}

export async function sendWelcomeEmail(to: string, name: string) {
  await resend.emails.send({
    from: FROM, to,
    subject: "Welcome to AIBJJ — Your BJJ journey starts here",
    html: wrap(`
      <h1 style="${headingStyle}">Welcome, ${name}! 🥋</h1>
      <p style="${textStyle}">You just joined the most advanced BJJ platform on the internet. AI coaching, 510+ techniques, personalized game plans — all built for serious practitioners.</p>
      <div style="${cardStyle}"><strong style="color:#f4f4f5;">📚 Technique Library</strong><br><span style="color:#a1a1aa;font-size:14px;">510+ techniques across every position, filter by belt level</span></div>
      <div style="${cardStyle}"><strong style="color:#f4f4f5;">🤖 AI Coach</strong><br><span style="color:#a1a1aa;font-size:14px;">Ask anything — escapes, game plans, competition strategy</span></div>
      <div style="${cardStyle}"><strong style="color:#f4f4f5;">🎯 Game Plan Builder</strong><br><span style="color:#a1a1aa;font-size:14px;">AI-generated game plan tailored to your style and goals</span></div>
      <br><a href="https://aibjj.com/dashboard" style="${btnStyle}">Go to Dashboard →</a>
    `)
  });
}

export async function sendCreatorVerificationEmail(
  creatorName: string, creatorEmail: string, academyName: string, username: string
) {
  await resend.emails.send({
    from: FROM, to: ADMIN_EMAIL,
    subject: `New Creator Registration: ${academyName || creatorName}`,
    html: wrap(`
      <h1 style="${headingStyle}">New Creator Registration</h1>
      <p style="${textStyle}">A new creator has set up their page on AIBJJ:</p>
      <div style="${cardStyle}">
        <p style="margin:4px 0;color:#f4f4f5;"><strong>Name:</strong> ${creatorName}</p>
        <p style="margin:4px 0;color:#f4f4f5;"><strong>Email:</strong> ${creatorEmail}</p>
        <p style="margin:4px 0;color:#f4f4f5;"><strong>Academy:</strong> ${academyName || "Not set"}</p>
        <p style="margin:4px 0;color:#f4f4f5;"><strong>Username:</strong> @${username}</p>
        <p style="margin:4px 0;color:#f4f4f5;"><strong>Subdomain:</strong> https://${username}.aibjj.com</p>
      </div>
      <a href="https://${username}.aibjj.com" style="${btnStyle}">View Their Page →</a>
      <a href="https://aibjj.com/dashboard" style="${btnStyle.replace('#dc2626','#27272a')}">Admin Dashboard</a>
      <p style="font-size:13px;color:#52525b;margin-top:16px;">Reply to this email to contact the creator directly at ${creatorEmail}</p>
    `)
  });
}

export async function sendCoursePurchaseEmail(
  to: string, buyerName: string, courseTitle: string, creatorName: string, amount: number
) {
  await resend.emails.send({
    from: FROM, to,
    subject: `You're enrolled: ${courseTitle}`,
    html: wrap(`
      <h1 style="${headingStyle}">You're in! 🎉</h1>
      <p style="${textStyle}">You now have full access to <strong style="color:#f4f4f5;">${courseTitle}</strong> by ${creatorName}.</p>
      <div style="${cardStyle}">
        <p style="margin:4px 0;color:#a1a1aa;font-size:14px;">Course</p>
        <p style="margin:4px 0 12px;color:#f4f4f5;font-size:16px;font-weight:600;">${courseTitle}</p>
        <p style="margin:4px 0;color:#a1a1aa;font-size:14px;">Instructor</p>
        <p style="margin:4px 0 12px;color:#f4f4f5;">${creatorName}</p>
        <p style="margin:4px 0;color:#a1a1aa;font-size:14px;">Amount paid</p>
        <p style="margin:4px 0;color:#f4f4f5;font-weight:600;">$${amount.toFixed(2)}</p>
      </div>
      <a href="https://aibjj.com/dashboard/courses" style="${btnStyle}">Start Learning →</a>
    `)
  });
}

export async function sendCreatorSaleEmail(
  to: string, creatorName: string, courseTitle: string,
  buyerName: string, amount: number, platformFeePercent = 15
) {
  const platformFee = amount * (platformFeePercent / 100);
  const earnings = amount - platformFee;
  await resend.emails.send({
    from: FROM, to,
    subject: `💰 New sale: ${courseTitle} — $${amount.toFixed(2)}`,
    html: wrap(`
      <h1 style="${headingStyle}">You made a sale! 💰</h1>
      <p style="${textStyle}"><strong style="color:#f4f4f5;">${buyerName}</strong> just purchased <strong style="color:#f4f4f5;">${courseTitle}</strong>.</p>
      <div style="${cardStyle}">
        <p style="margin:4px 0;display:flex;justify-content:space-between;"><span style="color:#a1a1aa;">Sale price</span><span style="color:#f4f4f5;">$${amount.toFixed(2)}</span></p>
        <p style="margin:4px 0;display:flex;justify-content:space-between;"><span style="color:#a1a1aa;">Platform fee (${platformFeePercent}%)</span><span style="color:#a1a1aa;">−$${platformFee.toFixed(2)}</span></p>
        <hr style="${dividerStyle}margin:8px 0;">
        <p style="margin:4px 0;display:flex;justify-content:space-between;"><span style="color:#f4f4f5;font-weight:600;">Your earnings</span><span style="color:#22c55e;font-weight:700;font-size:18px;">$${earnings.toFixed(2)}</span></p>
      </div>
      <a href="https://aibjj.com/dashboard" style="${btnStyle}">View Dashboard →</a>
    `)
  });
}

export async function sendPasswordResetEmail(to: string, resetUrl: string) {
  await resend.emails.send({
    from: FROM, to,
    subject: "Reset your AIBJJ password",
    html: wrap(`
      <h1 style="${headingStyle}">Reset your password</h1>
      <p style="${textStyle}">Click the button below to reset your AIBJJ password. This link expires in 1 hour.</p>
      <a href="${resetUrl}" style="${btnStyle}">Reset Password →</a>
      <p style="font-size:13px;color:#52525b;margin-top:16px;">If you didn't request this, you can safely ignore this email.</p>
    `)
  });
}
