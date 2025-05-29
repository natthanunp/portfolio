import { createClient } from '@supabase/supabase-js'

// Supabase client for client-side use
// These will be replaced with environment variables in production
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://iszfkqlwuuqjnbnyckcf.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Function to get dog likes count
export async function getDogLikes() {
  // Try to get the latest count
  const { data, error } = await supabase
    .from('like_count')
    .select('count')
    .order('id', { ascending: false })
    .limit(1)
  
  if (error) {
    console.error('Error fetching dog likes:', error)
    return 0
  }
  
  // If no rows exist yet, return 0
  if (!data || data.length === 0) {
    return 0
  }
  
  return data[0].count || 0
}

// Function to increment dog likes
export async function incrementDogLikes() {
  try {
    // First check if the table is empty
    const { data: checkData } = await supabase
      .from('like_count')
      .select('count')
      .order('id', { ascending: false })
      .limit(1)
    
    let newCount = 1
    
    // If we have data, increment the latest count
    if (checkData && checkData.length > 0) {
      newCount = (checkData[0].count || 0) + 1
    }
    
    // Insert a new record with the updated count
    const { data, error } = await supabase
      .from('like_count')
      .insert([{ count: newCount }])
      .select()
    
    if (error) {
      console.error('Error incrementing dog likes:', error)
      return newCount - 1 // Return previous count on error
    }
    
    return data?.[0]?.count || newCount
  } catch (error) {
    console.error('Unexpected error incrementing likes:', error)
    return 0
  }
}
