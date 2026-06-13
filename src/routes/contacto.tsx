import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Image as ImageIcon, Mail, Mountain } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Minería 4.0 Chile" },
      { name: "description", content: "Contacta al equipo editorial de Minería 4.0 Chile." },
      { property: "og:title", content: "Contacto — Minería 4.0 Chile" },
      { property: "og:description", content: "Contacta al equipo editorial de Minería 4.0 Chile." },
    ],
  }),
  component: Contacto,
});

const contactos = [
  { nombre: "Iván Ignacio Urbina Rivera", email: "ivanignaciourbina@gmail.com" },
  { nombre: "Eduardo Aracena", email: "e.aracenacifuentes@gmail.com" },
  { nombre: "Marcelo Catril", email: "marcelocatril74@gmail.com" },
];

function Contacto() {
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
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="h-1 w-16 rounded-full bg-copper" />
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Contacto</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Escríbenos directamente a cualquiera de los integrantes del equipo editorial.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-400">
                  <ImageIcon className="h-10 w-10" />
                  <span className="text-xs font-medium uppercase tracking-wider">Foto {i + 1}</span>
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
            {contactos.map((c) => (
              <li key={c.email} className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-semibold text-slate-900">{c.nombre}</p>
                </div>
                <a
                  href={`mailto:${c.email}`}
                  className="inline-flex items-center gap-2 text-base font-medium text-copper hover:underline"
                >
                  <Mail className="h-4 w-4" /> {c.email}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="bg-slate-900 py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Minería 4.0 Chile · Diplomado de IA para Periodistas
      </footer>
    </div>
  );
}