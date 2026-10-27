# Organización de estilos

Los estilos del proyecto están en `src/styles/`. Para utilizarlos juntos, importa `global.css` desde una página o layout de Astro:

```astro
---
import '../styles/global.css';
---
```

La ruta relativa depende de dónde esté el archivo que realiza la importación. `global.css` ya importa `variables.css` y `utilities.css`, por lo que no es necesario importarlos por separado.

## `variables.css`

Contiene los valores compartidos del diseño, como colores, tipografías, el ancho máximo del contenido y los radios de las esquinas. Cambiar una variable actualiza los lugares donde se usa.

Ejemplo:

```css
:root {
  --color-accent: #d9ff4f;
  --font-body: 'DM Sans', Arial, sans-serif;
  --container: 1180px;
}
```

## `global.css`

Contiene las importaciones de fuentes, Tailwind y los demás archivos de estilos. También define estilos generales para elementos HTML, estados de foco y preferencias de movimiento reducido.

Ejemplo:

```css
body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-ink);
  font-family: var(--font-body);
}
```

## `utilities.css`

Contiene clases reutilizables para distribuir y presentar contenido: contenedores, secciones, cuadrículas, botones, tarjetas y el enlace para saltar al contenido. Incluye ajustes para pantallas pequeñas.

Ejemplo:

```css
.text-muted {
  color: var(--color-muted);
}

.grid {
  display: grid;
  gap: 1.5rem;
}
```

Estas clases se pueden usar en una página o componente:

```astro
<section class="section container">
  <p class="text-muted">Texto secundario</p>
</section>
```
