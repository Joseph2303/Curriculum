import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiArrowUpRight, FiCheck, FiExternalLink, FiGithub, FiLayers } from 'react-icons/fi'
import { ThemeToggle } from './ThemeToggle'
import { Footer } from './Footer'

const GITHUB_PROFILE = 'https://github.com/Joseph2303'

const projects = [
  {
    title: 'NeoEduCore',
    category: 'Trabajo final de Licenciatura',
    description:
      'Sistema de exámenes diagnósticos con tutor virtual basado en inteligencia artificial, desarrollado como trabajo final de graduación de Licenciatura.',
    highlights: ['Aplicación de exámenes diagnósticos', 'Tutor virtual con inteligencia artificial'],
    stack: [],
    repoUrl: '',
    liveUrl: 'https://neoeducore.eduregistro.com',
    status: 'En producción',
  },
  {
    title: 'EduRegistro',
    category: 'Emprendimiento propio',
    description:
      'Plataforma para que los docentes gestionen sus calificaciones, estudiantes y demás tareas administrativas del año lectivo desde un solo lugar.',
    highlights: ['Gestión de calificaciones y estudiantes', 'Organización de las tareas del año lectivo'],
    stack: [],
    repoUrl: '',
    liveUrl: 'https://eduregistro.com',
    status: 'En producción',
  },
  {
    title: 'Upgo Technology Shop',
    category: 'Sistema de pedidos',
    description:
      'Sistema de pedidos en línea de Upgo Technology, desplegado y en uso por clientes reales.',
    highlights: ['Gestión de pedidos en línea', 'Sitio en producción'],
    stack: [],
    repoUrl: '',
    liveUrl: 'https://shop.upgotechnology.com',
    status: 'En producción',
  },
  {
    title: 'Zhongbo CR',
    category: 'Sistema de pedidos',
    description: 'Sistema de pedidos en línea para Zhongbo Costa Rica, desplegado y en uso por clientes reales.',
    highlights: ['Gestión de pedidos en línea', 'Sitio en producción'],
    stack: [],
    repoUrl: '',
    liveUrl: 'https://zhongbocr.com',
    status: 'En producción',
  },
  {
    title: 'Upgo Technology',
    category: 'Sitio web informativo',
    description: 'Sitio web corporativo de Upgo Technology que presenta la empresa, sus servicios e información de contacto.',
    highlights: ['Presentación de la empresa y sus servicios', 'Sitio en producción'],
    stack: [],
    repoUrl: '',
    liveUrl: 'https://upgotechnology.com',
    status: 'En producción',
  },
  {
    title: 'Plataforma de Información Turística',
    category: 'Aplicación web',
    description:
      'Aplicación web para mostrar destinos, actividades y contenido turístico, con vistas dinámicas y consumo de API.',
    highlights: ['Vistas dinámicas de destinos y actividades', 'Integración con API REST'],
    stack: ['React', 'TypeScript', 'REST API'],
    repoUrl: 'https://github.com/Joseph2303/FrontEndInternoLaCruz',
    liveUrl: '',
    status: 'Completado',
  },
  {
    title: 'Control de Empleados con Face ID',
    category: 'Sistema empresarial',
    description:
      'Sistema para registrar y validar colaboradores mediante reconocimiento facial, con gestión de usuarios y reportes.',
    highlights: ['Validación por reconocimiento facial', 'Gestión de usuarios y generación de reportes'],
    stack: ['Laravel', 'JavaScript', 'MySQL'],
    repoUrl: 'https://github.com/Joseph2303/CoriportFrontEnd2',
    liveUrl: '',
    status: 'Completado',
  },
  {
    title: 'Control Interno',
    category: 'Sistema empresarial',
    description: 'Sistema de registro y control de entradas y salidas, con generación de reportes.',
    highlights: ['Registro de entradas y salidas', 'Reportes de control'],
    stack: ['React', 'Tailwind CSS', 'Vite'],
    repoUrl: 'https://github.com/Joseph2303/ProyectoPSS',
    liveUrl: 'https://proyecto-pss-chi.vercel.app',
    status: 'En desarrollo',
  },
  {
    title: 'KodePlatform',
    category: 'Plataforma educativa',
    description:
      'Plataforma para gestionar cursos, calificaciones y actividades desde un único lugar, de forma segura y rápida.',
    highlights: ['Gestión de cursos y actividades', 'Control de calificaciones'],
    stack: ['React', 'Tailwind CSS', 'Vite'],
    repoUrl: 'https://github.com/Joseph2303/frontend-xray',
    liveUrl: 'https://kodeplatform.netlify.app/auth',
    status: 'En desarrollo',
  },
]

