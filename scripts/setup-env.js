// Pre-build script to handle environment variables
const fs = require('fs');
const path = require('path');

// Create a .env.local file if it doesn't exist with safe defaults for public URLs
const envPath = path.join(process.cwd(), '.env.local');

// Only set defaults for the Supabase URL since it's safe to expose
const defaultEnv = `NEXT_PUBLIC_SUPABASE_URL=https://iszfkqlwuuqjnbnyckcf.supabase.co\n`;

// Don't overwrite if the file exists
if (!fs.existsSync(envPath)) {
  console.log('Creating default .env.local for safe environment variables');
  fs.writeFileSync(envPath, defaultEnv);
}

console.log('Environment setup complete!');
