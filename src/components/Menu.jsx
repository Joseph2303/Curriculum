import { useNavigate } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import { Footer } from './Footer'

export const Menu = () => {
  const navigate = useNavigate()

  const handleEngineer = () => {
    try {
      localStorage.setItem('cv-choice', 'engineer')
    } catch (e) {}
    navigate('/cv-engineer')
  }

  const handleAssistant = () => {
    try {
      localStorage.setItem('cv-choice', 'assistant')
    } catch (e) {}
    navigate('/cv-assistant')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <ThemeToggle />
      <main className="flex-1 flex items-center justify-center p-8">
        <section className="bg-white dark:bg-gray-800 max-w-4xl w-full rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-10 grid md:grid-cols-[1.4fr_1.15fr] gap-6" aria-labelledby="heading">
          {/* Columna izquierda: opciones de CV */}
          <div className="flex flex-col gap-5">
            <div className="border-l pl-6 md:border-l md:border-t-0 border-t pt-4 md:pt-0 text-center flex flex-col items-center justify-center gap-6">
            <p className="text-sm tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-2">Bienvenidos</p>
            <h1 id="heading" className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              GRACIAS POR INTERESARTE EN MI CURRICULUM
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center">
              Soy <strong>Joseph Sebastián Álvarez Ruiz</strong>, profesional con experiencia en tecnologías de la información y gestión. 
              Seleccione la versión del currículum que mejor se ajuste al puesto que está evaluando.
            </p>
          </div>
            {/* CV Ingeniero */}
            <article className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex justify-between gap-3 items-start">
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    CV de Ingeniero en Sistemas de Información
                  </h2>
                  <p className="text-sm text-blue-100 leading-relaxed text-justify">
                    Perfil orientado a desarrollo web, análisis de sistemas, proyectos tecnológicos
                    y soluciones de TI para organizaciones.
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-black/20 text-blue-100 whitespace-nowrap">
                  Perfil Ingeniero
                </span>
              </div>
              <div className="mt-3 flex justify-end">
                <button 
                  onClick={handleEngineer}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-blue-800 font-semibold text-sm shadow-lg transition-all duration-200 hover:bg-blue-50 hover:-translate-y-0.5"
                  type="button"
                >
                  <span aria-hidden="true">↗</span>
                  VER CURRICULUM
                </button>
              </div>
            </article>

            {/* CV Asistente Administrativo */}
            <article className="rounded-2xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:bg-white dark:hover:bg-gray-700">
              <div className="flex justify-between gap-3 items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    CV de Asistente Administrativo
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                    Perfil enfocado en gestión administrativa, servicio al cliente,
                    apoyo a coordinación y uso de herramientas tecnológicas.
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  Perfil administrativo
                </span>
              </div>
              <div className="flex justify-end">
                <button 
                  onClick={handleAssistant}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 font-semibold text-sm border border-blue-200 dark:border-blue-700 transition-all duration-200 hover:bg-blue-200 dark:hover:bg-blue-900 hover:-translate-y-0.5"
                  type="button"
                >
                  <span aria-hidden="true">↗</span>
                  VER CURRICULUM
                </button>
              </div>
            </article>
          </div>

          {/* Columna derecha: foto y bienvenida */}
          <div className="border-l border-gray-200 dark:border-gray-700 pl-6 md:border-l md:border-t-0 border-t pt-4 md:pt-0 text-center flex flex-col items-center justify-center gap-6">
            {/* Foto de perfil */}
            <div className="w-63 h-63 rounded-full overflow-hidden border-1">
              <img 
                src="img/joseph.jpeg" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-2">Bienvenidos</p>
            <h1 id="heading" className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
              GRACIAS POR INTERESARTE EN MI CURRICULUM
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center">
              Soy <strong>Joseph Sebastián Álvarez Ruiz</strong>, profesional con experiencia en tecnologías de la información y gestión. 
              Seleccione la versión del currículum que mejor se ajuste al puesto que está evaluando.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
