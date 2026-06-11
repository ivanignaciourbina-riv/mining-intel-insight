import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Mountain } from "lucide-react";

type Nota = {
  tag: string;
  accent: "copper" | "mineral";
  title: string;
  bajada: string;
  autor: string;
  fecha: string;
  lectura: string;
  parrafos: string[];
};

const notas: Record<string, Nota> = {
  "mineria-autonoma": {
    tag: "Automatización",
    accent: "copper",
    title: "El despertar de la minería autónoma",
    bajada:
      "El hito histórico de la División Gabriela Mistral de Codelco que transformó la industria global.",
    autor: "Redacción Minería 4.0",
    fecha: "12 de marzo de 2026",
    lectura: "8 min de lectura",
    parrafos: [
      "En mayo de 2008, la división Gabriela Mistral de Codelco se convirtió en el primer yacimiento a nivel mundial diseñado para operar al 100% con una flota de camiones de extracción autónomos, utilizando el sistema AHS FrontRunner de Komatsu. El proyecto marcó un antes y un después en la forma en que la gran minería entiende la operación de sus rajos.",
      "La promesa inicial era simple: reducir la exposición humana a entornos extremos, estandarizar los ciclos de carguío y transporte y, sobre todo, aumentar la disponibilidad mecánica de los equipos. Lo que vino después superó esa expectativa. Los algoritmos de ruteo, combinados con sensores LIDAR y GPS diferencial, permitieron que decenas de camiones de más de 300 toneladas se coordinaran sin intervención directa en cabina.",
      "Hoy, casi dos décadas después, el modelo de Gabriela Mistral se replica en faenas de todo el país. Codelco, BHP y Antofagasta Minerals avanzan en planes de autonomía para sus operaciones más relevantes, mientras los centros integrados de operaciones en Santiago monitorean en tiempo real lo que ocurre a más de 1.500 kilómetros de distancia.",
      "El desafío que viene no es tecnológico, sino laboral y social: cómo reconvertir a miles de operadores en analistas de datos, técnicos de mantenimiento predictivo y controladores remotos. La minería autónoma chilena, pionera del mundo, vuelve a estar obligada a liderar también esa transición.",
    ],
  },
  "seguridad-fatiga": {
    tag: "Seguridad",
    accent: "mineral",
    title: "Seguridad de vanguardia contra la fatiga laboral",
    bajada:
      "Sistemas de visión artificial reducen la exposición al riesgo en las cabinas de los camiones de extracción.",
    autor: "Redacción Minería 4.0",
    fecha: "28 de abril de 2026",
    lectura: "7 min de lectura",
    parrafos: [
      "En faenas de gran escala como El Teniente o Los Bronces, los Sistemas de Monitoreo de Fatiga y Somnolencia (DMS) ya son parte del estándar operacional. Cámaras infrarrojas instaladas directamente en las cabinas de los camiones CAEX siguen, segundo a segundo, los micro-movimientos del rostro y los ojos del operador.",
      "Cuando el algoritmo detecta un parpadeo prolongado, una caída de cabeza o una distracción atípica, dispara una alerta acústica y mecánica en la cabina. Al mismo tiempo, la señal viaja al centro integrado de operaciones, donde un supervisor decide si activar un relevo inmediato.",
      "La evidencia recogida por Codelco indica que los eventos críticos asociados a fatiga han disminuido de forma sostenida desde la masificación del DMS. El objetivo declarado es claro: cero fatalidades, una meta que la industria persigue desde hace más de una década.",
      "Sin embargo, las organizaciones sindicales advierten sobre el riesgo de una vigilancia excesiva. Definir qué datos biométricos se almacenan, durante cuánto tiempo y con qué fines analíticos será una de las discusiones laborales más importantes de los próximos años.",
    ],
  },
  "agua-relaves-ia": {
    tag: "Sustentabilidad",
    accent: "copper",
    title: "Algoritmos al rescate del agua y la estabilidad de relaves",
    bajada:
      "La Inteligencia Artificial se vuelve obligatoria frente al escenario de estrés hídrico y cambio climático.",
    autor: "Redacción Minería 4.0",
    fecha: "20 de mayo de 2026",
    lectura: "9 min de lectura",
    parrafos: [
      "El estrés hídrico que vive el norte y el centro de Chile ha empujado a la gran minería a repensar por completo su relación con el agua. Los gemelos digitales de plantas concentradoras permiten hoy simular en tiempo real el balance hídrico de toda una operación y decidir, automáticamente, cuándo recircular, cuándo reponer y cuándo detener procesos.",
      "Los resultados son tangibles: varias compañías ya reportan tasas de recirculación cercanas al 85%, una cifra impensable hace apenas una década. La diferencia la hacen los modelos de IA que aprenden del histórico operacional y anticipan desviaciones antes de que ocurran.",
      "En paralelo, iniciativas como el Programa Tranque combinan imágenes satelitales, sensores IoT instalados en los muros y modelos geotécnicos para vigilar de forma milimétrica los depósitos de relaves. Cualquier deformación anómala genera una alerta temprana que se cruza con datos sísmicos y meteorológicos.",
      "El mensaje de fondo es contundente: en un país donde la escasez hídrica y los riesgos climáticos son la nueva normalidad, la inteligencia artificial dejó de ser un diferenciador competitivo para convertirse en una licencia social y ambiental para operar.",
    ],
  },
};

