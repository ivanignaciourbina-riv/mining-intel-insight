import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import heroBg from "@/assets/hero-mina.png.asset.json";
import logo from "@/assets/logo-mineria.jpeg.asset.json";
import imgAutonoma from "@/assets/inv-mineria-autonoma.jpg.asset.json";
import imgFatiga from "@/assets/inv-seguridad-fatiga.jpg.asset.json";
import imgAgua from "@/assets/inv-agua-relaves.jpg.asset.json";
import {
  TrendingUp,
  Droplets,
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Minería 4.0 Chile · IA en la Minería Chilena" },
      {
        name: "description",
        content:
          "Portal periodístico sobre Inteligencia Artificial aplicada a la minería en Chile: productividad, sustentabilidad y seguridad.",
      },
      { property: "og:title", content: "Minería 4.0 Chile · IA en la Minería Chilena" },
      {
        property: "og:description",
        content:
          "Investigaciones sobre cómo la IA transforma la minería chilena: camiones autónomos, monitoreo de fatiga y gestión hídrica.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Investigaciones", href: "#investigaciones" },
  { label: "Indicadores", href: "#indicadores" },
  { label: "Acerca de", href: "#acerca" },
];

const kpis = [
  {
    icon: TrendingUp,
    label: "Productividad",
    value: "+12.5%",
    desc: "Promedio en plantas con IA predictiva.",
    accent: "copper" as const,
  },
  {
    icon: Droplets,
    label: "Sustentabilidad",
    value: "85%",
    desc: "Agua recirculada mediante algoritmos.",
    accent: "mineral" as const,
  },
  {
    icon: ShieldCheck,
    label: "Seguridad",
    value: "-40%",
    desc: "Accidentes por fatiga y errores humanos.",
    accent: "copper" as const,
  },
];

