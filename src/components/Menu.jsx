import { useNavigate } from 'react-router-dom'
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-950 dark:to-black">
      <ThemeToggle />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[30rem] w-[55rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute top-32 -left-36 h-[22rem] w-[22rem] rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/10" />
        <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-sky-400/10 blur-3xl dark:bg-sky-400/10" />
      </div>

      <main className="relative flex-1">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-10 py-10 md:py-14">
          <header className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur px-3 py-1.5 shadow-sm">
                <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">Actualizado: Feb. 2026</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
                Menú de currículums
              </h1>
              <p className="mt-2 text-lg sm:text-2xl font-black text-gray-900 dark:text-gray-100 leading-tight">
                Elige el perfil según el puesto
              </p>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                Sistemas • Administración • Tecnología
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Aquí tienes dos versiones de mi CV: una enfocada en ingeniería y desarrollo, y otra enfocada en gestión
                administrativa y servicio al cliente.
              </p>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent blur-2xl"
              />

              <div className="relative rounded-[2rem] border border-gray-200/70 dark:border-gray-800/70 bg-white/70 dark:bg-gray-900/60 backdrop-blur shadow-[0_30px_90px_-50px_rgba(0,0,0,0.55)] overflow-hidden">
                <div className="px-4 pt-5 pb-3 text-center">
                  <p className="text-base sm:text-lg font-black text-gray-900 dark:text-gray-100 leading-tight">
                    Joseph Álvarez Ruiz
                  </p>
                </div>

                <div className="px-4 pb-4">
                  <div className="rounded-[1.6rem] p-[10px] bg-gradient-to-br">
                    <div className="rounded-[1.25rem] overflow-hidden bg-white">
                      <img
                        src="/joseph.jpeg"
                        alt="Joseph Sebastián Álvarez Ruiz"
                        className="w-full aspect-[4/5] object-cover object-top"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            <article className="group relative overflow-hidden rounded-3xl border border-blue-200/70 dark:border-blue-900/50 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 p-6 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
              <div aria-hidden="true" className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
              />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-black/25 text-blue-100 ring-1 ring-white/15 px-3 py-1 text-[11px] font-semibold">
                    Perfil técnico
                  </div>
                  <h2 className="mt-3 text-xl sm:text-2xl font-black text-white">CV de Ingeniero en Sistemas</h2>
                  <p className="mt-2 text-sm text-blue-100/90 leading-relaxed">
                    Enfocado en desarrollo web, APIs, bases de datos, arquitectura, buenas prácticas y resolución de
                    problemas.
                  </p>
                </div>

                <div className="shrink-0 hidden sm:flex flex-col items-end">
                  <p className="text-xs text-blue-100/80 font-semibold">Ideal para:</p>
                  <p className="text-xs text-blue-50">TI • Desarrollo • Soporte</p>
                </div>
              </div>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {['React', 'Node.js', 'Laravel', 'PostgreSQL', 'Git'].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 text-white/90 ring-1 ring-white/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="relative mt-6 flex items-center justify-between gap-3">
                <p className="text-xs text-blue-100/80">Incluye experiencia técnica, stack y proyectos.</p>
                <button
                  onClick={() => go('engineer', '/cv-engineer')}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-extrabold text-blue-900 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
                  type="button"
                >
                  Ver currículum <span aria-hidden="true">↗</span>
                </button>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-3xl border border-gray-200/80 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 backdrop-blur p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
              <div aria-hidden="true" className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-blue-500/10 blur-2xl" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 ring-1 ring-gray-200 dark:ring-gray-700 px-3 py-1 text-[11px] font-semibold">
                    Perfil administrativo
                  </div>
                  <h2 className="mt-3 text-xl sm:text-2xl font-black text-gray-900 dark:text-gray-100">
                    CV de Asistente Administrativo
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Enfocado en organización, coordinación, servicio al cliente, control documental y reportes.
                  </p>
                </div>

                <div className="shrink-0 hidden sm:flex flex-col items-end">
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-semibold">Ideal para:</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Oficina • Gestión</p>
                </div>
              </div>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {['Excel', 'Atención al cliente', 'Reportes', 'Organización', 'Comunicación'].map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 ring-1 ring-gray-200 dark:ring-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="relative mt-6 flex items-center justify-between gap-3">
                <p className="text-xs text-gray-500 dark:text-gray-400">Perfil claro para roles administrativos.</p>
                <button
                  onClick={() => go('assistant', '/cv-assistant')}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400/30"
                  type="button"
                >
                  Ver currículum <span aria-hidden="true">↗</span>
                </button>
              </div>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
