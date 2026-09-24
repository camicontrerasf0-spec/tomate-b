/* ═══════════════════════════════════════════════════════════════════
   EL TOMATE MECÁNICO — LANDING PAGE OFICIAL
   Escuela de fútbol formativo en Santiago
   ═══════════════════════════════════════════════════════════════════ */

const NEGOCIO = {
  nombre: "El Tomate Mecánico",
  promesa: "Formamos el talento del futuro con fútbol, disciplina y tecnología",
  bajada:
    "Escuela de fútbol formativo en La Florida para cadetes de 12 a 17 años. Entrenamientos de alto nivel y seguimiento con Inteligencia Artificial. ¡Postula a la temporada 2026!",
  cta: "Quiero postular",
};

// Métricas oficiales de la ficha técnica
const DATOS_HERO: { valor: string; texto: string }[] = [
  { valor: "12 a 17", texto: "años de edad para postulación" },
  { valor: "85%", texto: "asistencia mensual mínima exigida" },
  { valor: "10 días", texto: "plazo de resultados tras la prueba" },
];

// Las tres categorías y sus horarios de entrenamiento
const CATEGORIAS_HORARIOS = [
  {
    nombre: "Cadete Menor (Sub-13 y Sub-14)",
    edad: "12 a 14 años",
    horarios: "Martes y jueves de 18:00 a 19:30 · Sábado de 10:00 a 12:00",
    enfoque: "Fundamentos tácticos, psicomotricidad y técnica individual de base.",
  },
  {
    nombre: "Cadete Mayor (Sub-15 y Sub-16)",
    edad: "15 a 16 años",
    horarios: "Lunes, miércoles y viernes de 18:00 a 20:00 · Sábado de 09:00 a 11:30",
    enfoque: "Desarrollo físico intensivo, juego asociado y posicionamiento estratégico.",
  },
  {
    nombre: "Proyección (Sub-17)",
    edad: "17 años",
    horarios: "Lunes a viernes de 17:30 a 20:00 · Sábado de 09:00 a 12:00",
    enfoque: "Preparación competitiva integral hacia divisiones juveniles y rendimiento profesional.",
  },
];

// Aranceles 2026 (CLP)
const OFERTA_TITULO = "Aranceles 2026 y Planes";
const OFERTA: { nombre: string; detalle: string; precio: string; nota: string }[] = [
  {
    nombre: "Cadete Menor (Sub-13 / Sub-14)",
    detalle: "10 cuotas mensuales (marzo a diciembre)",
    precio: "$85.000",
    nota: "Matrícula anual $120.000 (pago único)",
  },
  {
    nombre: "Cadete Mayor (Sub-15 / Sub-16)",
    detalle: "10 cuotas mensuales (marzo a diciembre)",
    precio: "$95.000",
    nota: "Matrícula anual $120.000 (pago único)",
  },
  {
    nombre: "Proyección (Sub-17)",
    detalle: "10 cuotas mensuales (marzo a diciembre)",
    precio: "$110.000",
    nota: "Matrícula anual $120.000 (pago único)",
  },
];

// Descuentos y becas oficiales
const DESCUENTOS_BECAS: string[] = [
  "Beca Garra Tricolor: hasta 50% de descuento por mérito deportivo en prueba de admisión",
  "Descuento Hermanos: 15% en la mensualidad del segundo cadete de la misma familia",
  "Pago al Contado: 10% de descuento sobre el arancel anual total",
];

// Las cuatro etapas del proceso de postulación
const PASOS_POSTULACION: { titulo: string; texto: string }[] = [
  {
    titulo: "1. Postulación online",
    texto:
      "Completa el formulario web con los datos del apoderado, datos del cadete y antecedentes solicitados.",
  },
  {
    titulo: "2. Prueba de admisión táctico-física",
    texto:
      "Jornada práctica en cancha con sensores GPS y análisis por video mediante TacticalAI y BiophysicalAI.",
  },
  {
    titulo: "3. Entrevista familiar",
    texto:
      "Revisión de los valores del club, compromiso académico (nota mínima 4,0) y disponibilidad horaria.",
  },
  {
    titulo: "4. Resultado oficial por email",
    texto:
      "Notificación formal en un plazo máximo de 10 días hábiles posteriores a la prueba de admisión.",
  },
];

// Formulario con exactamente los 6 campos requeridos
type Campo = {
  name: string;
  label: string;
  tipo: "text" | "email" | "tel" | "number" | "textarea";
  placeholder: string;
  ancho?: "completo";
};

