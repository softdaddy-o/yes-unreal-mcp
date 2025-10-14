#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Find the tsx executable
const tsxPath = require.resolve('tsx/bin/tsx');
const binPath = path.join(__dirname, 'server', 'bin.ts');

// Run the TypeScript file with tsx
const child = spawn('node', [tsxPath, binPath], {
  stdio: 'inherit',
  cwd: __dirname
});

child.on('exit', (code) => {
  process.exit(code);
});
