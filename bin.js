#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Use npx tsx to run the TypeScript file
const binPath = path.join(__dirname, 'server', 'bin.ts');

// Run the TypeScript file with npx tsx
const child = spawn('npx', ['tsx', binPath], {
  stdio: 'inherit',
  cwd: __dirname,
  shell: true
});

child.on('exit', (code) => {
  process.exit(code);
});
