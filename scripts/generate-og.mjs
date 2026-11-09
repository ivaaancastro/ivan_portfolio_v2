/**
 * Generates public/og.png (1200x630), the image shown when the site is shared.
 * Run with `npm run og` after changing the photo or the texts below.
 * Uses sharp, which Astro already installs for image optimisation.
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("..", import.meta.url));
const W = 1200,
  H = 630,
  P = 360;

// Square crop of the hero photo, rounded.
const photo = await sharp(`${root}src/assets/img/ivan-foto.jpg`)
  .resize(P, P, { fit: "cover", position: "attention" })
  .composite([
    {
      input: Buffer.from(
        `<svg width="${P}" height="${P}"><rect width="${P}" height="${P}" rx="40" ry="40"/></svg>`,
      ),
      blend: "dest-in",
    },
  ])
  .png()
  .toBuffer();

const font = "Helvetica Neue, Helvetica, Arial, sans-serif";
const bg = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g" cx="50%" cy="-10%" r="80%">
      <stop offset="0%" stop-color="#6cf0c2" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#6cf0c2" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="p" cx="78%" cy="50%" r="35%">
      <stop offset="0%" stop-color="#6cf0c2" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#6cf0c2" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="#0e0f12"/>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect width="100%" height="100%" fill="url(#p)"/>
  <text x="80" y="200" font-family="${font}" font-size="26" font-weight="700" fill="#6cf0c2" letter-spacing="3">PORTFOLIO</text>
  <text x="80" y="285" font-family="${font}" font-size="76" font-weight="700" fill="#ffffff">Iván Castro<tspan fill="#6cf0c2">.</tspan></text>
  <text x="80" y="360" font-family="${font}" font-size="44" font-weight="600" fill="#9aa3b2">Ingeniero Informático</text>
  <text x="80" y="430" font-family="${font}" font-size="28" fill="#d1d5db">Java · Spring Boot · React · IA</text>
  <text x="80" y="540" font-family="${font}" font-size="24" fill="#9aa3b2">ivan-portfolio-v2.vercel.app</text>
  <rect x="${W - 80 - P - 4}" y="${(H - P) / 2 - 4}" width="${P + 8}" height="${P + 8}" rx="44" fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="2"/>
</svg>`);

await sharp(bg)
  .composite([{ input: photo, left: W - 80 - P, top: (H - P) / 2 }])
  .png({ compressionLevel: 9, palette: false })
  .toFile(`${root}public/og.png`);
console.log("public/og.png generated");
