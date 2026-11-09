# Roadmap · ivan_portfolio_v2

Documento vivo para seguir la mejora y el rediseño del portfolio. Se actualiza **al terminar cada tarea**: se marca la casilla, se enlaza el PR y se añade una línea al [registro](#registro-de-avances).

- **Web:** https://ivan-portfolio-v2.vercel.app
- **Repo:** https://github.com/ivaaancastro/ivan_portfolio_v2
- **Vercel:** proyecto `ivan-portfolio-v2` (`prj_eEJm39BanEktBSJ8Vlz59T0VbzLC`)
- **Normas de trabajo:** [AGENTS.md](AGENTS.md)

## Estado general

| Fase | Objetivo                                                              | Estado       |
| :--- | :-------------------------------------------------------------------- | :----------- |
| F0   | Preparación: tooling, CI, flujo de ramas                              | ✅ Hecho     |
| F1   | Saneamiento: seguridad, rendimiento, a11y, SEO (sin cambios visuales) | ⏳ Pendiente |
| F2   | Reestructura: contenido tipado, páginas de proyecto, i18n             | ⏳ Pendiente |
| F3   | Rediseño visual                                                       | ⏳ Pendiente |
| F4   | Pulido y medición                                                     | ⏳ Pendiente |

Leyenda: ⏳ Pendiente · 🚧 En curso · ✅ Hecho · ⏸️ Bloqueado (indicar motivo)

**Fase actual:** F1
**Próxima tarea:** F1.10

---

## F0 · Preparación

- [x] **F0.1** Añadir `ROADMAP.md`, `AGENTS.md` y `CLAUDE.md` al repo
- [x] **F0.2** Retirar la rama `master` (sin commits que no estuvieran en `main`; borrada en local y remoto)
- [x] **F0.9** Protección de rama en `main`: PR obligatorio (0 aprobaciones), también para admins, sin force push ni borrado, conversaciones resueltas
- [x] **F0.3** Prettier (+ `prettier-plugin-astro`, `prettier-plugin-tailwindcss`), scripts `format` y `format:check`; código formateado (HTML compilado equivalente) — [#10](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/10)
- [x] **F0.4** ESLint 9 (`typescript-eslint`, `eslint-plugin-astro`, `jsx-a11y`, `react-hooks` v5) y script `lint` — [#10](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/10)
- [x] **F0.5** `@astrojs/check` + TypeScript 6 y script `check`; corregidos 4 iconos lucide en `.astro` que recibían `class` en vez de `className` (sus clases se perdían) — [#10](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/10)
- [x] **F0.6** GitHub Actions (`ci`): `format:check` + `lint` + `check` + `build` en cada PR y en `main`; check `ci` obligatorio en la protección de `main` — [#10](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/10)
- [x] **F0.7** Dependabot (npm + GitHub Actions, semanal, agrupado) — [#10](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/10)
- [x] **F0.8** Node 24 (`.nvmrc` + `engines: 24.x`), igual que Vercel — [#10](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/10)

> **Node local:** Node 24 instalado con nvm y fijado como versión por defecto (2026-11-09). Astro 7.4 ya no arranca con Node < 22.23.4.
>
> **Notas de F0:**
>
> - `eslint-plugin-react-hooks` v7 se queda colgado al cargarse; se usa la v5 hasta revisarlo.
> - `jsx-a11y` no analiza los elementos `motion.*` (p. ej. `motion.article` con `onClick`), así que esos casos se revisan a mano en F1.14–F1.16.
> - ~~Iconos de marca obsoletos en lucide~~ → resuelto en F1.2.
> - Dependabot ignora las versiones mayores de ESLint y sus plugins hasta que `jsx-a11y` soporte ESLint 10 (revisar periódicamente).
> - npm 11 avisa de que `fsevents` (opcional, solo macOS) tiene scripts de instalación sin aprobar; no afecta al build.

## F1 · Saneamiento (sin cambios visuales)

**Dependencias y seguridad**

- [x] **F1.1** Astro 6.1 → 7.4 (Vite 8) y `@astrojs/react` 7.1; sin cambios de código según la guía de v7 — [#16](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/16)
- [x] **F1.2** React 19.3 y Tailwind 4.3 (en [#16](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/16)); framer-motion → `motion` 14 y lucide-react 1.70, con GitHub/LinkedIn en `src/components/icons/brand.tsx` — [#17](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/17)
- [x] **F1.3** `npm audit` a 0 vulnerabilidades (había 19, 1 crítica en `astro`); `overrides` de `minimatch` para `typescript-estree` — [#16](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/16)

**Limpieza**

- [x] **F1.4** Borrados restos de plantilla: `Welcome.astro`, `src/assets/astro.svg`, `src/assets/background.svg` — [#18](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/18)
- [x] **F1.5** Borrados `public/img/19C23CDF-…jpeg` y `public/ivanCvHoriz.pdf` (D7) — [#18](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/18)
- [x] **F1.6** Imports sin usar (F0.5), `<strong>` anidado en About, estilo global duplicado en `Layout.astro`, `@types/*` a `devDependencies` — [#18](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/18)
- [x] **F1.7** README real del proyecto + `.env.example` — [#18](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/18)

**Strava**

- [x] **F1.8** `strava.ts`: tipos, `response.ok` en token y stats, timeouts, validación y logs `[strava]`; nunca rompe el build — [#19](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/19)
- [x] **F1.9** Refresco diario: workflow `strava-refresh.yml` (05:00 UTC y manual) que llama al Deploy Hook `strava-daily` de Vercel (secreto `VERCEL_DEPLOY_HOOK_URL`). Probado el 2026-11-09: despliegue de producción READY y km reales en la web — [#19](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/19)

**Rendimiento**

- [ ] **F1.10** Mover imágenes a `src/assets` y servirlas con `<Image>/<Picture>` (AVIF/WebP, `srcset`)
- [ ] **F1.11** Imagen LCP del Hero con `loading="eager"` + `fetchpriority="high"`
- [ ] **F1.12** Fuente Inter autoalojada (Astro Fonts / Fontsource) en vez de Google Fonts
- [ ] **F1.13** Medir JS cliente por página (línea base antes de F3)

**Accesibilidad**

- [ ] **F1.14** Modal de proyectos: `role="dialog"`, `aria-modal`, cierre con Esc, foco atrapado y devuelto, bloquear scroll
- [ ] **F1.15** Tarjetas de proyecto accesibles por teclado (`<button>` o enlace)
- [ ] **F1.16** `alt` en todas las imágenes, `aria-label` en botones de icono, `prefers-reduced-motion`
- [ ] **F1.17** `rel="noopener noreferrer"` en todos los `target="_blank"`

**SEO y móvil**

- [ ] **F1.18** `site` en `astro.config`, `@astrojs/sitemap`, `robots.txt`, canonical
- [ ] **F1.19** Open Graph + Twitter card + imagen OG, `description` por página
- [ ] **F1.20** `viewport` con `initial-scale=1`, `viewport-fit=cover`; definir utilidad `pb-safe` (safe-area)
- [ ] **F1.21** Página 404
- [ ] **F1.22** Enlace "Ver proyectos" del Hero a `/#projects`

## F2 · Reestructura

- [ ] **F2.1** Todo a TypeScript (`.jsx` → `.tsx` / `.astro`)
- [ ] **F2.2** Content Collections: `projects`, `experience`, `stack` (con esquema Zod)
- [ ] **F2.3** Páginas de caso de estudio `/proyectos/[slug]` — _según decisión D2_
- [ ] **F2.4** Componentes `.astro` por defecto; React solo en islas interactivas
- [ ] **F2.5** i18n ES/EN — _según decisión D1_
- [ ] **F2.6** View Transitions entre páginas

## F3 · Rediseño

- [ ] **F3.1** Recoger referencias y objetivos (decisión D3)
- [ ] **F3.2** 2–3 propuestas de dirección visual para elegir
- [ ] **F3.3** Tokens de diseño (color, tipografía, espaciado, radios, movimiento) en `global.css`
- [ ] **F3.4** Nueva arquitectura de la home (orden y contenido de secciones)
- [ ] **F3.5** Implementación por secciones (un PR por sección)
- [ ] **F3.6** Rediseño de `/personal` (Lifestyle)
- [ ] **F3.7** Revisión responsive completa (375 / 768 / 1280+)

## F4 · Pulido y medición

- [ ] **F4.1** Lighthouse ≥ 95 en las 4 categorías (móvil) en todas las páginas
- [ ] **F4.2** axe sin errores en CI
- [ ] **F4.3** Vercel Web Analytics + Speed Insights
- [ ] **F4.4** Revisión final de textos y datos personales

---

## Decisiones

### Tomadas

| ID  | Fecha      | Decisión                                                                | Motivo                                                                                        |
| :-- | :--------- | :---------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| D0  | 2026-11-09 | Mantener Astro (actualizar a v7), no migrar de stack                    | Mejor encaje para un portfolio estático: islas, View Transitions, assets, Content Collections |
| D5  | 2026-11-09 | Eliminar la rama `master`; se trabaja con ramas por tarea y PR a `main` | `master` ya no aportaba nada y estaba desfasada                                               |
| D6  | 2026-11-09 | Proteger `main` (PR obligatorio, incluso para admins)                   | Garantizar que todo pasa por PR, preview de Vercel y CI                                       |
| D7  | 2026-11-09 | Borrar `19C23CDF-…jpeg` e `ivanCvHoriz.pdf` (en F1.5)                   | No se usan en la web                                                                          |

**Entorno verificado (2026-11-09):** las variables `STRAVA_CLIENT_ID`, `STRAVA_CLIENT_SECRET`, `STRAVA_REFRESH_TOKEN`, `STRAVA_ATHLETE_ID` y `STRAVA_REDIRECT_URI` existen en Vercel para producción y preview. Las previews de Vercel tienen protección SSO (hay que iniciar sesión en Vercel para verlas).

### Pendientes

| ID  | Pregunta                                                                       | Necesaria antes de |
| :-- | :----------------------------------------------------------------------------- | :----------------- |
| D1  | ¿Web bilingüe ES/EN?                                                           | F2.5               |
| D2  | ¿Páginas de caso de estudio por proyecto?                                      | F2.3               |
| D3  | Referencias de estilo / dirección visual                                       | F3.2               |
| D4  | ¿Mantener el teléfono público en la web?                                       | F4.4               |
| D8  | ¿Quitar el espacio sobrante antes de la coma en About («…en Indra , lo que…»)? | F4.4               |

## Backlog / ideas

- Blog o sección de notas técnicas
- Generación automática de imágenes OG por página
- Sección "Ahora" (en qué estoy trabajando)

## Registro de avances

Formato: `AAAA-MM-DD · ID · resumen · PR`

- 2026-11-09 · — · Análisis inicial del proyecto y creación del roadmap
- 2026-11-09 · F0.2 · Rama `master` eliminada (local y remoto)
- 2026-11-09 · F0.9 · Protección de rama activada en `main`
- 2026-11-09 · F0.1 · `ROADMAP.md`, `AGENTS.md` y `CLAUDE.md` añadidos
- 2026-11-09 · F0.3–F0.8 · Prettier, ESLint, astro check, CI, Dependabot y Node 24 · [#10](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/10)
- 2026-11-09 · F1.1, F1.3 · Astro 7.4, React 19.3, Tailwind 4.3; npm audit a 0 · [#16](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/16)
- 2026-11-09 · F1.2 · `motion` 14, lucide 1.70 e iconos de marca propios · [#17](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/17)
- 2026-11-09 · F1.4–F1.7 · Limpieza de plantilla y archivos sin uso, README y `.env.example` · [#18](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/18)
- 2026-11-09 · F1.8, F1.9 · Cliente de Strava robusto y workflow de refresco diario · [#19](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/19)
- 2026-11-09 · F1.9 · Deploy Hook y secreto configurados; ejecución manual del workflow verificada en producción