const CAMPOS: Campo[] = [
  {
    name: "apoderado",
    label: "Nombre del apoderado",
    tipo: "text",
    placeholder: "Ej: Karen Jara",
  },
  {
    name: "correo",
    label: "Correo electrónico",
    tipo: "email",
    placeholder: "ejemplo@correo.com",
  },
  {
    name: "celular",
    label: "Celular",
    tipo: "tel",
    placeholder: "+56 9 1234 5678",
  },
  {
    name: "cadete",
    label: "Nombre del cadete",
    tipo: "text",
    placeholder: "Ej: Santiago Jara",
  },
  {
    name: "edad",
    label: "Edad del cadete",
    tipo: "number",
    placeholder: "12 a 17",
  },
  {
    name: "pregunta",
    label: "Tu pregunta",
    tipo: "textarea",
    placeholder: "¿Tienes dudas sobre horarios, matrícula, becas o el proceso de admisión?",
    ancho: "completo",
  },
];

const CONTACTO = {
  sede: "Complejo Deportivo La Reconquista",
  direccion: "Av. Departamental 1810, La Florida, Santiago",
  correo: "admisiones@eltomatemecanico.cl",
  telefono: "+56 2 2345 6789 (Lunes a viernes 10:00 a 18:00)",
};

/* ══════════════════ 2. ESTRUCTURA DE LA PÁGINA ══════════════════ */