const notas = [
  {
    slug: "mineria-autonoma",
    tag: "Automatización",
    accent: "copper" as const,
    imagen: imgAutonoma.url,
    title: "El despertar de la minería autónoma",
    bajada:
      "El hito histórico de la División Gabriela Mistral de Codelco que transformó la industria global.",
    contenido:
      "En mayo de 2008, la división Gabriela Mistral de Codelco se convirtió en el primer yacimiento a nivel mundial diseñado para operar al 100% con una flota de camiones de extracción autónomos utilizando el sistema AHS FrontRunner de Komatsu. Este hito demostró que los sistemas robotizados guiados por algoritmos podían operar de forma masiva y segura en entornos complejos, abriendo paso a la Minería 4.0 en el país.",
  },
  {
    slug: "seguridad-fatiga",
    tag: "Seguridad",
    accent: "mineral" as const,
    imagen: imgFatiga.url,
    title: "Seguridad de vanguardia contra la fatiga laboral",
    bajada:
      "Sistemas de visión artificial reducen la exposición al riesgo en las cabinas de los camiones de extracción.",
    contenido:
      "En faenas de gran escala como El Teniente o Los Bronces, se aplican Sistemas de Monitoreo de Fatiga y Somnolencia (DMS) directamente en las cabinas de los camiones CAEX bajo el estándar de Codelco. Estos sistemas usan cámaras infrarrojas y algoritmos de visión artificial para detectar micro-sueños o distracciones, emitiendo alertas acústicas y mecánicas para activar relevos y alcanzar el objetivo de cero fatalidades.",
  },
  {
    slug: "agua-relaves-ia",
    tag: "Sustentabilidad",
    accent: "copper" as const,
    imagen: imgAgua.url,
    title: "Algoritmos al rescate del agua y la estabilidad de relaves",
    bajada:
      "La Inteligencia Artificial se vuelve obligatoria frente al escenario de estrés hídrico y cambio climático.",
    contenido:
      "Ante la escasez hídrica en el norte y centro de Chile, la IA optimiza el balance de agua en tiempo real y la recirculación del recurso mediante gemelos digitales en plantas concentradoras. Además, mediante iniciativas como el \"Programa Tranque\", se realiza una fusión de datos satelitales e IoT para el monitoreo milimétrico de los muros de depósitos, previniendo filtraciones de manera analítica.",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2 font-bold text-slate-900">
          <img src={logo.url} alt="Minería 4.0 Chile" className="h-8 w-8 object-contain" />
          <span className="text-base sm:text-lg">Minería 4.0 Chile</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-copper"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#investigaciones"
            className="rounded-md bg-copper px-4 py-2 text-sm font-semibold text-copper-foreground shadow-sm transition-colors hover:bg-copper/90"
          >
            Ver portal
          </a>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-surface"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg.url})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 lg:from-white/95 lg:via-white/70 lg:to-transparent" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-mineral shadow-sm ring-1 ring-slate-200">
            Edición especial · 2026
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Inteligencia Artificial en la <span className="text-copper">minería chilena</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">
            Investigaciones, datos e historias sobre cómo los algoritmos están redefiniendo
            la productividad, la seguridad y el uso del agua en las grandes faenas del país.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#investigaciones"
              className="inline-flex items-center gap-2 rounded-md bg-copper px-5 py-3 text-sm font-semibold text-copper-foreground shadow-sm transition-colors hover:bg-copper/90"
            >
              Explorar investigaciones <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#indicadores"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors hover:bg-slate-50"
            >
              Ver indicadores
            </a>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:block">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-copper/20 to-mineral/20 blur-2xl" />
            <div className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">Panel en vivo</p>
                  <p className="text-sm font-semibold text-slate-900">Operación autónoma</p>
                </div>
                <span className="rounded-full bg-mineral/10 px-2.5 py-1 text-xs font-semibold text-mineral">
                  Activo
                </span>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-surface p-4">
                  <dt className="text-xs text-slate-500">Camiones autónomos</dt>
                  <dd className="mt-1 text-2xl font-bold text-slate-900">186</dd>
                </div>
                <div className="rounded-lg bg-surface p-4">
                  <dt className="text-xs text-slate-500">Toneladas / hora</dt>
                  <dd className="mt-1 text-2xl font-bold text-slate-900">12.4k</dd>
                </div>
                <div className="rounded-lg bg-surface p-4">
                  <dt className="text-xs text-slate-500">Alertas DMS</dt>
                  <dd className="mt-1 text-2xl font-bold text-copper">23</dd>
                </div>
                <div className="rounded-lg bg-surface p-4">
                  <dt className="text-xs text-slate-500">Agua recirculada</dt>
                  <dd className="mt-1 text-2xl font-bold text-mineral">85%</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Kpis() {
  return (
    <section id="indicadores" className="mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {kpis.map((k) => {
          const Icon = k.icon;
          const accentBg = k.accent === "copper" ? "bg-copper/10" : "bg-mineral/10";
          const accentText = k.accent === "copper" ? "text-copper" : "text-mineral";
          return (
            <div
              key={k.label}
              className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className={`grid h-12 w-12 place-items-center rounded-lg ${accentBg}`}>
                  <Icon className={`h-6 w-6 ${accentText}`} />
                </div>
                <span className={`text-2xl font-extrabold ${accentText}`}>{k.value}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{k.label}</h3>
              <p className="mt-1 text-sm text-slate-600">{k.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Investigaciones() {
  return (
    <section id="investigaciones" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-mineral">
            Periodismo de datos
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Últimas investigaciones
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Tres reportajes seleccionados sobre el impacto real de la IA en yacimientos chilenos.
          </p>
        </div>
        <a
          href="#"
          className="hidden text-sm font-semibold text-copper hover:underline sm:inline-flex"
        >
          Ver archivo completo →
        </a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {notas.map((n) => {
          const border = n.accent === "copper" ? "before:bg-copper" : "before:bg-mineral";
          const tagColor =
            n.accent === "copper"
              ? "bg-copper/10 text-copper"
              : "bg-mineral/10 text-mineral";
          return (
            <article
              key={n.title}
              className={`relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-md before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-1 ${border}`}
            >
              <div className="aspect-video w-full overflow-hidden bg-slate-100">
                <img
                  src={n.imagen}
                  alt={n.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
              <span
                className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-semibold ${tagColor}`}
              >
                {n.tag}
              </span>
              <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900">
                {n.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-slate-600">{n.bajada}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">{n.contenido}</p>
              <Link
                to="/investigacion/$slug"
                params={{ slug: n.slug }}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-copper"
              >
                Leer reportaje completo <ArrowRight className="h-4 w-4" />
              </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="acerca" className="bg-surface py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Un portal periodístico sobre la nueva minería chilena
          </h2>
          <p className="mt-4 text-slate-600">
            Minería 4.0 Chile reúne reportajes, datos y entrevistas sobre la transformación
            digital de la gran minería: desde camiones autónomos en el desierto hasta gemelos
            digitales que cuidan el agua en plantas concentradoras.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { k: "Faenas analizadas", v: "14" },
            { k: "Reportajes publicados", v: "38" },
            { k: "Fuentes verificadas", v: "120+" },
            { k: "Años de cobertura", v: "5" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
            >
              <p className="text-3xl font-extrabold text-copper">{s.v}</p>
              <p className="mt-1 text-sm text-slate-600">{s.k}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 text-white">
            <img src={logo.url} alt="Minería 4.0 Chile" className="h-8 w-8 object-contain" />
            <span className="text-lg font-bold">Minería 4.0 Chile</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-slate-400">
            Proyecto periodístico desarrollado en el marco del Diplomado de IA para
            Periodistas. Reportajes independientes sobre minería e inteligencia artificial.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Secciones</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-copper">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Institucional</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:text-copper">Contacto</a></li>
            <li><a href="#" className="hover:text-copper">Política editorial</a></li>
            <li><a href="#" className="hover:text-copper">Términos</a></li>
            <li><a href="#" className="hover:text-copper">Créditos</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Minería 4.0 Chile. Todos los derechos reservados.</p>
          <p>Diplomado de IA para Periodistas</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Investigaciones />
        <Kpis />
        <About />
      </main>
      <Footer />
    </div>
  );
}
