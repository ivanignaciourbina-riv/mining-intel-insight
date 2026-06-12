## Objetivo
Agregar las 3 imágenes subidas a las tarjetas de "Últimas investigaciones" en la home y al hero de cada landing de reportaje.

## Mapeo de imágenes
- `primera_foto.jpeg` (Gabriela Mistral, camiones Codelco) → **El despertar de la minería autónoma** (`mineria-autonoma`)
- `segunda_foto.jpeg` (cabina con DMS, cero fatalidades) → **Seguridad de vanguardia contra la fatiga laboral** (`seguridad-fatiga`)
- `tercera_foto.jpeg` (tranque, gestión hídrica) → **Algoritmos al rescate del agua y la estabilidad de relaves** (`agua-relaves-ia`)

## Cambios

1. **Subir las 3 imágenes** vía `lovable-assets create` desde `/mnt/user-uploads/` y guardar los pointers en:
   - `src/assets/inv-mineria-autonoma.jpg.asset.json`
   - `src/assets/inv-seguridad-fatiga.jpg.asset.json`
   - `src/assets/inv-agua-relaves.jpg.asset.json`

2. **`src/routes/index.tsx`** — En el array `notas`, añadir un campo `imagen` por nota con el URL del asset. En cada tarjeta de `Investigaciones`, agregar arriba del contenido una imagen 16:9 (`aspect-video object-cover`) con bordes redondeados superiores, manteniendo el borde superior de color (copper/mineral) sobre la imagen. Conservar layout, tags, título, bajada, resumen y el link "Leer reportaje completo".

3. **`src/routes/investigacion.$slug.tsx`** — Añadir `imagen` al objeto `Nota` y, en el componente, renderizar un hero visual ancho (full-bleed dentro del contenedor del artículo, `aspect-[16/7]` aprox., `rounded-2xl`, `object-cover`) entre la bajada/metadatos y los párrafos del reportaje. También usar la misma URL como `og:image` y `twitter:image` en `head()` del leaf route para mejorar el preview al compartir.

## Notas técnicas
- Las imágenes se sirven vía CDN (`/__l5e/assets-v1/...`), no se commitean binarios.
- No se cambian rutas, slugs, navegación ni estilos del resto del sitio.
