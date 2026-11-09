# AGENTS.md · Flujo de trabajo y normas obligatorias

Este archivo define cómo trabaja cualquier agente (Claude u otro) en este repositorio. **Las normas son obligatorias.** Si una norma choca con una petición, se avisa a Iván antes de actuar.

## Proyecto

Portfolio personal de Iván Castro Roel. Astro + React (solo islas) + Tailwind CSS 4, salida estática, desplegado en Vercel desde `main`.

- Seguimiento del trabajo: [ROADMAP.md](ROADMAP.md)
- Comandos: `npm run dev` · `npm run build` · `npm run preview` (y `lint`, `check`, `format` cuando existan tras F0)

## 1. Antes de empezar cualquier tarea

1. Leer `ROADMAP.md`: fase actual, próxima tarea y decisiones pendientes.
2. Identificar el ID de la tarea (p. ej. `F1.8`). Si el trabajo no está en el roadmap, añadirlo antes en la fase o el backlog correspondiente.
3. Si la tarea depende de una decisión pendiente (`D1`, `D2`…), **parar y preguntar**; no decidir por Iván.
4. `git status` limpio y `main` actualizado (`git pull`) antes de crear rama.

## 2. Ramas, commits y PRs

- **Nunca** se hace commit directo en `main`. Todo entra por PR.
- Nombre de rama: `<tipo>/<id>-<descripcion-corta>` → `chore/f1.1-astro-7`, `feat/f2.3-case-studies`, `fix/f1.14-modal-a11y`.
- Commits con [Conventional Commits](https://www.conventionalcommits.org/) en inglés: `feat`, `fix`, `chore`, `refactor`, `perf`, `docs`, `style`, `test`, `ci`. Ámbito opcional: `fix(strava): handle token errors`.
- Commits pequeños y con un único propósito. Varias tareas relacionadas pueden compartir PR si se citan todas.
- El PR incluye: IDs del roadmap, qué cambia, cómo se ha verificado y capturas (móvil y escritorio) si hay cambios visuales.
- Usar la preview de Vercel del PR para revisar.
- **Preguntar SIEMPRE a Iván antes de fusionar cualquier PR**, aunque esté todo en verde. Cada aprobación sirve solo para el PR concreto que se ha preguntado: no se reutiliza para otros PRs ni para cambios posteriores en el mismo PR. Nada de auto-merge.
- Prohibido: `push --force` sobre `main`, reescribir historial publicado, borrar ramas remotas sin confirmación.

## 3. Verificación obligatoria antes de abrir un PR

- [ ] `npm run build` sin errores ni warnings nuevos
- [ ] `npm run check` y `npm run lint` en verde (desde F0)
- [ ] Cambios de UI revisados en navegador a **375 px** y **1280 px**, sin scroll horizontal
- [ ] Sin errores en la consola del navegador
- [ ] Teclado: todo lo interactivo es accesible con Tab/Enter/Esc
- [ ] Si se tocan dependencias: `npm audit` sin vulnerabilidades altas o críticas

Si algo no se ha podido verificar, se dice explícitamente en el PR y al informar. Nunca se da por hecho.

## 4. Actualizar el roadmap (siempre)

Al terminar una tarea, **en el mismo PR**:

1. Marcar la casilla `[x]` y añadir el enlace al PR.
2. Añadir una línea al _Registro de avances_ (`AAAA-MM-DD · ID · resumen · PR`).
3. Actualizar _Estado general_, _Fase actual_ y _Próxima tarea_.
4. Registrar en _Decisiones_ cualquier decisión tomada, con fecha y motivo.
5. Si aparecen problemas o ideas nuevas, añadirlos a la fase o al backlog.

## 5. Normas de código

- **TypeScript** en todo el código nuevo. Nada de `any` sin justificar.
- **Componentes `.astro` por defecto.** React solo cuando haya estado o interacción real, con la directiva de hidratación más tardía posible (`client:visible` / `client:idle` antes que `client:load`).
- **Contenido separado de la presentación**: textos de proyectos, experiencia y stack en Content Collections (desde F2), no dentro de los componentes.
- **Estilos**: Tailwind con los tokens de `src/styles/global.css` (`@theme`). Sin colores hex sueltos en componentes; si hace falta uno nuevo, se añade como token.
- **Imágenes** en `src/assets` y con `<Image>` / `<Picture>` de `astro:assets`, siempre con `alt` y dimensiones. `public/` solo para archivos que se sirven tal cual (PDF del CV, favicon, robots).
- **Animaciones** respetando `prefers-reduced-motion`. Preferir CSS y View Transitions antes que JS.
- **Accesibilidad**: HTML semántico, un solo `h1` por página, jerarquía de encabezados correcta, contraste AA, `aria-label` en botones de icono, `rel="noopener noreferrer"` en `target="_blank"`.
- **Rendimiento**: objetivo de Lighthouse móvil ≥ 95. Ninguna dependencia nueva sin justificar su peso y su necesidad en el PR.
- **Dependencias**: subidas de versión mayor en PR propio, siguiendo la guía de migración oficial (consultar la documentación actual, no ir de memoria).
- Nombres de código (variables, funciones, archivos) en inglés. Textos de la interfaz y documentación en español.

## 6. Seguridad y datos personales

- **Nunca** se suben al repo `.env`, tokens ni credenciales. Los secretos (Strava) viven en `.env` local y en las variables de entorno de Vercel.
- No imprimir valores de secretos en la terminal, en logs ni en PRs.
- **No cambiar textos personales** (biografía, edad, experiencia, datos de contacto, fotos) sin que Iván lo pida o lo apruebe.
- Antes de borrar archivos de contenido (imágenes, PDFs), confirmar con Iván.

## 7. Rediseño (F3)

- No se implementa ningún rediseño sin una dirección visual aprobada (decisión `D3`).
- Usar la skill `.agents/skills/frontend-design` como guía de diseño.
- Primero tokens y estructura, después secciones, un PR por sección.

## 8. Comunicación

- Idioma de trabajo con Iván: **español**.
- Al terminar: qué se ha hecho, cómo se ha verificado, qué queda pendiente y el enlace al PR.
- Ante la duda en algo irreversible o de gusto personal, **preguntar antes**.
