# Estructura del proyecto

Las rutas de esta guía son relativas a la raíz del proyecto. Los ejemplos muestran contenido posible y no deben confundirse con funcionalidades ya implementadas.

## Archivos de la raíz

| Archivo | Contenido y propósito |
| --- | --- |
| `astro.config.mjs` | Configura Astro; actualmente registra el plugin de Tailwind para Vite. |
| `package.json` | Nombre del proyecto, versiones de dependencias y comandos de npm. |
| `package-lock.json` | Versiones exactas de las dependencias instaladas; npm lo administra automáticamente. |
| `tsconfig.json` | Configuración de TypeScript basada en el modo estricto de Astro. |
| `README.md` | Información inicial y comandos del proyecto; actualmente conserva el texto de la plantilla de Astro. |
| `AGENTS.md` | Instrucciones de desarrollo para los agentes que trabajan en el proyecto. |
| `skills-lock.json` | Registro de habilidades instaladas para las herramientas de desarrollo. |
| `footer.txt`, `galery.txt` | Archivos de texto existentes; no forman parte de la estructura estándar de Astro. |

Ejemplo de comando definido en `package.json`:

```json
{ "scripts": { "dev": "astro dev", "build": "astro build" } }
```

## `public/`: archivos estáticos

Los archivos de esta carpeta se sirven directamente desde la raíz del sitio, sin necesidad de importarlos en el código.

| Ruta | Uso previsto |
| --- | --- |
| `public/images/hero/` | Imágenes de la sección principal. |
| `public/images/proyectos/` | Imágenes de proyectos. |
| `public/images/equipo/` | Fotografías del equipo. |
| `public/icons/` | Iconos estáticos. |
| `public/favicon.svg` | Icono del sitio mostrado por el navegador. |
| `public/robots.txt` | Instrucciones para rastreadores; actualmente está vacío. |

Por ejemplo, un archivo `public/images/hero/portada.jpg` se usaría así:

```astro
<img src="/images/hero/portada.jpg" alt="Descripción de la portada" />
```

Los archivos `.gitkeep` mantienen carpetas vacías en Git; no son contenido del sitio.

## `src/assets/`: recursos procesados

| Ruta | Uso previsto |
| --- | --- |
| `src/assets/fonts/` | Fuentes locales que se quieran procesar desde el proyecto. |
| `src/assets/images/` | Imágenes importadas por componentes y disponibles para las herramientas de Astro. |

Ejemplo, después de añadir una fuente local:

```css
@font-face {
  font-family: 'MiFuente';
  src: url('../assets/fonts/mi-fuente.woff2') format('woff2');
}
```

## `src/components/`: piezas reutilizables

Los siguientes archivos existen como marcadores de posición; todavía no implementan los elementos descritos.

| Archivo | Uso previsto |
| --- | --- |
| `Header.astro` | Encabezado y navegación principal. |
| `Footer.astro` | Pie de página con enlaces o datos de contacto. |
| `Button.astro` | Botón o enlace de acción reutilizable. |
| `SectionTitle.astro` | Encabezado reutilizable para una sección. |
| `ProjectCard.astro` | Presentación resumida de un proyecto. |
| `ServiceCard.astro` | Presentación resumida de un servicio. |
| `TestimonialCard.astro` | Presentación de un testimonio y su autor. |

Ejemplo de contenido posible para `SectionTitle.astro`:

```astro
---
interface Props { title: string; }
const { title } = Astro.props;
---
<h2>{title}</h2>
```

## `src/layouts/`: estructuras de página

Actualmente los tres archivos solo muestran su contenido mediante `<slot />`; todavía no incorporan una estructura de página completa.

| Archivo | Uso previsto |
| --- | --- |
| `BaseLayout.astro` | Documento HTML común, metadatos y estilos globales. |
| `LandingLayout.astro` | Estructura compartida para páginas de presentación. |
| `LegalLayout.astro` | Estructura compartida para contenido legal. |

Ejemplo de un layout base sencillo:

```astro
---
import '../styles/global.css';
const { title } = Astro.props;
---
<html lang="es">
  <head><meta charset="utf-8" /><title>{title}</title></head>
  <body><main><slot /></main></body>
</html>
```

## `src/sections/`: bloques de página

Estos archivos son marcadores de posición, pensados para combinar componentes en secciones más grandes.

