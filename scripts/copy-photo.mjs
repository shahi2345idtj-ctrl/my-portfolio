import fs from 'fs';
import path from 'path';

const src = "C:/Users/user/Pictures/Screenshots/Screenshot 2026-11-10 114632.png";
const destPng = path.resolve("public/shahid.png");
const destJpg = path.resolve("public/shahid.jpg");

if (fs.existsSync(src)) {
  fs.copyFileSync(src, destPng);
  fs.copyFileSync(src, destJpg);
  console.log("Successfully copied photo to public/shahid.png and public/shahid.jpg");
} else {
  console.error("Source photo not found at", src);
}

