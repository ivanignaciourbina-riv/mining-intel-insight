# Minería 4.0 Chile — Blog periodístico corporativo

SPA de una sola página inspirada en la landing de Banco de Chile, con estética dashboard limpio, paleta blanca/gris claro con acentos cobre y verde mineral, tipografía Inter.

## Alcance

Reemplazar la home (`src/routes/index.tsx`) por una landing completa con todas las secciones especificadas, totalmente responsiva y con metadata SEO.

## Estructura de secciones

1. **Navbar fijo** — fondo blanco, sombra sutil, logo "⛰️ Minería 4.0 Chile" a la izquierda, enlaces a Inicio / Investigaciones / Indicadores / Acerca de a la derecha. Menú hamburguesa en mobile.
2. **Hero** — banner ancho con fondo gris claro + acento cobre, titular periodístico fuerte ("Inteligencia Artificial en la Minería Chilena"), bajada y CTA "Explorar investigaciones" que scrollea a la grilla.
3. **KPIs / Destacados** — fila de 3 tarjetas tipo "accesos directos": Productividad (+12.5%), Sustentabilidad (85% agua recirculada), Seguridad (-40% accidentes), con iconos Lucide (TrendingUp, Droplets, ShieldCheck).
4. **Últimas Investigaciones** — grid de 3 columnas (1 col mobile, 2 tablet, 3 desktop). Cada tarjeta: borde superior de 3px (cobre o verde mineral alternado), bordes redondeados, `shadow-sm`, hover con `-translate-y-1` y `shadow-md`. Contiene título, bajada y contenido corto (texto íntegro provisto por el usuario).
5. **Footer** — fondo gris oscuro, enlaces secundarios (Inicio, Investigaciones, Contacto, Política), créditos "Diplomado de IA para Periodistas".

## Detalles técnicos

- **Tokens de diseño** en `src/styles.css` (`@theme inline`):
  - `--background: #ffffff`
  - `--muted: #f1f5f9` (gris claro)
  - `--accent-copper: #d97757`
  - `--accent-mineral: #4f9186`
  - `--foreground: #0f172a`
  - Mapeo a utilidades Tailwind (`bg-copper`, `text-mineral`, etc.)
- **Tipografía Inter**: cargar vía `<link>` a Google Fonts en `src/routes/__root.tsx` (no `@import` en CSS, según reglas Tailwind v4) y registrar `--font-sans: "Inter", ...` en `@theme`.
- **SEO** en `index.tsx`: title, description, og:title, og:description específicos al tema.
- **Iconos** desde `lucide-react`.
- **Componentes** inline en `index.tsx` (Navbar, Hero, KPIs, Grid, Footer) — landing simple, no requiere splitting adicional.
- **Responsivo**: grid con `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, navbar colapsable en mobile, paddings fluidos.

## Archivos a modificar

- `src/routes/index.tsx` — reemplazo completo con la landing.
- `src/styles.css` — agregar tokens cobre/mineral y `--font-sans`.
- `src/routes/__root.tsx` — agregar `<link>` a Inter en Google Fonts.

No se requiere backend ni rutas adicionales.
