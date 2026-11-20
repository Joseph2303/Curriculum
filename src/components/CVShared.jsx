import { FiArrowLeft, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { ThemeToggle } from './ThemeToggle'
import { Footer } from './Footer'

// Clases completas por color de acento (Tailwind necesita strings literales)
export const accents = {
  blue: {
    text: 'text-blue-700 dark:text-blue-400',
    button: 'bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-500/40',
    soft: 'bg-blue-50 text-blue-800 ring-blue-600/15 dark:bg-blue-900/30 dark:text-blue-200 dark:ring-blue-400/20',
    bar: 'bg-blue-600 dark:bg-blue-500',
    dot: 'border-blue-600 dark:border-blue-400',
    hover: 'hover:text-blue-700 dark:hover:text-blue-400',
    tile: 'hover:border-blue-300 dark:hover:border-blue-700',
  },
  violet: {
    text: 'text-violet-700 dark:text-violet-400',
    button: 'bg-violet-600 hover:bg-violet-700 focus-visible:ring-violet-500/40',
    soft: 'bg-violet-50 text-violet-800 ring-violet-600/15 dark:bg-violet-900/30 dark:text-violet-200 dark:ring-violet-400/20',
    bar: 'bg-violet-600 dark:bg-violet-500',
    dot: 'border-violet-600 dark:border-violet-400',
    hover: 'hover:text-violet-700 dark:hover:text-violet-400',
    tile: 'hover:border-violet-300 dark:hover:border-violet-700',
  },
}

const LINKEDIN = 'https://www.linkedin.com/in/joseph-sebastian-%C3%A1lvarez-ruiz-bb6758187/'
const GITHUB = 'https://github.com/Joseph2303'

export const CVPage = ({ accent = 'blue', role, eyebrow, pdfUrl, whatsappUrl = 'https://wa.me/50685812663', onBack, children }) => {
  const a = accents[accent]

  const contacts = [
    { icon: FiMapPin, label: 'San José, Costa Rica' },
    { icon: FiMail, label: 'jalvarezruiz3@gmail.com', href: 'mailto:jalvarezruiz3@gmail.com' },
    { icon: FiPhone, label: '+506 8581 2663', href: whatsappUrl, external: true },
    { icon: FiGithub, label: 'GitHub', href: GITHUB, external: true },
    { icon: FiLinkedin, label: 'LinkedIn', href: LINKEDIN, external: true },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-gray-950 pb-20 lg:pb-0">
      <ThemeToggle />
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:px-3 focus:py-2 focus:bg-gray-900 focus:text-white focus:rounded"
        href="#main"
      >
        Saltar al contenido
      </a>

      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-5 pt-20 pb-10 md:pt-16">
          <button
            onClick={onBack}
            className={`inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors ${a.hover}`}
            type="button"
          >
            <FiArrowLeft size={16} /> Volver al menú
          </button>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-8 items-center">
            <img
              src="/joseph.jpeg"
              alt="Joseph Sebastián Álvarez Ruiz"
              className="h-28 w-28 md:h-32 md:w-32 rounded-2xl object-cover object-top ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm"
              loading="eager"
            />

            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${a.text}`}>{eyebrow}</p>
              <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Joseph Sebastián Álvarez Ruiz
              </h1>
              <p className="mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300">{role}</p>

              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
                {contacts.map(({ icon: Icon, label, href, external }) => (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className={`inline-flex items-center gap-1.5 transition-colors ${a.hover}`}
                      >
                        <Icon size={14} /> {label}
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5">
                        <Icon size={14} /> {label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={pdfUrl}
              download
              className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors focus:outline-none focus-visible:ring-4 ${a.button}`}
            >
              <FiDownload size={16} /> Descargar CV (PDF)
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="flex-1 w-full max-w-6xl mx-auto px-5 py-10">
        <div className="grid lg:grid-cols-[300px_1fr] gap-6 items-start">{children}</div>
      </main>

      <Footer />

      {/* Acción rápida en móvil */}
      <div className="fixed inset-x-4 bottom-4 z-40 lg:hidden">
        <a
          href={pdfUrl}
          download
          className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg ${a.button}`}
        >
          <FiDownload size={16} /> Descargar CV
        </a>
      </div>
    </div>
  )
}

// Bloque lateral (educación, certificaciones…)
export const Panel = ({ title, children }) => (
  <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
    <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">{title}</h2>
    <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">{children}</div>
  </section>
)

// Bloque principal (perfil, experiencia, habilidades…)
export const Card = ({ title, accent = 'blue', children }) => (
  <section className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 md:p-8">
    <div className="flex items-center gap-3">
      <span className={`h-5 w-1 rounded-full ${accents[accent].bar}`} />
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
    </div>
    <div className="mt-5 text-gray-700 dark:text-gray-300">{children}</div>
  </section>
)

// Lista con año: educación, certificaciones, congresos
export const YearList = ({ items, accent = 'blue' }) => (
  <ul className="space-y-4">
    {items.map((item) => (
      <li key={`${item.year}-${item.title}`} className="grid grid-cols-[3rem_1fr] gap-3">
        <span className={`text-xs font-semibold tabular-nums pt-0.5 ${accents[accent].text}`}>{item.year}</span>
        <div>
          <p className="font-medium leading-snug text-gray-900 dark:text-gray-100">{item.title}</p>
          {item.org && <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{item.org}</p>}
        </div>
      </li>
    ))}
  </ul>
)

export const Chips = ({ items, accent = 'blue' }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span key={item} className={`rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${accents[accent].soft}`}>
        {item}
      </span>
    ))}
  </div>
)

// Línea de tiempo de experiencia
export const Timeline = ({ children }) => <ol className="relative space-y-8 border-l border-gray-200 dark:border-gray-800 ml-1.5">{children}</ol>

export const TimelineItem = ({ title, company, period, paragraphs, duties, accent = 'blue' }) => (
  <li className="relative pl-6">
    <span className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 bg-white dark:bg-gray-900 ${accents[accent].dot}`} />
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
      <h3 className="font-semibold leading-snug text-gray-900 dark:text-white">{title}</h3>
      {period && <span className="shrink-0 text-xs font-medium text-gray-500 dark:text-gray-400">{period}</span>}
    </div>
    {company && <p className={`mt-1 text-sm font-medium ${accents[accent].text}`}>{company}</p>}
    {paragraphs?.map((p, i) => (
      <p key={i} className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        {p}
      </p>
    ))}
    {duties && (
      <ul className="mt-3 space-y-2">
        {duties.map((d, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500" />
            {d}
          </li>
        ))}
      </ul>
    )}
  </li>
)

