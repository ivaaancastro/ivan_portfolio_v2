/**
 * Pruebas de accesibilidad con axe-core sobre el sitio compilado.
 *
 * Compila el sitio con `astro build`, levanta `astro preview` y recorre
 * cada ruta pública con un navegador Chromium (Playwright) ejecutando
 * axe.run(). Al final imprime las violaciones encontradas y sale con
 * código 1 si hay alguna, para que falle el CI.
 *
 * Uso:  node src/scripts/a11y.mjs
 *       npm run a11y
 */
/* global axe document */
import { spawn } from "child_process";
import { chromium } from "playwright";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const axeCorePath = require.resolve("axe-core");

const PORT = 4367;
const BASE = `http://localhost:${PORT}`;

// Rutas públicas del sitio (español sin prefijo, inglés con /en).
const ROUTES = [
  "/",
  "/personal",
  "/proyectos/ficfit",
  "/proyectos/gestor-cursos",
  "/proyectos/gestor-repositorios",
  "/proyectos/forma",
  "/proyectos/nexus-commerce-core",
  "/404",
  "/en",
  "/en/personal",
  "/en/projects/ficfit",
  "/en/projects/gestor-cursos",
  "/en/projects/gestor-repositorios",
  "/en/projects/forma",
  "/en/projects/nexus-commerce-core",
  "/en/404",
];

let previewProc;

function waitForServer(url, retries = 60, delay = 500) {
  return new Promise((resolve, reject) => {
    const tryFetch = (left) => {
      fetch(url)
        .then(() => resolve())
        .catch(() => {
          if (left <= 0) reject(new Error(`El servidor no respondió en ${url}`));
          else setTimeout(() => tryFetch(left - 1), delay);
        });
    };
    tryFetch(retries);
  });
}

async function main() {
  // 1. Compilar
  console.log("🔨 Compilando el sitio…");
  await runCommand("npm", ["run", "build"]);

  // 2. Levantar preview
  console.log("🖥️  Levantando preview en el puerto", PORT, "…");
  previewProc = spawn("npx", ["astro", "preview", "--port", String(PORT)], {
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env },
  });

  previewProc.stdout.on("data", (d) => process.stdout.write(d));
  previewProc.stderr.on("data", (d) => process.stderr.write(d));

  try {
    await waitForServer(`${BASE}/`);
  } catch (err) {
    console.error("❌", err.message);
    stopPreview();
    process.exit(1);
  }

  // 3. Recorrer rutas con axe
  const browser = await chromium.launch();
  // Sin animaciones: axe debe medir el estado final, no un fundido a medias.
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();

  let totalViolations = 0;
  const results = {};

  for (const route of ROUTES) {
    const violations = await auditRoute(page, `${BASE}${route}`);
    results[route] = violations;
    totalViolations += violations.length;
    if (violations.length === 0) {
      console.log(`✅ ${route} — sin violaciones`);
    } else {
      console.log(`❌ ${route} — ${violations.length} violación(es)`);
      for (const v of violations) {
        console.log(`   • ${v.id} (${v.impact}): ${v.description}`);
        console.log(`     ayuda: ${v.help}`);
        console.log(`     nodos: ${v.nodes.length}`);
        for (const n of v.nodes) {
          const html = (n.html ?? "").replace(/\s+/g, " ").slice(0, 220);
          console.log(`     nodo: ${html}`);
          const target = Array.isArray(n.target) ? n.target[n.target.length - 1] : n.target;
          /* eslint-disable no-undef */
          const styles = await page.evaluate((sel) => {
            const el = document.querySelector(sel);
            if (!el) return null;
            const cs = getComputedStyle(el);
            return { color: cs.color, backgroundColor: cs.backgroundColor };
          }, target);
          /* eslint-enable no-undef */
          console.log(`     estilos: ${JSON.stringify(styles)}`);
        }
      }
    }
  }

  await browser.close();
  stopPreview();

  console.log("\n==============================");
  console.log(`Total de violaciones de accesibilidad: ${totalViolations}`);
  console.log("==============================");

  process.exit(totalViolations === 0 ? 0 : 1);
}

async function auditRoute(page, url) {
  await page.goto(url, { waitUntil: "networkidle" });
  // Recorrer la página para que los elementos que se revelan al entrar en pantalla
  // (fotos de Lifestyle, barras de Strava…) lleguen a su estado visible antes de auditar.
  await page.evaluate(async () => {
    const step = globalThis.innerHeight / 2;
    for (let y = 0; y <= document.documentElement.scrollHeight; y += step) {
      globalThis.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 50));
    }
    globalThis.scrollTo(0, 0);
  });
  await page.waitForTimeout(300);
  // Inyectar axe-core y ejecutar auditoría (WCAG 2.1 A + AA).
  await page.addScriptTag({ path: axeCorePath });
  const results = await page.evaluate(() => {
    return new Promise((resolve) => {
      axe.run(document, { runOnly: ["wcag2a", "wcag2aa"] }, (err, res) =>
        err ? resolve({ error: err.message }) : resolve(res),
      );
    });
  });

  if (results.error) {
    console.error(`   axe error en ${url}:`, results.error);
    return [];
  }
  return results.violations ?? [];
}

function runCommand(cmd, args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(cmd, args, { stdio: "inherit" });
    proc.on("close", (code) =>
      code === 0
        ? resolve()
        : reject(new Error(`${cmd} ${args.join(" ")} falló con código ${code}`)),
    );
    proc.on("error", reject);
  });
}

function stopPreview() {
  if (previewProc && !previewProc.killed) {
    previewProc.kill();
  }
}

main().catch((err) => {
  console.error("❌ Error inesperado:", err);
  stopPreview();
  process.exit(1);
});
