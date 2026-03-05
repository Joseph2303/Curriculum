import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi'
import { ThemeToggle } from './ThemeToggle'
import { Footer } from './Footer'

const projects = [
  {
    title: 'Plataforma de Informacion Turistica',
    description:
      'Aplicacion web para mostrar destinos, actividades y contenido turistico. Incluye vistas dinamicas y consumo de API.',
    stack: ['React', 'TypeScript', 'REST API'],
    repoUrl: 'https://github.com/Joseph2303/FrontEndInternoLaCruz',
    liveUrl: '',
    status: 'Completado',
  },
  {
    title: 'Sistema de Control de Empleados con Face ID',
    description:
      'Sistema para registrar y validar colaboradores mediante reconocimiento facial, con gestion de usuarios y reportes.',
    stack: ['Laravel', 'JavaScript', 'MySQL'],
    repoUrl: 'https://github.com/Joseph2303/CoriportFrontEnd2',
    liveUrl: '',
    status: 'Completado',
  },
  {
    title: 'Control Interno',
    description:
      'Sistema de registro y control de entradas, salidas y reportes.',
    stack: ['React', 'Tailwind CSS', 'Vite'],
    repoUrl: 'https://github.com/Joseph2303/ProyectoPSS',
    liveUrl: 'https://proyecto-pss-chi.vercel.app',
    status: 'En mejora continua',
  },
  {
    title: 'kodeplatform',
    description:
      'Gestiona cursos, calificaciones y actividades desde un único lugar. Seguro, rápido y pensado para tu día a día.',
    stack: ['React', 'Tailwind CSS', 'Vite'],
    repoUrl: 'https://github.com/Joseph2303/frontend-xray',
    liveUrl: 'https://kodeplatform.netlify.app/auth',
    status: 'En mejora continua',
  },
]

export const Projects = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <ThemeToggle />
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:px-3 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded"
        href="#main"
      >
        Saltar al contenido
      </a>

      <header className="mb-6">
        <div className="max-w-7xl mx-auto px-5 py-9">
          <div className="grid md:grid-cols-[1fr_auto] grid-cols-1 gap-5 items-center bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-700 p-6 rounded-2xl text-white shadow-2xl">
            <div>
              <p className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold ring-1 ring-white/30">
                Portafolio tecnico
              </p>
              <h1 className="mt-3 text-2xl md:text-3xl font-black">Proyectos</h1>
              <p className="mt-2 text-sm md:text-base text-emerald-50/95 max-w-3xl">
                En esta sección encontrarás algunos de los proyectos que he desarrollado. Si te interesa conocer más sobre mi trabajo, puedes visitar mi perfil de GitHub para ver otros repositorios y aportes.
              </p>
            </div>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg font-semibold transition-colors border border-white/30"
              type="button"
            >
              <FiArrowLeft size={18} /> Volver al menu
            </button>
          </div>
        </div>
      </header>

      <main id="main" className="flex-1 max-w-7xl mx-auto w-full px-5 pb-10">
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-emerald-100 dark:border-emerald-900/50 bg-white/85 dark:bg-gray-900/70 backdrop-blur p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-black text-gray-900 dark:text-gray-100 leading-tight">
                  {project.title}
                </h2>
                <span className="shrink-0 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 text-[11px] font-semibold">
                  {project.status}
                </span>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={`${project.title}-${tech}`}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-gray-800 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-200 dark:ring-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <FiGithub size={14} /> Repositorio
                  </a>
                ) : null}

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md"
                  >
                    <FiExternalLink size={14} /> Ver demo
                  </a>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-2 text-xs text-gray-500 dark:text-gray-400">
                    Demo pendiente
                  </span>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