export const References = ({ items }) => (
  <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {items.map((ref) => (
      <li key={ref.name} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-950/50 p-4">
        <p className="font-semibold text-sm text-gray-900 dark:text-white">{ref.name}</p>
        <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-400">{ref.role}</p>
      </li>
    ))}
  </ul>
)

// Datos compartidos entre ambos CV
export const education = [
  { year: '2025', title: 'Bachillerato en Ingeniería en Sistemas de Información', org: 'Universidad Nacional (UNA)' },
  { year: '2023', title: 'Diplomado en Programación de Aplicaciones Informáticas', org: 'Universidad Nacional (UNA)' },
  { year: '2021', title: 'Técnico en Soporte para Computadoras', org: 'Instituto COSVIC' },
  { year: '2017', title: 'Bachiller en Educación Media' },
]

export const certifications = [
  {
    year: '2025',
    title: 'Habilidades para la Empleabilidad, Servicio al Cliente y Herramientas Digitales',
    org: 'Fundación Aliarse & PADF',
  },
  { year: '2024', title: 'Scrum Fundamentals Certified' },
  { year: '2023', title: 'RPA Developer Foundation Spanish' },
]

export const affiliations = [{ year: '2026', title: 'Colegio de Profesionales en Informática y Computación (CPIC)' }]

export const events = [
  { year: '2024', title: 'Congreso Iberoamericano de Computación para el Desarrollo (COMPDES 2024)', org: 'Participación' },
]

export const softSkills = [
  'Comunicación efectiva',
  'Trabajo en equipo',
  'Resolución de problemas',
  'Adaptabilidad',
  'Gestión del tiempo',
  'Responsabilidad',
  'Pensamiento crítico',
  'Creatividad',
  'Autonomía',
  'Servicio al cliente',
]

export const references = [
  {
    name: 'MSc. Andrés Alberto Cortés Fuentes',
    role: 'Jefe del Departamento de Tecnologías de Información, Municipalidad de Carrillo',
  },
  { name: 'Gretel Vega Alemán', role: 'Gestora de Turismo, Municipalidad de La Cruz' },
  {
    name: 'MSc. Eddier López López',
    role: 'Coordinador Académico de Ingeniería en Sistemas de Información, UNA',
  },
]

// Columna lateral común
export const Sidebar = ({ accent }) => (
  <aside className="space-y-6">
    <Panel title="Educación">
      <YearList items={education} accent={accent} />
    </Panel>
    <Panel title="Certificaciones">
      <YearList items={certifications} accent={accent} />
    </Panel>
    <Panel title="Colegiatura">
      <YearList items={affiliations} accent={accent} />
    </Panel>
    <Panel title="Congresos">
      <YearList items={events} accent={accent} />
    </Panel>
    <Panel title="Licencias de conducir">
      <p className="font-medium text-gray-900 dark:text-gray-100">B1 y A2</p>
    </Panel>
    <Panel title="Habilidades blandas">
      <Chips items={softSkills} accent={accent} />
    </Panel>
  </aside>
)
