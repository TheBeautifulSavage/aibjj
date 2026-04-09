import { NextResponse } from 'next/server'
import metaData from '@/data/bjj-meta-data.json'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category') || 'all' // gi, nogi, all
  const year = searchParams.get('year')

  if (category === 'gi') {
    return NextResponse.json({
      data: metaData.gi,
      heelHookTrend: metaData.heelHookTrend,
      tournamentComparison: metaData.tournamentComparison,
    })
  } else if (category === 'nogi') {
    return NextResponse.json({
      data: metaData.nogi,
      heelHookTrend: metaData.heelHookTrend,
      tournamentComparison: metaData.tournamentComparison,
    })
  }

  return NextResponse.json(metaData)
}
