## Objetivo
Agregar a cada landing de reportaje (`/investigacion/$slug`) una versión hablada en español latino del texto principal, narrada con voz masculina (Liam), para mejorar accesibilidad e inclusión.

## Enfoque
Generar el audio server-side con **ElevenLabs Text-to-Speech** (modelo `eleven_multilingual_v2`, voz Liam `TX3LPaxmHKxFdv7VOQHJ`) y exponer un endpoint HTTP que el reproductor `<audio>` consume directamente.

## Cambios

1. **Conector ElevenLabs**
   - Vincular el conector estándar de ElevenLabs para tener `ELEVENLABS_API_KEY` disponible en el servidor.

2. **Compartir datos de notas**: `src/lib/notas.ts`
   - Mover el diccionario `notas` y el tipo `Nota` desde `src/routes/investigacion.$slug.tsx` a este módulo para que también lo use el endpoint TTS.
   - La ruta `investigacion.$slug.tsx` lo re-importa sin cambiar su comportamiento.

3. **Endpoint server**: `src/routes/api/public/tts.$slug.ts`
   - Handler GET que recibe `slug` por path, busca la nota y arma el texto = `bajada` + párrafos.
   - Llama a `https://api.elevenlabs.io/v1/text-to-speech/TX3LPaxmHKxFdv7VOQHJ?output_format=mp3_44100_128` con `model_id: eleven_multilingual_v2` y voice_settings por defecto (estabilidad 0.5, similarity 0.75, speed 1.0).
   - Devuelve `audio/mpeg` con `Cache-Control: public, max-age=31536000, immutable` para que el navegador cachee el audio por nota.
   - Si la API falla, responde 502 con mensaje claro.

4. **Reproductor en la nota** (`investigacion.$slug.tsx`)
   - Justo después de la metadata (autor/fecha/lectura) y antes de la imagen hero, agregar un bloque "Escucha esta nota":
     - Ícono `Headphones` (lucide) + título "Versión hablada".
     - Subtítulo: "Narración en español generada con IA para una lectura accesible."
     - `<audio controls preload="none" src={`/api/public/tts/${slug}`} className="w-full" aria-label="Versión hablada del reportaje">`.
   - Estilo consistente con el resto (borde, padding, color de acento de la nota).

## Notas técnicas
- Voz: **Liam** (`TX3LPaxmHKxFdv7VOQHJ`), masculina, suena natural en español con `eleven_multilingual_v2`.
- Solo se modifican las landings de noticias; las páginas institucionales (`/quienes-somos`, `/contacto`, `/como-investigamos`) no llevan reproductor.
- Costo: cada cache-miss genera ~600–900 caracteres por nota en ElevenLabs. El cache HTTP del navegador evita regeneraciones por usuario.
