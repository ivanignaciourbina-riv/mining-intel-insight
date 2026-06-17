import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import heroBg from "@/assets/hero-panoramic.jpg.asset.json";
import logo from "@/assets/logo-copper.png.asset.json";
import panelVideo from "@/assets/panel-innovacion.mp4.asset.json";
import imgAutonoma from "@/assets/inv-mineria-autonoma.jpg.asset.json";
import imgFatiga from "@/assets/inv-seguridad-fatiga.jpg.asset.json";
import imgAgua from "@/assets/inv-agua-relaves-nueva";
import audioNuevaEtapa from "@/assets/nueva-etapa-mineria.mp3.asset.json";
import audioIaMineria from "@/assets/ia-mineria-chilena.mp3.asset.json";
import {
  TrendingUp,
  Droplets,
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
  Truck,
  Activity,
  LineChart,
  Cpu,
  Radio,
  Network,
  Boxes,
  Sparkles,
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
  { label: "Trayectoria", href: "#trayectoria" },
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
    imagen: imgAgua,
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
          <img src={logo.url} alt="Minería 4.0 Chile" className="h-12 w-12 object-contain" />
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
            Un micrositio periodístico que explora cómo la inteligencia artificial, la
            automatización y la analítica de datos están transformando las faenas del
            cobre en el desierto de Atacama y la cordillera de los Andes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#investigaciones"
              className="group inline-flex items-center gap-2 rounded-md bg-copper px-5 py-3 text-sm font-semibold text-copper-foreground shadow-sm transition-all hover:bg-copper/90 hover:shadow-md hover:-translate-y-0.5"
            >
              Explorar innovación minera
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
    <section className="mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {kpis.map((k) => {
          const Icon = k.icon;
          const accentBg = k.accent === "copper" ? "bg-copper/10" : "bg-mineral/10";
          const accentText = k.accent === "copper" ? "text-copper" : "text-mineral";
          return (
            <div
              key={k.label}
              className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-slate-300"
            >
              <div className="flex items-start justify-between">
                <div className={`grid h-12 w-12 place-items-center rounded-lg ${accentBg} transition-transform duration-300 group-hover:scale-110`}>
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
    <AboutInner />
  );
}

const timeline = [
  {
    year: "2008",
    title: "División Gabriela Mistral y autonomía minera",
    desc: "Codelco estrena el primer yacimiento del mundo diseñado para operar al 100% con flota de camiones autónomos.",
    icon: Truck,
  },
  {
    year: "2015",
    title: "Expansión de sistemas predictivos",
    desc: "Modelos de mantenimiento predictivo y analítica avanzada se masifican en plantas concentradoras.",
    icon: LineChart,
  },
  {
    year: "2020",
    title: "Centros integrados de operación",
    desc: "Salas de control remotas consolidan datos de faena, planta y logística en tiempo real.",
    icon: Radio,
  },
  {
    year: "2023",
    title: "Gemelos digitales",
    desc: "Réplicas virtuales de procesos permiten simular escenarios hídricos y operacionales antes de ejecutarlos.",
    icon: Network,
  },
  {
    year: "2026",
    title: "IA generativa y minería inteligente",
    desc: "Copilotos de IA asisten a operadores, geólogos y mantenedores con recomendaciones contextuales.",
    icon: Sparkles,
  },
];