export const metadata = {
  title: `${NEGOCIO.nombre} — Admisión 2026`,
  description: NEGOCIO.promesa,
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col pb-20 md:pb-0">
      {/* ── Barra superior ── */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-base font-black text-white">
              🍅
            </span>
            <span className="text-lg font-bold tracking-tight text-ink">{NEGOCIO.nombre}</span>
          </div>
          <a href="#postular" className="btn hidden px-5 py-2.5 text-sm sm:inline-flex">
            {NEGOCIO.cta}
          </a>
        </div>
      </header>

      {/* ── 1 · PORTADA: Nombre del club y frase que invite a postular ── */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <span className="inline-block rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Admisión y Cupos 2026 Abiertos
          </span>
          <h1 className="mt-4 max-w-3xl text-balance text-[clamp(2.2rem,6.5vw,3.8rem)] font-bold leading-[1.08] tracking-tight">
            {NEGOCIO.promesa}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            {NEGOCIO.bajada}
          </p>
          <a href="#postular" className="btn btn-inverso mt-8 shadow-lg">
            {NEGOCIO.cta}
          </a>

          <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/25 sm:grid-cols-3">
            {DATOS_HERO.map((d) => (
              <div key={d.texto} className="bg-primary px-5 py-5">
                <dt className="text-3xl font-bold tabular-nums">{d.valor}</dt>
                <dd className="mt-1 text-sm text-white/85">{d.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 2 · CATEGORÍAS Y SUS HORARIOS ── */}
      <section className="bg-paper" id="categorias">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-ink">
            Entrenamientos
          </span>
          <h2 className="mt-1 text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-tight text-ink">
            Categorías y Horarios
          </h2>
          <p className="mt-2 text-muted">
            Las categorías se asignan estrictamente por la edad cumplida del cadete al año de ingreso.
          </p>

          <div className="mt-9 grid gap-6 sm:grid-cols-3">
            {CATEGORIAS_HORARIOS.map((cat, i) => (
              <article
                key={cat.nombre}
                className="flex flex-col rounded-2xl border border-line p-6 transition-all hover:border-primary/40 hover:shadow-sm"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-primary-ink">
                  Categoría {i + 1} · {cat.edad}
                </span>
                <h3 className="mt-2 text-xl font-bold leading-snug text-ink">{cat.nombre}</h3>
                <div className="mt-4 rounded-xl bg-soft p-3.5 border border-line">
                  <span className="text-xs font-semibold uppercase text-muted block">Horarios</span>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-ink">{cat.horarios}</p>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted">{cat.enfoque}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-line bg-soft p-4 text-xs text-muted">
            <strong className="text-ink">Importante:</strong> Se exige una asistencia mínima mensual del 85%. Los cambios de categoría son potestad exclusiva del cuerpo técnico.
          </div>
        </div>
      </section>

      {/* ── 3 · ARANCELES Y DESCUENTOS ── */}
      <section className="bg-soft" id="aranceles">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-ink">
            Transparencia
          </span>
          <h2 className="mt-1 text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-tight text-ink">
            {OFERTA_TITULO}
          </h2>
          <p className="mt-2 text-muted">
            El arancel se cancela en 10 mensualidades e incluye entrenamientos, seguimiento con IA, ficha médica y campeonato interno.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {OFERTA.map((o) => (
              <article
                key={o.nombre}
                className="flex flex-col rounded-2xl border border-line bg-paper p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold leading-snug text-ink">{o.nombre}</h3>
                <p className="mt-1 text-xs text-muted">{o.detalle}</p>
                <p className="mt-auto pt-6 text-3xl font-extrabold tabular-nums text-primary-ink">
                  {o.precio} <span className="text-xs font-normal text-muted">/ mes</span>
                </p>
                <p className="mt-2 text-xs font-medium text-muted">{o.nota}</p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink">
              Becas y Descuentos Oficiales
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              {DESCUENTOS_BECAS.map((desc) => (
                <li
                  key={desc}
                  className="rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium text-ink shadow-xs"
                >
                  ✓ {desc}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted">
              * Los descuentos no son acumulables entre sí (aplica el mayor beneficio). El uniforme oficial de juego se adquiere por separado.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4 · CÓMO POSTULAR: LAS CUATRO ETAPAS ── */}
      <section className="bg-paper" id="proceso">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-ink">
            Paso a Paso
          </span>
          <h2 className="mt-1 text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-tight text-ink">
            Cómo Postular: Las Cuatro Etapas
          </h2>
          <p className="mt-2 text-muted">
            Un proceso formativo estructurado para evaluar el potencial y compromiso de cada cadete.
          </p>

          <ol className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PASOS_POSTULACION.map((p, i) => (
              <li
                key={p.titulo}
                className="flex flex-col rounded-2xl border-t-4 border-primary bg-soft p-5 border-x border-b border-line"
              >
                <span className="text-xs font-bold tabular-nums text-primary-ink uppercase tracking-wider">
                  Etapa {i + 1}
                </span>
                <h3 className="mt-2 text-base font-bold leading-snug text-ink">{p.titulo}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 5 · FORMULARIO DE CONSULTA: 6 CAMPOS REQUERIDOS ── */}
      <section id="postular" className="bg-soft">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-ink">
              Contacto y Admisión
            </span>
            <h2 className="mt-1 text-[clamp(1.8rem,4vw,2.4rem)] font-bold tracking-tight text-ink">
              Formulario de Consulta
            </h2>
            <p className="mt-2 text-sm text-muted">
              Déjanos tus datos para coordinar la prueba de admisión o resolver cualquier inquietud.
            </p>
          </div>

          <form action="#" className="mt-9 grid gap-4 sm:grid-cols-2">
            {CAMPOS.map((c) => (
              <div
                key={c.name}
                className={c.ancho === "completo" ? "sm:col-span-2" : undefined}
              >
                <label
                  htmlFor={c.name}
                  className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink"
                >
                  {c.label}
                </label>
                {c.tipo === "textarea" ? (
                  <textarea
                    id={c.name}
                    name={c.name}
                    rows={4}
                    placeholder={c.placeholder}
                    className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                ) : (
                  <input
                    id={c.name}
                    name={c.name}
                    type={c.tipo}
                    placeholder={c.placeholder}
                    className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                )}
              </div>
            ))}

            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                className="btn btn-bloque text-base py-3.5 shadow-md"
              >
                {NEGOCIO.cta}
              </button>
              <p className="mt-3 text-center text-xs text-muted">
                (Por ahora este formulario no envía a ningún lado) · O escríbenos a{" "}
                <a
                  href={`mailto:${CONTACTO.correo}`}
                  className="font-medium text-primary-ink underline"
                >
                  {CONTACTO.correo}
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ── Pie de página ── */}
      <footer className="border-t border-line bg-paper">
        <div className="mx-auto grid max-w-5xl gap-4 px-5 py-10 text-xs text-muted sm:grid-cols-3">
          <div>
            <p className="font-bold text-sm text-ink">{NEGOCIO.nombre}</p>
            <p className="mt-1">Escuela de fútbol formativo en Santiago</p>
          </div>
          <div>
            <p className="font-semibold text-ink">Sede deportiva</p>
            <p className="mt-1">{CONTACTO.sede}</p>
            <p>{CONTACTO.direccion}</p>
          </div>
          <div>
            <p className="font-semibold text-ink">Atención y contacto</p>
            <p className="mt-1">{CONTACTO.correo}</p>
            <p>{CONTACTO.telefono}</p>
          </div>
        </div>
      </footer>

      {/* ── Botón fijo en la parte inferior para dispositivos móviles ── */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
        <a href="#postular" className="btn btn-bloque">
          {NEGOCIO.cta}
        </a>
      </div>
    </div>
  );
}
