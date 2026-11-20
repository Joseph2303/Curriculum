import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiBriefcase, FiCode, FiGithub, FiLayers, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'
import { ThemeToggle } from './ThemeToggle'
import { Footer } from './Footer'
import { useImagePreload } from '../hooks/useImagePreload'
import { useAutoReloadOnce } from '../hooks/useAutoReloadOnce'

// Precargar imágenes críticas del CV Engineer
const engineerImages = [
  '/iconosInge/python_18894.png',
  '/iconosInge/java_original_wordmark_logo_icon_146459.png',
  '/iconosInge/javascript_icon_130900.png',
  '/iconosInge/react_original_wordmark_logo_icon_146375.png',
  '/iconosInge/nodejs_original_wordmark_logo_icon_146412.png',
  '/iconosInge/mysql_original_wordmark_logo_icon_146417.png',
]

const options = [
  {
    choice: 'engineer',
    route: '/cv-engineer',
    icon: FiCode,
    label: 'Perfil técnico',
    title: 'CV de Ingeniero en Sistemas',
    description: 'Desarrollo web, APIs, bases de datos, arquitectura de software, buenas prácticas y resolución de problemas.',
    idealFor: 'TI · Desarrollo · Soporte',
    tags: ['React', 'Node.js', 'Laravel', 'PostgreSQL', 'Git'],
    cta: 'Ver currículum',
    style: {
      bar: 'bg-blue-600',
      icon: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      label: 'text-blue-700 dark:text-blue-400',
      button: 'bg-blue-600 hover:bg-blue-700',
      border: 'hover:border-blue-300 dark:hover:border-blue-800',
    },
  },
  {
    choice: 'assistant',
    route: '/cv-assistant',
    icon: FiBriefcase,
    label: 'Perfil administrativo',
    title: 'CV de Asistente Administrativo',
    description: 'Organización, coordinación, servicio al cliente, control documental y elaboración de reportes.',
    idealFor: 'Oficina · Gestión',
    tags: ['Excel', 'Atención al cliente', 'Reportes', 'Organización', 'Comunicación'],
    cta: 'Ver currículum',
    style: {
      bar: 'bg-violet-600',
      icon: 'bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
      label: 'text-violet-700 dark:text-violet-400',
      button: 'bg-violet-600 hover:bg-violet-700',
      border: 'hover:border-violet-300 dark:hover:border-violet-800',
    },
  },
  {
    choice: 'projects',
    route: '/projects',
    icon: FiLayers,
    label: 'Portafolio',
    title: 'Proyectos',
    description: 'Sistemas y aplicaciones web en producción, con su stack tecnológico, repositorio y sitio en línea.',
    idealFor: 'Reclutadores · Clientes',
    tags: ['Frontend', 'Backend', 'Full Stack', 'UI/UX', 'Deploy'],
    cta: 'Ver proyectos',
    style: {
      bar: 'bg-emerald-600',
      icon: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
      label: 'text-emerald-700 dark:text-emerald-400',
      button: 'bg-emerald-600 hover:bg-emerald-700',
      border: 'hover:border-emerald-300 dark:hover:border-emerald-800',
    },
  },
]

const links = [
  { icon: FiMail, label: 'Correo', href: 'mailto:jalvarezruiz3@gmail.com' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/joseph-sebastian-%C3%A1lvarez-ruiz-bb6758187/', external: true },
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/Joseph2303', external: true },
]

export const Menu = () => {
  const navigate = useNavigate()

  useImagePreload(engineerImages)
  useAutoReloadOnce()

  const go = (choice, route) => {
    try {
      localStorage.setItem('cv-choice', choice)
    } catch (e) {}
    navigate(route)
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-gray-950">
      <ThemeToggle />

      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-5 pt-20 pb-12 md:pt-16 md:pb-14">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="order-2 md:order-1">
              <p className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-950/60 px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Currículum y portafolio profesional
              </p>

              <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                Joseph Sebastián Álvarez Ruiz
              </h1>
              <p className="mt-3 text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Ingeniero en Sistemas de Información · Desarrollador Full Stack
              </p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                <FiMapPin size={14} /> San José, Costa Rica
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
                Bienvenido. Aquí encontrará dos versiones de mi currículum, según el tipo de puesto, y un portafolio con
                los proyectos que he desarrollado.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {links.map(({ icon: Icon, label, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <Icon size={15} /> {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img
                src="/joseph.jpeg"
                alt="Joseph Sebastián Álvarez Ruiz"
                className="h-44 w-44 md:h-64 md:w-56 rounded-2xl object-cover object-top ring-1 ring-gray-200 dark:ring-gray-800 shadow-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-5 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              Seleccione un perfil
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              ¿Qué desea consultar?
            </h2>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Actualizado: feb. 2026</p>
        </div>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt) => {
            const Icon = opt.icon
            return (
              <article
                key={opt.choice}
                className={`group flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${opt.style.border}`}
              >
                <div className={`h-1 rounded-t-2xl ${opt.style.bar}`} />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className={`grid h-11 w-11 place-items-center rounded-xl ${opt.style.icon}`}>
                      <Icon size={20} />
                    </span>
                    <span className={`text-xs font-semibold uppercase tracking-[0.14em] ${opt.style.label}`}>
                      {opt.label}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">{opt.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{opt.description}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {opt.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 dark:bg-gray-800 px-2 py-1 text-[11px] font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="border-t border-gray-100 dark:border-gray-800 pt-5">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        <span className="font-medium text-gray-700 dark:text-gray-300">Ideal para:</span> {opt.idealFor}
                      </p>
                      <button
                        onClick={() => go(opt.choice, opt.route)}
                        className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-colors ${opt.style.button}`}
                        type="button"
                      >
                        {opt.cta}
                        <FiArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </section>
      </main>

      <Footer />
    </div>
  )
}