const ALL = 'Todos'

export const Projects = () => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState(ALL)

  const technologies = useMemo(() => [...new Set(projects.flatMap((p) => p.stack))], [])

  const visibleProjects = useMemo(
    () => (filter === ALL ? projects : projects.filter((p) => p.stack.includes(filter))),
    [filter]
  )

  const stats = [
    { value: projects.length, label: 'Proyectos' },
    { value: technologies.length, label: 'Tecnologías' },
    { value: projects.filter((p) => p.liveUrl).length, label: 'Sitios en línea' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-gray-950">
      <ThemeToggle />
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:px-3 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded"
        href="#main"
      >
        Saltar al contenido
      </a>

      {/* Encabezado */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-5 pt-20 pb-10 md:pt-16 md:pb-12">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
            type="button"
          >
            <FiArrowLeft size={16} /> Volver al menú
          </button>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                Portafolio técnico
              </p>
              <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Proyectos destacados
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
                Selección de sistemas y aplicaciones web que he desarrollado, desde el análisis hasta la
                implementación. Cada proyecto incluye su stack tecnológico, repositorio y, cuando está disponible,
                una demo en línea.
              </p>
            </div>

            <dl className="grid grid-cols-3 divide-x divide-gray-200 dark:divide-gray-800 rounded-xl border border-gray-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-950/60">
              {stats.map((stat) => (
                <div key={stat.label} className="px-5 py-4 text-center">
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </header>

      <main id="main" className="flex-1 w-full max-w-6xl mx-auto px-5 py-10">
        {/* Filtro por tecnología */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tecnología">
            {[ALL, ...technologies].map((tech) => {
              const active = filter === tech
              return (
                <button
                  key={tech}
                  type="button"
                  onClick={() => setFilter(tech)}
                  aria-pressed={active}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                      : 'border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:border-gray-300 hover:text-gray-900 dark:hover:border-gray-700 dark:hover:text-white'
                  }`}
                >
                  {tech}
                </button>
              )
            })}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400" aria-live="polite">
            Mostrando {visibleProjects.length} de {projects.length}
          </p>
        </div>

        {/* Proyectos */}
        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} index={projects.indexOf(project) + 1} />
          ))}
        </section>

        {/* Llamado a GitHub */}
        <section className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
              <FiLayers size={20} />
            </span>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">¿Quiere ver más trabajo?</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                En mi perfil de GitHub encontrará otros repositorios, prácticas y aportes.
              </p>
            </div>
          </div>
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
          >
            <FiGithub size={16} /> Ver perfil de GitHub <FiArrowUpRight size={16} />
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}

const statusStyles = {
  Completado: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-400/20',
  'En desarrollo': 'bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-900/20 dark:text-amber-300 dark:ring-amber-400/20',
  'En producción': 'bg-blue-50 text-blue-700 ring-blue-600/20 dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-400/20',
}

const statusDot = {
  Completado: 'bg-emerald-500',
  'En desarrollo': 'bg-amber-500',
  'En producción': 'bg-blue-500',
}

const ProjectCard = ({ project, index }) => (
  <article className="group flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm transition-all duration-200 hover:border-emerald-300 hover:shadow-lg dark:hover:border-emerald-800">
    <div className="h-1 rounded-t-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-80 transition-opacity group-hover:opacity-100" />

    <div className="flex flex-1 flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
            <span className="font-mono text-emerald-700 dark:text-emerald-400">{String(index).padStart(2, '0')}</span>
            <span className="mx-2 text-gray-300 dark:text-gray-700">/</span>
            {project.category}
          </p>
          <h2 className="mt-2 text-xl font-semibold leading-snug text-gray-900 dark:text-white">{project.title}</h2>
        </div>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ring-inset ${
            statusStyles[project.status] ?? statusStyles.Completado
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status] ?? statusDot.Completado}`} />
          {project.status}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{project.description}</p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
            <FiCheck size={16} className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
            {item}
          </li>
        ))}
      </ul>

      {project.stack.length > 0 && (
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-slate-100 dark:bg-gray-800 px-2 py-1 font-mono text-[11px] text-gray-700 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
      )}

      <div className="mt-auto pt-6">
        <div className="flex flex-wrap items-center gap-3 border-t border-gray-100 dark:border-gray-800 pt-5">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <FiGithub size={15} /> Código fuente
            </a>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
            >
              <FiExternalLink size={15} /> {project.repoUrl ? 'Ver demo' : 'Visitar sitio'}
            </a>
          ) : (
            <span className="text-xs text-gray-400 dark:text-gray-500">Demo no disponible públicamente</span>
          )}
        </div>
      </div>
    </div>
  </article>
)