function Timeline() {
  return (
    <section id="trayectoria" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-mineral">
            Trayectoria
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Evolución de la IA en la minería chilena
          </h2>
          <p className="mt-3 text-slate-600">
            Casi dos décadas de hitos que llevaron al cobre chileno desde la
            automatización pionera hasta la inteligencia artificial generativa.
          </p>
        </div>

        {/* Mobile: vertical line */}
        <ol className="relative mt-10 space-y-8 border-l border-slate-200 pl-6 md:hidden">
          {timeline.map((t) => {
            const Icon = t.icon;
            return (
              <li key={t.year} className="group relative">
                <span className="absolute -left-[34px] grid h-7 w-7 place-items-center rounded-full bg-copper text-white shadow-sm ring-4 ring-white transition-transform group-hover:scale-110">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <p className="text-sm font-bold text-copper">{t.year}</p>
                <h3 className="mt-1 text-base font-semibold text-slate-900">{t.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{t.desc}</p>
              </li>
            );
          })}
        </ol>

        {/* Desktop: horizontal */}
        <div className="relative mt-14 hidden md:block">
          <div className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <ol className="relative grid grid-cols-5 gap-4">
            {timeline.map((t) => {
              const Icon = t.icon;
              return (
                <li key={t.year} className="group flex flex-col items-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white ring-2 ring-copper text-copper shadow-sm transition-all duration-300 group-hover:bg-copper group-hover:text-white group-hover:shadow-md group-hover:-translate-y-1">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-lg font-extrabold text-copper">{t.year}</p>
                  <h3 className="mt-1 text-sm font-semibold leading-snug text-slate-900">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{t.desc}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

const dashboard = [
  {
    icon: Truck,
    label: "Operaciones autónomas",
    desc: "Flotas de camiones de extracción guiadas por algoritmos.",
    status: "En faena",
  },
  {
    icon: ShieldCheck,
    label: "Seguridad operacional",
    desc: "Visión artificial para fatiga, distracciones y zonas de exclusión.",
    status: "Monitoreo 24/7",
  },
  {
    icon: Droplets,
    label: "Gestión hídrica inteligente",
    desc: "Optimización del balance y recirculación de agua en plantas.",
    status: "Tiempo real",
  },
  {
    icon: Activity,
    label: "Monitoreo en tiempo real",
    desc: "Telemetría unificada de equipos, procesos y energía.",
    status: "Streaming",
  },
  {
    icon: Cpu,
    label: "Analítica predictiva",
    desc: "Modelos que anticipan fallas, leyes y comportamiento mineral.",
    status: "Modelos activos",
  },
  {
    icon: Boxes,
    label: "Gemelos digitales",
    desc: "Réplicas virtuales para simular operaciones antes de ejecutarlas.",
    status: "Piloto",
  },
];

function Dashboard() {
  return (
    <section id="indicadores" className="bg-surface py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-mineral">
                Indicadores
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Panel de innovación minera
              </h2>
              <p className="mt-2 max-w-2xl text-slate-600">
                Dimensiones clave que monitorea la nueva minería chilena. Los valores
                específicos se incorporarán a medida que se publiquen datos verificados.
              </p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-mineral ring-1 ring-slate-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-mineral" />
              Datos de referencia
            </span>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {dashboard.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.label}
                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-copper/40"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-copper/0 via-copper to-mineral opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-copper/10 text-copper transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-mineral/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-mineral">
                    {d.status}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-900">{d.label}</h3>
                <p className="mt-1 text-sm text-slate-600">{d.desc}</p>
                <div className="mt-5 flex items-end gap-1" aria-hidden>
                  {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                    <span
                      key={i}
                      className="w-2 rounded-sm bg-slate-200 transition-all duration-500 group-hover:bg-copper/70"
                      style={{ height: `${h * 0.35}px` }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
          </div>
        </div>
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-2xl bg-slate-900 shadow-lg ring-1 ring-slate-200">
            <video
              src={panelVideo.url}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Video en silencio por defecto. Activa el sonido desde los controles del reproductor.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutInner() {
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
            <img src={logo.url} alt="Minería 4.0 Chile" className="h-12 w-12 object-contain" />
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
            <li><a href="/quienes-somos" className="hover:text-copper">Quiénes somos</a></li>
            <li><a href="/como-investigamos" className="hover:text-copper">Cómo realizamos la investigación</a></li>
            <li><a href="/contacto" className="hover:text-copper">Contacto</a></li>
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
        <Timeline />
        <Dashboard />
        <About />
      </main>
      <Footer />
    </div>
  );
}
