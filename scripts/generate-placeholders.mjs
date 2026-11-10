import fs from 'fs';
import path from 'path';

// Create directories
const publicDir = path.resolve('public');
const projectsDir = path.resolve('public/projects');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(projectsDir)) fs.mkdirSync(projectsDir, { recursive: true });

// Minimal valid 1x1 JPEG buffer
const minimalJpeg = Buffer.from(
  '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=',
  'base64'
);

// Minimal valid PNG buffer
const minimalPng = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
);

// Write placeholder files
fs.writeFileSync(path.join(publicDir, 'shahid.jpg'), minimalJpeg);
fs.writeFileSync(path.join(publicDir, 'og-image.png'), minimalPng);
fs.writeFileSync(path.join(projectsDir, 'project-portfolio.png'), minimalPng);
fs.writeFileSync(path.join(projectsDir, 'project-weather.png'), minimalPng);
fs.writeFileSync(path.join(projectsDir, 'project-ml.png'), minimalPng);
fs.writeFileSync(path.join(projectsDir, 'project-notes.png'), minimalPng);

console.log('Placeholders created successfully.');

