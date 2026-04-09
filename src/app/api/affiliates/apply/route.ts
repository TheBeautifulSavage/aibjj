import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, website, audience, howPromote } = await req.json()

    if (!name || !email || !howPromote) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Notify admin
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'hulljessej@gmail.com',
      subject: `New Affiliate Application: ${name}`,
      text: `New affiliate application received.\n\nName: ${name}\nEmail: ${email}\nWebsite: ${website || 'Not provided'}\nAudience size: ${audience || 'Not provided'}\nHow they'll promote: ${howPromote}`,
    })

    // Confirm to applicant
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'AIBJJ Affiliate Application Received',
      text: `Hi ${name},\n\nThanks for applying to the AIBJJ affiliate program!\n\nWe've received your application and will review it within 2–3 business days. If approved, you'll receive your unique affiliate link and access to your dashboard.\n\nThe AIBJJ affiliate program pays 30% recurring commission on every Pro subscription you refer — so we're excited to have you on board.\n\nTrain hard,\nThe AIBJJ Team\nhttps://aibjj.com`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Affiliate application error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
