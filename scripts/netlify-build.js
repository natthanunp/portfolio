#!/usr/bin/env node

/**
 * Custom Netlify build script that cleans the cache and builds the project
 * This helps avoid environment variable detection issues in cached files
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧹 Cleaning Next.js cache...');
try {
  execSync('npm run clean', { stdio: 'inherit' });
} catch (error) {
  console.log('Cache clean failed or no cache to clean');
}

console.log('🔧 Building Next.js application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
