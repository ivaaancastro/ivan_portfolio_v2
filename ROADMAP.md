# Roadmap · ivan_portfolio_v2

Documento vivo para seguir la mejora y el rediseño del portfolio. Se actualiza **al terminar cada tarea**: se marca la casilla, se enlaza el PR y se añade una línea al [registro](#registro-de-avances).

- **Web:** https://ivan-portfolio-v2.vercel.app
- **Repo:** https://github.com/ivaaancastro/ivan_portfolio_v2
- **Vercel:** proyecto `ivan-portfolio-v2` (`prj_eEJm39BanEktBSJ8Vlz59T0VbzLC`)
- **Normas de trabajo:** [AGENTS.md](AGENTS.md)

## Estado general

| Fase | Objetivo                                                              | Estado                                 |
| :--- | :-------------------------------------------------------------------- | :------------------------------------- |
| F0   | Preparación: tooling, CI, flujo de ramas                              | ✅ Hecho                               |
| F1   | Saneamiento: seguridad, rendimiento, a11y, SEO (sin cambios visuales) | ✅ Hecho                               |
| F2   | Reestructura: contenido tipado, páginas de proyecto, i18n             | ✅ Hecho (salvo F2.3b, textos de Iván) |
| F3   | Rediseño visual                                                       | ✅ Hecho                               |
| F4   | Pulido y medición                                                     | ⏳ Pendiente                           |

Leyenda: ⏳ Pendiente · 🚧 En curso · ✅ Hecho · ⏸️ Bloqueado (indicar motivo)

**Fase actual:** F4 (las PR vuelven a ir contra `main`)
**Próxima tarea:** F4.3 · Vercel Web Analytics + Speed Insights. F2.3b sigue abierta hasta que Iván tenga los textos.

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

- [x] **F3.1** Recoger referencias y objetivos (decisión D3). Iván no tenía referencias y prefería ver ejemplos.
- [x] **F3.2** Tres propuestas (A «Plano técnico», B «Pista», C «Atlántico») en una página de maquetas; Iván elige la **A**.
- [x] **F3.3** Tokens de diseño (color, tipografía, espaciado, radios, movimiento) en `global.css` — [#32](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/32)
  - Colores claro/oscuro (`paper`, `ink`, `ink-soft`, `grid`, `cobalt`, `redline`), Archivo con eje de anchura, escala 12–72, cuadrícula de 24 px, hojas sin radio, animación única `draw`.
  - Tema: sigue al sistema; `data-theme` en `<html>` si el visitante elige (el botón llega con la cabecera).
  - Los tokens antiguos (`bg`, `primary`, Inter…) se retiran cuando la última sección deje de usarlos.
- [x] **F3.4** Nueva arquitectura de la home (orden y contenido de secciones), aprobada por Iván:
  1. **Portada:** nombre en Archivo estrecho, línea de cota con la profesión (única animación), frase actual, botones «Ver proyectos» y «Descargar CV», foto enmarcada como detalle del plano y cajetín con los datos rápidos (autor, lugar, formación, experiencia).
  2. **Proyectos** (sube al segundo puesto): Nexus Commerce Core en grande y los otros cuatro como hojas; cada uno enlaza a su caso de estudio.
  3. **Experiencia:** las etapas en Indra acotadas sobre una regla de tiempo a escala, con su descripción debajo. Dos líneas: **formación** (DAM en Centro Plurilingüe Karbo, sep 2020 – jun 2022; Ingeniería Informática en la UDC, desde sep 2022) y **trabajo** (Indra). Fechas del CV; los estudios irán en una colección `education` (es/en). Iván ha terminado las asignaturas y solo le falta el TFG: la línea de la UDC queda abierta hasta hoy («TFG en curso»). Los textos que dicen «cuarto curso» (biografía, dato rápido de la portada) se actualizan solo si Iván aprueba la nueva redacción.
  4. **Sobre mí y stack:** biografía actual y el stack como «lista de materiales» (tabla).
  5. **Contacto:** título grande y cajetín con email (acción principal), LinkedIn, GitHub y teléfono. El pie repite el cajetín reducido.
  - Navegación: cabecera con índice, selector ES/EN y botón de tema; en móvil, menú desplegable en la cabecera y **se retira la barra inferior**.
  - Lifestyle sigue enlazada solo desde la navegación (sin adelanto en la home).
- [x] **F3.5** Implementación por secciones (un PR por sección contra `redesign`): base (layout, cabecera, pie) → portada → proyectos → experiencia → sobre mí → contacto
  - [x] Base — [#36](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/36): fondo papel y Archivo en todo el sitio; cabecera nueva (índice en el orden de la home, ES/EN, botón de tema claro/oscuro, CV y menú desplegable en móvil con `popover` nativo); pie como cajetín; se retira la barra inferior. Las secciones antiguas se muestran dentro de un `<main class="legacy …">` oscuro hasta que se rediseñen.
  - [x] Portada — [#37](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/37): nombre en Archivo estrecho, línea de cota animada con la profesión, foto (sin marco ni «Detalle A», a petición de Iván), cajetín con los datos rápidos y botones «Ver proyectos» / «Descargar CV». Se retiran el antetítulo «Diseño · Desarrollo · Soporte» y el «Hola, soy».
  - [x] Proyectos — [#40](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/40): sube al segundo puesto; Nexus Commerce Core como hoja grande y el resto como hojas en dos columnas, con «Hoja n de 5», stack y portada. Cada hoja entera es un enlace a su caso de estudio (foco visible con teclado). Orden provisional del resto: Experiencia → Sobre mí → Contacto.
  - [x] Experiencia y formación — [#41](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/41): línea de tiempo vertical (de lo más reciente a lo más antiguo) con tarjetas alternas, mes de inicio en grande y etiqueta Formación/Trabajo. Animación ligada al scroll en CSS: la línea se dibuja, las tarjetas entran desde su lado y cada punto se enciende al pasar; «En curso» con un punto que late. Sin soporte o con «reducir movimiento», queda estática. Nueva colección `education` (DAM y UDC, ES/EN) y fechas `start`/`end` en `experience`; el periodo en texto se genera con `Intl`. Sustituye a una primera versión con regla horizontal a escala, que a Iván le resultó difícil de leer.
  - [x] Herramientas — [#42](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/42): esquema conectado (D12) que une cada herramienta con los proyectos que la usan (calculado con `matches` en `stack.json` y las etiquetas de cada proyecto). Al entrar en pantalla (un 20 % visible) se dibuja entero de una vez —cajas desde los lados, líneas una tras otra y después los impulsos—, sin depender de cuánto se baje y al pasar el ratón o el foco por un nodo se iluminan sus conexiones; en móvil, tarjetas con los proyectos de cada herramienta. La biografía («Sobre mí») sale de la home y pasa al principio de la página personal, que el menú enlaza ahora como «Sobre mí» (F3.6 la rediseña). Orden de la home: Portada → Proyectos → Herramientas → Experiencia → Contacto.
  - [x] Contacto — [#43](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/43): «Hablemos» en grande sobre la cuadrícula y los canales (email, teléfono, LinkedIn, GitHub) como filas de un cajetín, cada una un enlace con una cota que se dibuja bajo el valor al pasar el ratón o el foco; botón para copiar el email (anunciado a lectores de pantalla; en móvil solo icono). Las filas entran una tras otra con el scroll (CSS). La home ya no usa la envoltura `legacy`. Para no repetir enlaces (petición de Iván): en la home el pie no lleva la celda de enlaces (sí en el resto de páginas) y el segundo botón de la portada pasa de «Descargar CV» a «Contactar», porque el CV ya está en la cabecera (y en el menú en móvil).
- [x] **F3.6** Rediseño de `/personal` (Lifestyle) — [#44](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/44): textos reescritos más directos a petición de Iván (deporte con Strava, familia y amigos; sin frases hechas), sin titular grande (la página empieza directamente por «Deporte»; el `h1` «Lifestyle» queda solo para lectores de pantalla); Strava como cajetín cuyos kilómetros cuentan desde cero y cuyas barras crecen al aparecer en pantalla; fotos como láminas con pie que se «revelan» de abajo arriba la primera vez que aparecen (el pie llega después) y hacen zoom al pasar el ratón; sin numeración 01/02 (no es una secuencia). Ideas de animación tomadas de la skill taste (D13: una entrada al cargar, uno o dos momentos por página, nada animado solo por hacer scroll). La biografía vuelve a la home (D14), bajo la cota «Ingeniero Informático»; el menú enlaza la página como «Lifestyle».
- [x] **F3.7** Revisión responsive completa (375 / 768 / 1280+) — [#46](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/46): auditoría con script en el navegador de todas las páginas (home ES/EN, Lifestyle, casos de estudio, 404) a 320, 375, 768 y 1440 px. Arreglos: scroll horizontal de 24 px en móvil por las filas de Contacto al entrar (se recorta la sección), zonas táctiles de al menos 24 px (proyectos de las tarjetas de herramientas en móvil, enlaces del pie y «Volver a proyectos») y foto de la portada a 220 px entre 768 y 1023 px para que «Castro Roel» no se parta en tres líneas.
  - [x] Escala y ritmo unificados — [#44](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/44): tamaños fluidos (`clamp`) del `lead` al título para que crezcan con la pantalla sin saltos; un tamaño por rol (título solo para el `h1`, `h2` para todas las secciones —también «Hablemos»—, `h3` para títulos de tarjeta, fechas de la línea de tiempo y proyecto destacado); anchura de Archivo por rol (`stretch-display/heading/subheading`); espaciado común entre y dentro de secciones (`py-section`, `gap-block`, `gap-head`) y tarjetas con `p-5 md:p-6`. Párrafos largos en tamaño de texto normal; `lead` solo para entradillas.
- [x] **F3.8** Páginas de proyecto y 404 con el diseño nuevo, y limpieza final — [#45](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/45): cada caso de estudio es una hoja (cabecera sobre la cuadrícula con «Hoja n de 5», título, entradilla y portada enmarcada, que mantiene la transición desde la home), texto del MDX con estilos del plano y cajetín lateral fijo con stack y enlace a GitHub; anterior/siguiente como dos láminas. La 404 muestra «404» como cota acotada en rojo, en los dos idiomas. Limpieza: fuera la envoltura `legacy`, los colores y animaciones antiguos (`bg`, `primary`, `card`, `muted`, `fade-up`, `pop-in`), `reveal.ts` y la fuente Inter (solo queda Archivo).

## F4 · Pulido y medición

- [ ] **F4.1** Lighthouse ≥ 95 en las 4 categorías (móvil) en todas las páginas
- [x] **F4.2** axe sin errores en CI · [#48](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/48)
- [ ] **F4.3** Vercel Web Analytics + Speed Insights
- [ ] **F4.4** Revisión final de textos y datos personales
- [ ] **F4.5** Valorar quitar React del todo (`@lucide/astro` en lugar de `lucide-react`) si ninguna isla lo necesita. Ahora mismo React solo se usa para renderizar iconos en el servidor (surgido en F2.4)

---

## Decisiones

### Tomadas

| ID  | Fecha      | Decisión                                                                                                                                                                    | Motivo                                                                                                                                            |
| :-- | :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| D0  | 2026-11-09 | Mantener Astro (actualizar a v7), no migrar de stack                                                                                                                        | Mejor encaje para un portfolio estático: islas, View Transitions, assets, Content Collections                                                     |
| D5  | 2026-11-09 | Eliminar la rama `master`; se trabaja con ramas por tarea y PR a `main`                                                                                                     | `master` ya no aportaba nada y estaba desfasada                                                                                                   |
| D6  | 2026-11-09 | Proteger `main` (PR obligatorio, incluso para admins)                                                                                                                       | Garantizar que todo pasa por PR, preview de Vercel y CI                                                                                           |
| D7  | 2026-11-09 | Borrar `19C23CDF-…jpeg` e `ivanCvHoriz.pdf` (en F1.5)                                                                                                                       | No se usan en la web                                                                                                                              |
| D1  | 2026-11-09 | Web bilingüe: español (por defecto, sin prefijo) e inglés (`/en`)                                                                                                           | Decidido por Iván                                                                                                                                 |
| D2  | 2026-11-09 | Página de caso de estudio por proyecto                                                                                                                                      | Enseña mejor el trabajo que una modal y mejora el SEO                                                                                             |
| D3  | 2026-11-09 | Dirección visual A, «Plano técnico»: la web como un plano de ingeniería (papel, tinta, cuadrícula, cotas, cajetín), Archivo, claro y oscuro                                 | Elegida por Iván entre tres propuestas; empezar de cero, sin conservar nada del diseño actual                                                     |
| D10 | 2026-11-09 | El rediseño se integra en la rama `redesign`; cada sección es un PR contra ella y al final un PR `redesign` → `main`                                                        | Que la web publicada no muestre un diseño a medias                                                                                                |
| D4  | 2026-11-09 | Mantener el teléfono público en Contacto                                                                                                                                    | Decidido por Iván                                                                                                                                 |
| D11 | 2026-11-09 | Arquitectura de la home de F3.4 (orden Portada → Proyectos → Experiencia → Sobre mí → Contacto; sin barra inferior en móvil; foto en la portada; Lifestyle solo en el menú) | Aprobada por Iván sobre el plano de la home                                                                                                       |
| D12 | 2026-11-10 | La biografía va a la página personal («Sobre mí» + Lifestyle) y la home muestra las herramientas como un esquema conectado con los proyectos                                | Decidido por Iván: la tabla le parecía aburrida y prefería sacar el «Sobre mí» de la home                                                         |
| D14 | 2026-11-10 | La biografía vuelve a la home, bajo la cota «Ingeniero Informático» en lugar de la intro «Especialista en…»; `/personal` queda como «Lifestyle»                             | Decidido por Iván: prefiere el resumen en la portada, sin que ocupe mucho (sustituye la parte de D12 sobre la biografía)                          |
| D8  | 2026-11-10 | Se quita el espacio antes de la coma en la biografía («…en Indra, lo que…») y la edad pasa a 24 años                                                                        | Pedido por Iván                                                                                                                                   |
| D13 | 2026-11-10 | No instalar `Leonxlnx/taste-skill`; usar sus ideas a mano                                                                                                                   | Instala un hook que ejecuta scripts al final de cada turno y sus reglas chocan con D3 y con el objetivo de rendimiento; Iván eligió no instalarla |
| D9  | 2026-11-09 | Aprobados los textos de SEO y de la imagen OG de [#23](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/23)                                                           | Revisados por Iván                                                                                                                                |
| D15 | 2026-11-10 | Fix de contraste en /personal: `text-ink-soft` → `text-ink` en modo claro (PersonalPage.astro) para pasar axe en CI (Linux headless usa light mode)                          | CI reportaba 1 violación color-contrast (2 nodos) no reproducible localmente; fijado para asegurar contraste AA en modo claro                      |

**Repo fuera de iCloud (2026-11-09):** iCloud Drive generaba miles de copias « 2» (en src, .git y node_modules). La carpeta real es ahora `~/Documents/proyects/ivan_portfolio_v2.nosync`, que iCloud no sincroniza, y `ivan_portfolio_v2` es un enlace simbólico a ella. `.gitignore` ignora `* 2` y `* 2.*`.

**Entorno verificado (2026-11-09):** las variables `STRAVA_CLIENT_ID`, `STRAVA_CLIENT_SECRET`, `STRAVA_REFRESH_TOKEN`, `STRAVA_ATHLETE_ID` y `STRAVA_REDIRECT_URI` existen en Vercel para producción y preview. Las previews de Vercel tienen protección SSO (hay que iniciar sesión en Vercel para verlas).

### Pendientes

Ninguna.

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
- 2026-11-09 · F3.1–F3.3 · D3 (dirección «Plano técnico»), rama `redesign` y tokens de diseño · [#32](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/32)
- 2026-11-09 · F3.4 · Arquitectura de la home aprobada (D11) y D4 decidida (se mantiene el teléfono)
- 2026-11-09 · — · Estudios actualizados en la biografía y el dato rápido (ES/EN): asignaturas aprobadas y TFG en curso, aprobado por Iván
- 2026-11-10 · F3.5 · Base del rediseño: cabecera con menú y tema, pie como cajetín, sin barra inferior · [#36](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/36)
- 2026-11-10 · F3.5 · Portada rediseñada (nombre, cota, foto como detalle y cajetín) · [#37](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/37)
- 2026-11-10 · — · Duración en Indra corregida a 1 año (prácticas y contrato), en la biografía y el dato rápido (ES/EN), a petición de Iván
- 2026-11-10 · F3.5 · Proyectos rediseñados como hojas del plano y movidos al segundo puesto · [#40](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/40)
- 2026-11-10 · F3.5 · Experiencia y formación en una línea de tiempo vertical animada con el scroll; colección `education` · [#41](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/41)
- 2026-11-10 · F3.5 · Herramientas como esquema conectado con los proyectos; la biografía pasa a la página personal · [#42](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/42)
- 2026-11-10 · F3.5 · Contacto como cajetín de canales con copiar email; la home queda sin `legacy` · [#43](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/43)
- 2026-11-10 · F3.6 · Lifestyle con el diseño nuevo y Strava como cajetín; la biografía vuelve a la portada (D14) · [#44](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/44)
- 2026-11-10 · F3.6 · Lifestyle con textos más directos, sin titular grande, contador de Strava y fotos que se revelan · [#44](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/44)
- 2026-11-10 · F3.7 · Escala tipográfica fluida y espaciado común en todas las secciones · [#44](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/44)
- 2026-11-10 · F3.8 · Páginas de proyecto y 404 rediseñadas; sin `legacy`, Inter ni estilos antiguos · [#45](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/45)
- 2026-11-10 · F3.7 · Revisión responsive a 320/375/768/1440 px: sin scroll horizontal y zonas táctiles mínimas · [#46](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/46)
- 2026-11-10 · D8 · Biografía: 24 años y sin espacio antes de la coma · [#47](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/47)
- 2026-11-10 · F3 · Rediseño «Plano técnico» publicado: `redesign` → `main` · [#47](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/47)
- 2026-11-10 · F4.2 · axe sin errores en CI: contraste AA en modo claro en /personal (text-ink-soft → text-ink en PersonalPage.astro) · [#48](https://github.com/ivaaancastro/ivan_portfolio_v2/pull/48)
