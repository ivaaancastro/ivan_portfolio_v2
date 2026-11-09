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
| F1   | Saneamiento: seguridad, rendimiento, a11y, SEO (sin cambios visuales) | ✅ Hecho     |
| F2   | Reestructura: contenido tipado, páginas de proyecto, i18n             | 🚧 En curso  |
| F3   | Rediseño visual                                                       | ⏳ Pendiente |
| F4   | Pulido y medición                                                     | ⏳ Pendiente |

Leyenda: ⏳ Pendiente · 🚧 En curso · ✅ Hecho · ⏸️ Bloqueado (indicar motivo)

**Fase actual:** F2
**Próxima tarea:** F3.1 (decisión D3, dirección visual). F2.3b queda abierta hasta que Iván tenga los textos.

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
> - `jsx-a11y` no analiza los elementos `motion.*`; los casos de F1.14–F1.16 se revisaron a mano con el teclado.
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

- [x] **F1.10** Imágenes en `src/assets/img`, WebP responsive con `astro:assets` (`<Image>` en `.astro`, `src/utils/images.ts` para islas React). Home: 7,6 MB → 0,38 MB — [#21](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/21)
- [x] **F1.11** Foto del Hero recortada en cuadrado al compilar y con `fetchpriority="high"` — [#21](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/21)
- [x] **F1.12** Inter autoalojada con la API de fuentes de Astro (Fontsource, 400–700, fallbacks ajustados, preload 400/700) — [#21](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/21)
- [x] **F1.13** Línea base de JS: ~129 KB gzip en home y ~116 KB en /personal (React + Motion). Objetivo: reducir en F2.4/F3 — [#21](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/21)

**Accesibilidad**

- [x] **F1.14** Modal de proyectos: `role="dialog"`, `aria-modal`, `aria-labelledby`, Esc, foco atrapado y devuelto, scroll bloqueado — [#22](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/22)
- [x] **F1.15** Tarjetas de proyecto: `<button>` que cubre toda la tarjeta, `aria-haspopup`, anillo de foco — [#22](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/22)
- [x] **F1.16** `alt` en todas las imágenes, `aria-label` en «Cerrar», `prefers-reduced-motion` (MotionConfig + CSS global) — [#22](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/22)
- [x] **F1.17** `rel="noopener noreferrer"` en todos los `target="_blank"` — [#22](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/22)

**SEO y móvil**

- [x] **F1.18** `site`, `trailingSlash: "never"`, `@astrojs/sitemap`, `robots.txt`, canonical sin barra final — [#23](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/23)
- [x] **F1.19** Open Graph + Twitter card, `description` por página, imagen OG 1200×630 (`npm run og`) — [#23](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/23)
- [x] **F1.20** `viewport` con `initial-scale=1` y `viewport-fit=cover`, `theme-color`, utilidad `pb-safe` — [#23](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/23)
- [x] **F1.21** Página 404 (`noindex`) — [#23](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/23)
- [x] **F1.22** Enlace "Ver proyectos" del Hero a `/#projects` — [#23](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/23)

## F2 · Reestructura

**Orden de trabajo:** F2.1 → F2.4 → F2.2 → F2.5 → F2.3 → F2.6. La web ya será bilingüe antes de crear las páginas de proyecto, así que esas páginas nacen en los dos idiomas.

- [x] **F2.1** Componentes React a TypeScript (`.jsx` → `.tsx`), con props, estado y refs tipados — [#25](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/25)
- [x] **F2.4** Componentes `.astro` por defecto. Todas las secciones son estáticas, las animaciones están en CSS y la modal es un `<dialog>` nativo. JS por página: de ~129 KB gzip a ~0,6 KB inline; se elimina `motion` — [#26](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/26)
- [x] **F2.2** Content Collections con esquema Zod, preparadas para dos idiomas — [#27](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/27):
  - `projects`: una carpeta por idioma (`es/`, `en/`), en MDX, porque el cuerpo será el caso de estudio.
  - `experience` y `stack`: datos con campos `es` y `en`.
- [x] **F2.5** i18n ES/EN (D1) — [#28](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/28)
  - Routing i18n de Astro: español sin prefijo (`/`, `/personal`) e inglés en `/en/…`.
  - Diccionario de textos de interfaz (`src/i18n/`).
  - Selector de idioma en la cabecera (visible también en móvil; no se añade a la BottomNav para no apretar sus 5 iconos).
  - `hreflang` alternos, `og:locale` por idioma y sitemap con alternates.
  - Página 404 en los dos idiomas.
- [x] **F2.5b** Traducción al inglés de todos los textos — [#29](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/29). **Borrador de Claude y revisión obligatoria de Iván**, porque son textos personales (biografía, experiencia, Lifestyle).
  - Inglés publicado (`publishedLangs = ["es", "en"]`). Textos nuevos: añadir siempre las dos versiones.
- [x] **F2.3** Páginas de caso de estudio (D2): `/proyectos/[slug]` y `/en/projects/[slug]` — [#30](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/30)
  - Estructura: cabecera, portada, cuerpo del MDX, ficha (stack y repo) y navegación anterior/siguiente. Imagen OG por proyecto (portada a 1200×630).
  - La tarjeta enlaza a la página. **Se elimina la modal**; si en F3 se quiere una vista rápida, se recupera del historial.
  - Segmentos de ruta traducidos (`routeSegments`): el selector de idioma, hreflang y sitemap enlazan `proyectos` ↔ `projects`.
- [ ] **F2.3b** Ampliar los textos de cada caso de estudio: contexto, problema, solución, decisiones técnicas, capturas y demo si la hay. Contenido de partida: el texto actual y el README de cada repo. **Lo escribe o revisa Iván**, en los dos idiomas.
- [x] **F2.6** View Transitions entre páginas (respetando `prefers-reduced-motion`) — [#31](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/31)
  - View Transitions nativas entre documentos (`@view-transition`), solo CSS: 0 KB de JS. No se usa `<ClientRouter />` de Astro, porque añade JS y obliga a reejecutar los scripts en cada navegación.
  - La portada del proyecto se transforma de la tarjeta a la página; la cabecera y la barra inferior quedan fijas.
  - Desactivadas con «reducir movimiento». En navegadores sin soporte (Firefox, por ahora) se navega sin animación.

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
- [ ] **F4.5** Valorar quitar React del todo (`@lucide/astro` en lugar de `lucide-react`) si ninguna isla lo necesita. Ahora mismo React solo se usa para renderizar iconos en el servidor (surgido en F2.4)

---

## Decisiones

### Tomadas

| ID  | Fecha      | Decisión                                                                                                          | Motivo                                                                                        |
| :-- | :--------- | :---------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| D0  | 2026-11-09 | Mantener Astro (actualizar a v7), no migrar de stack                                                              | Mejor encaje para un portfolio estático: islas, View Transitions, assets, Content Collections |
| D5  | 2026-11-09 | Eliminar la rama `master`; se trabaja con ramas por tarea y PR a `main`                                           | `master` ya no aportaba nada y estaba desfasada                                               |
| D6  | 2026-11-09 | Proteger `main` (PR obligatorio, incluso para admins)                                                             | Garantizar que todo pasa por PR, preview de Vercel y CI                                       |
| D7  | 2026-11-09 | Borrar `19C23CDF-…jpeg` e `ivanCvHoriz.pdf` (en F1.5)                                                             | No se usan en la web                                                                          |
| D1  | 2026-11-09 | Web bilingüe: español (por defecto, sin prefijo) e inglés (`/en`)                                                 | Decidido por Iván                                                                             |
| D2  | 2026-11-09 | Página de caso de estudio por proyecto                                                                            | Enseña mejor el trabajo que una modal y mejora el SEO                                         |
| D9  | 2026-11-09 | Aprobados los textos de SEO y de la imagen OG de [#23](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/23) | Revisados por Iván                                                                            |

**Repo fuera de iCloud (2026-11-09):** iCloud Drive generaba miles de copias « 2» (en src, .git y node_modules). La carpeta real es ahora `~/Documents/proyects/ivan_portfolio_v2.nosync`, que iCloud no sincroniza, y `ivan_portfolio_v2` es un enlace simbólico a ella. `.gitignore` ignora `* 2` y `* 2.*`.

**Entorno verificado (2026-11-09):** las variables `STRAVA_CLIENT_ID`, `STRAVA_CLIENT_SECRET`, `STRAVA_REFRESH_TOKEN`, `STRAVA_ATHLETE_ID` y `STRAVA_REDIRECT_URI` existen en Vercel para producción y preview. Las previews de Vercel tienen protección SSO (hay que iniciar sesión en Vercel para verlas).

### Pendientes

| ID  | Pregunta                                                                       | Necesaria antes de |
| :-- | :----------------------------------------------------------------------------- | :----------------- |
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
- 2026-11-09 · F1.10–F1.13 · Imágenes optimizadas (home 7,6 MB → 0,38 MB), Inter autoalojada, línea base de JS · [#21](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/21)
- 2026-11-09 · — · Proyecto excluido de iCloud (`.nosync` + enlace simbólico), copias « 2» eliminadas y `node_modules` reinstalado
- 2026-11-09 · F1.14–F1.17 · Accesibilidad: diálogo, tarjetas con teclado, reducir movimiento, `noopener` · [#22](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/22)
- 2026-11-09 · F1.18–F1.22 · SEO (sitemap, canonical, OG), 404, safe-area. **Fase 1 completada** · [#23](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/23)
- 2026-11-09 · D1, D2, D9 · Decisiones tomadas: web bilingüe, casos de estudio y textos de SEO aprobados; tareas de F2 detalladas
- 2026-11-09 · F2.1 · Componentes React migrados a TypeScript · [#25](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/25)
- 2026-11-09 · F2.4 · Secciones a `.astro`, animaciones CSS y `<dialog>` nativo; JS de ~129 KB a ~0,6 KB · [#26](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/26)
- 2026-11-09 · F2.2 · Proyectos (MDX por idioma), experiencia y stack en Content Collections; texto renderizado idéntico · [#27](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/27)
- 2026-11-09 · F2.5 · Routing ES/EN, diccionario, selector, hreflang, sitemap y 404 bilingüe; inglés sin publicar hasta F2.5b · [#28](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/28)
- 2026-11-09 · F2.5b · Traducción al inglés (borrador revisado por Iván) y publicación de `/en` · [#29](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/29)
- 2026-11-09 · F2.3 · Páginas de caso de estudio en ES/EN; las tarjetas enlazan a ellas y se retira la modal · [#30](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/30)
- 2026-11-09 · F2.6 · Transiciones entre páginas con View Transitions nativas (solo CSS). **F2 completada salvo F2.3b** (textos de Iván) · [#31](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/31)
- 2026-11-09 · — · Estudios actualizados en la biografía y el dato rápido (ES/EN): asignaturas aprobadas y TFG en curso, aprobado por Iván
