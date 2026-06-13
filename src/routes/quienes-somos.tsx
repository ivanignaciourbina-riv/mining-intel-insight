import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mountain } from "lucide-react";
import imgIvan from "@/assets/Ivan_Urbina_minero.png";
import imgEduardo from "@/assets/Eduardo_Aracena_minero.png";
import imgMarcelo from "@/assets/Marcelo_Catril_minero.png";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes somos — Minería 4.0 Chile" },
      { name: "description", content: "Equipo editorial y de desarrollo del portal Minería 4.0 Chile." },
      { property: "og:title", content: "Quiénes somos — Minería 4.0 Chile" },
      { property: "og:description", content: "Equipo editorial y de desarrollo del portal Minería 4.0 Chile." },
    ],
  }),
  component: QuienesSomos,
});

const equipo = [
  {
    nombre: "Iván Ignacio Urbina Rivera",
    rol: "Director de Contenidos y Estrategia de UX/UI",
    imagen: imgIvan,
  },
  {
    nombre: "Eduardo Aracena",
    rol: "Editor de Investigación y Analítica de Datos",
    imagen: imgEduardo,
  },
  {
    nombre: "Marcelo Catril",
    rol: "Desarrollador Frontend y Diseñador de Recursos Visuales",
    imagen: imgMarcelo,
  },
];

function QuienesSomos() {
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
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="h-1 w-16 rounded-full bg-copper" />
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Quiénes somos
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Un equipo multidisciplinario que une periodismo de investigación, analítica de datos y diseño digital para
            contar la transformación de la minería chilena.
          </p>

          <div className="mt-12 space-y-12">
            {equipo.map((p) => (
              <article
                key={p.nombre}
                className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center"
              >
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{p.nombre}</h2>
                  <p className="mt-2 text-base text-copper font-medium sm:text-lg">{p.rol}</p>
                </div>
                <div className="mx-auto w-full max-w-[240px] sm:max-w-[260px] lg:mx-0">
                  <div className="aspect-[9/16] overflow-hidden rounded-2xl ring-1 ring-slate-200">
                    <img
                      src={p.imagen}
                      alt={p.nombre}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Minería 4.0 Chile · Diplomado de IA para Periodistas
      </footer>
    </div>
  );
}