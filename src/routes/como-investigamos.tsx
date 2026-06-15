import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mountain } from "lucide-react";
import iaMineriaAsset from "@/assets/ia-mineria.jpg.asset.json";

export const Route = createFileRoute("/como-investigamos")({
  head: () => ({
    meta: [
      { title: "Cómo realizamos la investigación — Minería 4.0 Chile" },
      { name: "description", content: "Metodología, herramientas y proceso editorial detrás del portal Minería 4.0 Chile." },
      { property: "og:title", content: "Cómo realizamos la investigación — Minería 4.0 Chile" },
      { property: "og:description", content: "Metodología, herramientas y proceso editorial detrás del portal Minería 4.0 Chile." },
    ],
  }),
  component: ComoInvestigamos,
});

const parrafos = [
  "El proyecto comenzó con una exhaustiva recopilación de datos técnicos y estadísticos sobre la Minería 4.0 en el país. Utilizamos la herramienta de inteligencia de vanguardia Deep Research de Gemini, junto a una investigación liderada por la plataforma ChatGPT.",
  "Toda la información recopilada por el equipo se consolidó de manera rigurosa en tres documentos base de soporte. Estos archivos contenían valiosos datos sobre la automatización de faenas, la seguridad de los trabajadores y la sustentabilidad ambiental. El objetivo final era transformar este bruto analítico en un portal periodístico de alto impacto visual.",
  "El diseño de la interfaz rompió los esquemas tradicionales al inspirarse en la estructura del Banco de Chile. Conceptualizamos una distribución moderna con menús limpios, tarjetas de KPI superiores y una grilla principal de contenidos. Esta arquitectura web fue pensada estratégicamente para dinamizar la lectura y mejorar la experiencia de usuario.",
  "Para la construcción del sitio, co-creamos un prompt maestro de programación en lenguaje React y librerías de Tailwind. Esta instrucción técnica fue estructurada detalladamente para ser ejecutada de forma directa en la plataforma no-code Lovable. El código incluyó la paleta de colores corporativos y los efectos visuales de los recuadritos.",
  "Finalmente, el proceso se complementó con la generación de un recurso gráfico cinematográfico diseñado a la medida de la web. Creamos una imagen panorámica de alta definición para el fondo del encabezado principal que retrata la cordillera nortina. Así se consolidó el desarrollo integral del blog para el Diplomado de IA para periodistas.",
];

function ComoInvestigamos() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 font-bold text-slate-900">
            <Mountain className="h-6 w-6 text-copper" />
            <span className="text-base sm:text-lg">Minería 4.0 Chile</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-copper">
            <ArrowLeft className="h-4 w-4" /> Volver al portal
          </Link>
        </div>
      </header>

      <main className="pt-16">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="h-1 w-16 rounded-full bg-mineral" />
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Cómo realizamos la investigación
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Metodología, herramientas de IA y proceso editorial detrás del portal Minería 4.0 Chile.
          </p>

          <figure className="mt-10 overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <img
              src={iaMineriaAsset.url}
              alt="Inteligencia artificial aplicada a la minería: tablet con dashboard de camión autónomo en faena"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </figure>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-slate-700 sm:text-lg">
            {parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      </main>

      <footer className="bg-slate-900 py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Minería 4.0 Chile · Diplomado de IA para Periodistas
      </footer>
    </div>
  );
}