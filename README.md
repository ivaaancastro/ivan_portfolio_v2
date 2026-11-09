# Portfolio de Iván Castro Roel

Portfolio personal: quién soy, experiencia, proyectos y una sección _Lifestyle_ con mis estadísticas de Strava.

**Web:** https://ivan-portfolio-v2.vercel.app

## Stack

- [Astro 7](https://astro.build): sitio estático; React solo en las partes interactivas (islas)
- [React 19](https://react.dev) + [Motion](https://motion.dev) para animaciones
- [Tailwind CSS 4](https://tailwindcss.com) con tokens de diseño en `src/styles/global.css`
- [Lucide](https://lucide.dev) para iconos
- API de [Strava](https://developers.strava.com) para los kilómetros del año (se consultan al compilar)
- Despliegue en [Vercel](https://vercel.com) desde `main`

## Requisitos

- **Node 24** (ver `.nvmrc`; con nvm: `nvm use`)
- npm 10 o superior

## Puesta en marcha

```sh
npm install
cp .env.example .env   # y rellena los valores (opcional, ver abajo)
npm run dev            # http://localhost:4321
```

### Variables de entorno

Solo hacen falta para mostrar los kilómetros reales de Strava. Sin ellas la web compila igual y muestra «...» en las estadísticas.

| Variable               | Descripción                                     |
| :--------------------- | :---------------------------------------------- |
| `STRAVA_CLIENT_ID`     | ID de la aplicación de Strava                   |
| `STRAVA_CLIENT_SECRET` | Secreto de la aplicación de Strava              |
| `STRAVA_REFRESH_TOKEN` | Refresh token con permiso de lectura del atleta |
| `STRAVA_ATHLETE_ID`    | ID del atleta (por defecto, el de Iván)         |

En producción están configuradas en las variables de entorno del proyecto de Vercel. **Nunca se suben al repositorio.**

Los kilómetros se consultan al compilar. Para que estén al día, el workflow [`strava-refresh.yml`](.github/workflows/strava-refresh.yml) relanza el despliegue de producción cada día a las 05:00 UTC mediante un _Deploy Hook_ de Vercel, guardado en el secreto `VERCEL_DEPLOY_HOOK_URL` de GitHub. También se puede lanzar a mano desde la pestaña _Actions_.

## Scripts

| Comando                | Qué hace                                         |
| :--------------------- | :----------------------------------------------- |
| `npm run dev`          | Servidor de desarrollo                           |
| `npm run build`        | Compila el sitio en `dist/`                      |
| `npm run preview`      | Sirve la compilación en local                    |
| `npm run format`       | Formatea con Prettier                            |
| `npm run format:check` | Comprueba el formato                             |
| `npm run lint`         | ESLint (TypeScript, Astro, accesibilidad, hooks) |
| `npm run check`        | Comprobación de tipos con `astro check`          |

## Estructura

```text
src/
├── components/   Secciones de la web (.astro y .jsx/.tsx) e iconos de marca
├── layouts/      Layout base (head, fondo, navegación móvil)
├── pages/        Rutas: / y /personal
├── styles/       global.css con los tokens de Tailwind
└── utils/        Cliente de la API de Strava
public/           Archivos servidos tal cual (CV en PDF, imágenes, favicon)
```

## Cómo se trabaja

- Todo cambio entra en `main` mediante **PR** con el CI en verde (`format:check`, `lint`, `check`, `build`).
- Normas completas: [AGENTS.md](AGENTS.md).
- Plan de mejora y estado actual: [ROADMAP.md](ROADMAP.md).
