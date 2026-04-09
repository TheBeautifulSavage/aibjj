import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const url = process.env.DATABASE_URL || 'NOT SET'
  const urlSafe = url.replace(/:[^:@]+@/, ':***@').substring(0, 80)
  
  try {
    const { Pool } = await import('pg')
    const pool = new Pool({
      connectionString: url,
      ssl: { rejectUnauthorized: false },
      max: 1,
      connectionTimeoutMillis: 5000,
    })
    const client = await pool.connect()
    const result = await client.query('SELECT version()')
    client.release()
    await pool.end()
    return NextResponse.json({ ok: true, url: urlSafe, pg: result.rows[0].version.substring(0,30) })
  } catch (e: unknown) {
    const err = e as Error
    return NextResponse.json({ ok: false, url: urlSafe, error: err.message }, { status: 500 })
  }
}
