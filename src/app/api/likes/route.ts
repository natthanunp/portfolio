// API route for Next.js to handle likes with Supabase
import { NextRequest, NextResponse } from 'next/server'
import { getDogLikes, incrementDogLikes } from '@/lib/supabase'

export async function GET() {
  try {
    const likeCount = await getDogLikes()
    
    return NextResponse.json({ 
      totalLikes: likeCount,
      lastUpdated: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error fetching likes:', error)
    return NextResponse.json({ 
      totalLikes: 0,
      error: 'Failed to fetch like count',
      lastUpdated: new Date().toISOString()
    }, { status: 500 })
  }
}

export async function POST() {
  try {
    const newLikeCount = await incrementDogLikes()
    
    return NextResponse.json({ 
      totalLikes: newLikeCount,
      lastUpdated: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error incrementing likes:', error)
    return NextResponse.json({ 
      error: 'Failed to increment like count',
      lastUpdated: new Date().toISOString()
    }, { status: 500 })
  }
}