| Archivo | Uso previsto |
| --- | --- |
| `Hero.astro` | Presentación principal. |
| `AboutPreview.astro` | Resumen de la empresa o equipo. |
| `ServicesPreview.astro` | Vista previa de servicios. |
| `ProjectsPreview.astro` | Vista previa de proyectos. |
| `Testimonials.astro` | Lista de testimonios. |
| `ContactCTA.astro` | Invitación a contactar. |
| `Newsletter.astro` | Bloque de suscripción al boletín; requiere integración para enviar datos. |

Ejemplo de contenido posible para `ContactCTA.astro`:

```astro
<section class="section container">
  <h2>¿Tienes un proyecto?</h2>
  <a class="button" href="/contacto">Hablemos</a>
</section>
```

## `src/content/` y `src/content.config.ts`: colecciones

`src/content.config.ts` registra las colecciones `projects`, `blog` y `testimonials` con cargadores de archivos Markdown. En Astro 7 la configuración se coloca en esa ruta, no en `src/content/config.ts`. Las carpetas están vacías y todavía no hay esquemas ni páginas conectadas a las colecciones.

| Carpeta | Contenido previsto |
| --- | --- |
| `src/content/projects/` | Entradas de proyectos en Markdown. |
| `src/content/blog/` | Artículos en Markdown. |
| `src/content/testimonials/` | Testimonios en Markdown. |

Ejemplo de `src/content/blog/primer-articulo.md`:

```markdown
---
title: Mi primer artículo
description: Una breve introducción.
---

Contenido del artículo.
```

Para mostrar las entradas es necesario consultarlas en una página, por ejemplo con `getCollection('blog')` de `astro:content`.

## `src/data/`: datos del sitio

Estos archivos TypeScript son marcadores vacíos; aún no exportan datos utilizables.

| Archivo | Uso previsto |
| --- | --- |
| `navigation.ts` | Enlaces de navegación. |
| `services.ts` | Información de servicios. |
| `socialLinks.ts` | Enlaces a redes sociales. |
| `siteConfig.ts` | Datos generales como el nombre y la descripción del sitio. |

Ejemplo de contenido posible para `navigation.ts`:

```ts
export const navigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Contacto', href: '/contacto' },
];
```

## `src/styles/`: estilos

| Archivo | Contenido |
| --- | --- |
| `global.css` | Importaciones y estilos generales de los elementos HTML. |
| `variables.css` | Variables compartidas de colores, tipografías y medidas. |
| `utilities.css` | Clases reutilizables y ajustes para pantallas pequeñas. |

Consulta [la guía de estilos](./estilos/README.md) para ver ejemplos y detalles.

## `src/pages/`: rutas

Astro convierte los archivos de esta carpeta en rutas. Las páginas existentes son ejemplos iniciales y todavía no utilizan los componentes y layouts descritos anteriormente.

| Archivo | Ruta o propósito |
| --- | --- |
| `index.astro` | `/`: página inicial; actualmente conserva la plantilla básica de Astro. |
| `nosotros/index.astro` | `/nosotros`: información sobre el equipo. |
| `servicios/index.astro` | `/servicios`: listado de servicios. |
| `servicios/[slug].astro` | Detalle de un servicio según su identificador. |
| `proyectos/index.astro` | `/proyectos`: listado de proyectos. |
| `proyectos/[slug].astro` | Detalle de un proyecto según su identificador. |
| `blog/index.astro` | `/blog`: listado de artículos. |
| `blog/[slug].astro` | Detalle de un artículo según su identificador. |
| `contacto.astro` | `/contacto`: información de contacto. |
| `faq.astro` | `/faq`: preguntas frecuentes. |
| `privacidad.astro` | `/privacidad`: política de privacidad. |
| `terminos.astro` | `/terminos`: términos y condiciones. |

Ejemplo de página sencilla:

```astro
---
import '../styles/global.css';
---
<html lang="es">
  <head><meta charset="utf-8" /><title>Contacto</title></head>
  <body><main class="container"><h1>Contacto</h1></main></body>
</html>
```

Para generar rutas dinámicas en un sitio estático, Astro necesita `getStaticPaths()` con los identificadores que se van a publicar. Las páginas `[slug].astro` existentes todavía necesitan configurarse para ello; además, sus importaciones actuales de `global.css` tienen una ruta relativa incorrecta y bloquean la compilación.
