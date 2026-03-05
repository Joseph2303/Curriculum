import { useNavigate } from 'react-router-dom'
import { FiDownload, FiArrowLeft } from 'react-icons/fi'
import { ThemeToggle } from './ThemeToggle'
import { Footer } from './Footer'
import { useAutoReloadOnce } from '../hooks/useAutoReloadOnce'

const CV_PDF_URL = (import.meta.env.BASE_URL || '/') + 'files/joseph_alvarez_cv.pdf'

export const CVAssistant = () => {
  const navigate = useNavigate()
  
  // Auto-reload una sola vez si las imágenes no cargan
  useAutoReloadOnce()

  const handleBackToMenu = () => {
    try {
      localStorage.removeItem('cv-choice')
    } catch (e) {}
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <ThemeToggle />
      <a className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:px-3 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded" href="#main">
        Saltar al contenido
      </a>
      
      {/* Header */}
      <header className="mb-6">
        <div className="max-w-7xl mx-auto px-5 py-9">
          <div className="grid md:grid-cols-[auto_1fr_auto] grid-cols-1 gap-5 items-center bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 p-6 rounded-2xl text-white shadow-2xl">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white text-purple-500 dark:text-purple-600 grid place-items-center font-extrabold text-3xl shadow-inner border-4 border-white/60 mx-auto md:mx-0">
              JA
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold mb-1">Joseph Sebastián Álvarez Ruiz</h1>
              <p className="text-base md:text-lg opacity-95 mb-1">Asistente Administrativo | Profesional en Gestión y Tecnología</p>
              <p className="text-sm opacity-95 mb-2">San José, Costa Rica</p>
              <p className="text-xs md:text-sm flex flex-wrap gap-2 justify-center md:justify-start">
                <a href="mailto:jalvarezruiz3@gmail.com" className="hover:underline">jalvarezruiz3@gmail.com</a>
                <span className="hidden md:inline">·</span>
                <a href="https://wa.me/50685812663?text=%C2%A1Hola!%20Te%20escribo%20despu%C3%A9s%20de%20ver%20tu%20curr%C3%ADculum.%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s." className="hover:underline">+506 8581 2663</a>
                <span className="hidden md:inline">·</span>
                <a href="https://github.com/Joseph2303" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                <span className="hidden md:inline">·</span>
                <a href="https://www.linkedin.com/in/joseph-sebastian-%C3%A1lvarez-ruiz-bb6758187/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <a href={CV_PDF_URL} download className="inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-lg font-semibold transition-colors">
                <FiDownload size={18} /> Descargar CV
              </a>
              <button onClick={handleBackToMenu} className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg font-semibold transition-colors border border-white/30">
                <FiArrowLeft size={18} /> Volver al menú
              </button>
            </div>
          </div>
        </div>
      </header>

      <main id="main" className="max-w-7xl mx-auto px-5 pb-10">
        <div className="grid lg:grid-cols-[320px_1fr] gap-5">
          {/* Sidebar */}
          <aside className="space-y-4">
            <Section title="Educación">
              <p><strong>2025</strong> Universidad Nacional (UNA) Ingeniería en Sistemas de Información (Bachillerato)</p>
              <p><strong>2023</strong> Universidad Nacional (UNA) Diplomado en Programación de Aplicaciones Informáticas</p>
              <p><strong>2021</strong> Instituto COSVIC Técnico en Soporte para Computadoras</p>
              <p><strong>2017</strong> Bachiller en Educación Media</p>
            </Section>

            <Section title="Certificaciones">
              <p><strong>2025</strong> Habilidades para la Empleabilidad, Servicio al Cliente y Herramientas Digitales (Fundación Aliarse & PADF)</p>
              <p><strong>2024</strong> Scrum Fundamentals Certified</p>
              <p><strong>2023</strong> RPA Developer Foundation Spanish</p>
            </Section>

            <Section title="Afiliación profesional (Colegiatura)">
              <p><strong>2026</strong> Colegio de Profesionales en Informática y Computación (CPIC)</p>
            </Section>

            <Section title="Capacitaciones y Congresos">
              <p><strong>2024</strong> Congreso Iberoamericano de Computación para el Desarrollo (COMPDES 2024) Participación</p>
            </Section>

            <Section title="Licencias de conducir">
              <p>B1 y A2</p>
            </Section>

            <Section title="Habilidades Blandas">
              <div className="flex flex-wrap gap-2">
                {['Comunicación efectiva', 'Trabajo en equipo', 'Resolución de problemas', 'Adaptabilidad', 'Gestión del tiempo', 'Responsabilidad', 'Pensamiento crítico', 'Creatividad', 'Autonomía', 'Servicio al cliente'].map((skill) => (
                  <span key={skill} className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </Section>
          </aside>

          {/* Main content */}
          <section className="space-y-4">
            <Card title="Perfil">
              <p className="text-justify">
                Profesional con formación universitaria y amplia experiencia en atención al cliente, gestión documental, manejo de caja y procesos administrativos. Con sólidos conocimientos en herramientas digitales, organización de tareas, redacción de documentos y trato cordial al público. Me considero responsable, proactivo, con excelente capacidad de aprendizaje y adaptabilidad. Busco aportar mis habilidades al área administrativa para contribuir al buen funcionamiento de la organización.
              </p>
            </Card>

            <Card title="Experiencia Profesional">
              <div className="space-y-6">
                <ExperienceBlock
                  title="Desarrollador Full Stack (Diseño de Software e Ingeniería Web)"
                  company="Upgo Technology"
                  period="ene. 2026 – actualidad"
                  duties={[
                    "Rol con enfoque administrativo-operativo, apoyando la gestión y organización de procesos internos.",
                    "Control y actualización de documentación e información, seguimiento de solicitudes y elaboración de reportes.",
                    "Coordinación con distintas áreas para asegurar orden, cumplimiento de tiempos y operación eficiente."
                  ]}
                />

                <ExperienceBlock
                  title="Plataforma de Información Turística (Práctica profesional)"
                  company="Municipalidad de La Cruz"
                  period="jun. 2024 – nov. 2024 · 6 meses"
                  duties={[
                    "Gestioné el flujo de información turística (destinos, actividades y servicios), asegurando actualización, orden y calidad de los contenidos.",
                    "Atendí consultas internas/externas, di seguimiento a requerimientos y registré incidencias para su resolución oportuna.",
                    "Elaboré reportes de avance y tableros básicos (visitas, tiempos de respuesta, publicaciones), facilitando la toma de decisiones del área.",
                    "Coordiné con las áreas de Turismo y Soporte para calendarizar tareas, levantar minutas y estandarizar procedimientos.",
                    "Verifiqué lineamientos de usabilidad y accesibilidad en la información publicada, mejorando la experiencia de las personas usuarias."
                  ]}
                />

                <ExperienceBlock
                  title="Sistema de Control de Empleados con Face ID"
                  company="Coriport"
                  period="feb. 2023 – jun. 2024 · 1 año 5 meses"
                  duties={[
                    "Apoyé el levantamiento de requerimientos con RR. HH. y Operaciones, documentando alcances, casos de uso y flujos de trabajo.",
                    "Organicé el plan de trabajo (cronograma, hitos, responsables) y di seguimiento mediante tableros de tareas y reportes de estado.",
                    "Redacté minutas, gestioné acuerdos y controlé versiones de documentos, asegurando trazabilidad y cumplimiento de entregables.",
                    "Coordiné pruebas funcionales con usuarios clave, registré hallazgos y gestioné su cierre antes de la puesta en marcha.",
                    "Colaboré en la preparación de manuales de uso."
                  ]}
                />

                <ExperienceBlock
                  title="Otras Experiencias"
                  duties={[
                    "Asociación de Estudiantes de la Universidad Nacional (ASO-UNA): Participé en la coordinación de talleres y eventos, gestioné inscripciones y asistencia, y elaboración de reportes con resultados."
                  ]}
                />
              </div>
            </Card>

            <Card title="Habilidades Técnicas">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">Conocimientos Informáticos</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                    <li><strong>Microsoft Excel</strong> — Nivel intermedio.</li>
                    <li><strong>Paquetes Ofimáticos</strong> — Nivel avanzado.</li>
                    <li><strong>Correo Electrónico y Herramientas Web</strong> — Manejo eficiente de plataformas digitales para comunicación y organización.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">Gestión de Documentos y Archivos</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>Microsoft OneDrive</li>
                    <li>Google Drive</li>
                    <li>Dropbox</li>
                    <li>PDF (edición, combinación y firma digital)</li>
                    <li>Escaneo y digitalización de documentos</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">Presentaciones y Comunicación</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>Microsoft PowerPoint</li>
                    <li>Canva</li>
                    <li>Google Slides</li>
                    <li>Zoom, Google Meet, Microsoft Teams</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">Manejo de Herramientas Administrativas</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                    <li><strong>Correo electrónico</strong> (Outlook, Gmail)</li>
                    <li><strong>Calendarios compartidos</strong> y gestión de citas</li>
                    <li><strong>Redacción</strong> de oficios, informes y cartas formales</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">Sistemas de Organización y Productividad</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>Microsoft Outlook (calendario y tareas)</li>
                    <li>Google Calendar</li>
                    <li>Microsoft OneNote, Evernote</li>
                    <li>Microsoft To Do, Google Tasks, recordatorios</li>
                    <li>Agenda física y digital</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">Atención al Cliente y Redacción</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                    <li><strong>Comunicación escrita</strong> clara y profesional</li>
                    <li><strong>Respuestas a consultas</strong>, seguimiento de tareas y elaboración de reportes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">Herramientas Asistidas por IA</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                    <li><strong>ChatGPT, Grammarly, Tome, Gamma</strong></li>
                    <li>Uso para redacción, síntesis de información y generación de contenido</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card title="Recomendaciones">
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>MSc. Andrés Alberto Cortés Fuentes — Jefe del Departamento de Tecnologías de Información, Municipalidad de Carrillo</li>
                <li>Gretel Vega Alemán — Municipalidad de La Cruz, Gestora de Turismo</li>
                <li>MSc. Eddier López López — Coordinador Académico de Ingeniería en Sistemas de Información, UNA</li>
              </ul>
            </Card>
          </section>
        </div>
      </main>

      <Footer />

      {/* FAB buttons (mobile) */}
      <div className="fixed right-4 bottom-4 flex gap-2 items-center z-40 lg:hidden">
        <a
          href={CV_PDF_URL}
          download
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold text-sm shadow-lg"
          aria-label="Descargar CV"
        >
          <FiDownload size={18} /> Descargar CV
        </a>
        <button
          onClick={handleBackToMenu}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gray-700 text-white font-semibold text-sm shadow-lg"
          aria-label="Volver al menú"
        >
          <FiArrowLeft size={18} /> Menú
        </button>
      </div>
    </div>
  )
}

// Componentes auxiliares
const Section = ({ title, children }) => (
  <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-sm">
    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">{title}</h2>
    <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
      {children}
    </div>
  </section>
)

const Card = ({ title, children }) => (
  <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-xl shadow-sm">
    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{title}</h2>
    <div className="text-gray-700 dark:text-gray-300">
      {children}
    </div>
  </article>
)

const Experience = ({ title, description }) => (
  <div className="mb-4">
    <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
    {Array.isArray(description) ? (
      description.map((para, idx) => (
        <p key={idx} className="text-gray-700 dark:text-gray-300 mb-2 text-justify">{para}</p>
      ))
    ) : (
      <p className="text-gray-700 dark:text-gray-300 text-justify">{description}</p>
    )}
  </div>
)

const SkillGroup = ({ title, skills, children }) => (
  <div>
    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">{title}</h3>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill) => (
        <SkillItem key={skill.label} src={skill.src} label={skill.label} />
      ))}
    </div>
    {children}
  </div>
)

const SkillItem = ({ src, label }) => (
  <div className="flex flex-col items-center gap-2 text-center transition-transform hover:-translate-y-1">
    <img 
      src={src} 
      alt={label} 
      className="w-14 h-14 object-contain rounded-lg bg-purple-50 dark:bg-gray-700 p-2 transition-colors hover:bg-purple-100 dark:hover:bg-purple-600"
    />
    <span className="text-xs font-medium text-gray-600 dark:text-gray-400 max-w-[80px]">{label}</span>
  </div>
)

const ExperienceBlock = ({ title, company, period, duties }) => (
  <div className="pb-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0 last:pb-0">
    <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-1">{title}</h3>
    {company && <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-1">{company} {period && `| ${period}`}</p>}
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm">
      {duties.map((duty, idx) => (
        <li key={idx}>{duty}</li>
      ))}
    </ul>
  </div>
)