export const Route = createFileRoute("/investigacion/$slug")({
  head: ({ params }) => {
    const nota = notas[params.slug];
    const title = nota
      ? `${nota.title} · Minería 4.0 Chile`
      : "Investigación · Minería 4.0 Chile";
    const description = nota?.bajada ?? "Reportaje del portal Minería 4.0 Chile.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  loader: ({ params }) => {
    if (!notas[params.slug]) throw notFound();
    return null;
  },
  component: InvestigacionPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 text-center">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900">Reportaje no encontrado</h1>
        <p className="mt-3 text-slate-600">La investigación que buscas no está disponible.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-md bg-copper px-5 py-3 text-sm font-semibold text-copper-foreground">
          Volver al portal
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 text-center">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900">No pudimos cargar el reportaje</h1>
        <button onClick={reset} className="mt-6 rounded-md bg-copper px-5 py-3 text-sm font-semibold text-copper-foreground">
          Reintentar
        </button>
      </div>
    </div>
  ),
});

function InvestigacionPage() {
  const { slug } = Route.useParams();
  const nota = notas[slug]!;
  const tagColor =
    nota.accent === "copper"
      ? "bg-copper/10 text-copper"
      : "bg-mineral/10 text-mineral";
  const accentBar = nota.accent === "copper" ? "bg-copper" : "bg-mineral";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 font-bold text-slate-900">
            <Mountain className="h-6 w-6 text-copper" />
            <span className="text-base sm:text-lg">Minería 4.0 Chile</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-copper"
          >
            <ArrowLeft className="h-4 w-4" /> Volver al portal
          </Link>
        </div>
      </header>

      <main className="pt-16">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className={`h-1 w-16 rounded-full ${accentBar}`} />
          <span
            className={`mt-6 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${tagColor}`}
          >
            {nota.tag}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            {nota.title}
          </h1>
          <p className="mt-5 text-lg text-slate-600">{nota.bajada}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
            <span>{nota.autor}</span>
            <span aria-hidden>·</span>
            <span>{nota.fecha}</span>
            <span aria-hidden>·</span>
            <span>{nota.lectura}</span>
          </div>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-slate-700 sm:text-lg">
            {nota.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-14 border-t border-slate-200 pt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-copper hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Volver a todas las investigaciones
            </Link>
          </div>
        </article>
      </main>

      <footer className="bg-slate-900 py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Minería 4.0 Chile · Diplomado de IA para Periodistas
      </footer>
    </div>
  );
}