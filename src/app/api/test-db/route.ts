import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(
      "https://vylxyumwdrogzzioxbaj.supabase.co",
      process.env.SUPABASE_SERVICE_ROLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5bHh5dW13ZHJvZ3p6aW94YmFqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDcxOTcyOCwiZXhwIjoyMDkwMjk1NzI4fQ.l4xzoqTpMx2VYvuv_l4hHuBOau-K7-keNmBnz74KuZA",
      { auth: { autoRefreshToken: false, persistSession: false } }
    )
    
    const { data, error } = await supabase.from('User').select('count').limit(1)
    
    if (error) {
      return NextResponse.json({ ok: false, error: error.message, hint: error.hint })
    }
    
    return NextResponse.json({ ok: true, transport: 'supabase-rest-api', data })
  } catch (e: unknown) {
    const err = e as Error
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 })
  }
}
