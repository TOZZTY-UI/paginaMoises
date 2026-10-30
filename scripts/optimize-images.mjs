import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, relative, dirname, extname } from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const assetsRoot = join(projectRoot, 'src', 'assets', 'images');
const sharpCli = join(projectRoot, 'node_modules', 'sharp-cli', 'bin', 'cli.js');
const supported = new Set(['.jpg', '.jpeg', '.png']);

async function collect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collect(path));
    else if (supported.has(extname(entry.name).toLowerCase())) files.push(path);
  }
  return files;
}

function runSharp(input, output) {
  const isPng = extname(input).toLowerCase() === '.png';
  const args = [sharpCli, '--input', input, '--output', output];
  args.push(...(isPng
    ? ['--compressionLevel', '9', '--effort', '7', '--optimise']
    : ['--quality', '82', '--progressive', '--optimise']));
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, args, { stdio: 'inherit' });
    child.on('error', reject);
    child.on('exit', code => code === 0 ? resolve() : reject(new Error(`sharp-cli exited with ${code}`)));
  });
}

const files = await collect(assetsRoot);
let before = 0;
let after = 0;
for (const file of files) {
  const sizeBefore = (await stat(file)).size;
  await runSharp(file, file);
  const sizeAfter = (await stat(file)).size;
  before += sizeBefore;
  after += sizeAfter;
}

const saved = before - after;
console.log(`Optimized ${files.length} images: ${(before / 1024 / 1024).toFixed(2)} MB → ${(after / 1024 / 1024).toFixed(2)} MB (-${(saved / 1024 / 1024).toFixed(2)} MB, ${(saved / before * 100).toFixed(1)}%)`);
