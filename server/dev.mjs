import { spawn } from 'node:child_process';
const processes = [spawn(process.execPath, ['--watch', 'server/auth.mjs'], { stdio: 'inherit' }), spawn(process.execPath, ['node_modules/vite/bin/vite.js', ...process.argv.slice(2)], { stdio: 'inherit' })];
let stopping = false;
function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  for (const child of processes) child.kill('SIGTERM');
  process.exitCode = code;
}
for (const child of processes) { child.on('exit', code => stop(code || 0)); child.on('error', () => stop(1)); }
process.on('SIGINT', () => stop());
process.on('SIGTERM', () => stop());
