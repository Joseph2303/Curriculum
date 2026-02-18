import { useNavigate } from 'react-router-dom'
import { FiDownload, FiArrowLeft } from 'react-icons/fi'
import { ThemeToggle } from './ThemeToggle'
import { Footer } from './Footer'
import { useAutoReloadOnce } from '../hooks/useAutoReloadOnce'

const CV_PDF_URL = (import.meta.env.BASE_URL || '/') + 'files/Joseph-Alvarez-Ruiz-CV.pdf'

export const CVAssistant = () => {
  const navigate = useNavigate()
  
  // Auto-reload una sola vez si las imÃ¡genes no cargan
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
              <h1 className="text-2xl md:text-3xl font-bold mb-1">Joseph SebastiÃ¡n Ãlvarez Ruiz</h1>
              <p className="text-base md:text-lg opacity-95 mb-1">Asistente Administrativo | Profesional en GestiÃ³n y TecnologÃ­a</p>
              <p className="text-sm opacity-95 mb-2">San JosÃ©, Costa Rica</p>
              <p className="text-xs md:text-sm flex flex-wrap gap-2 justify-center md:justify-start">
                <a href="mailto:jalvarezruiz3@gmail.com" className="hover:underline">jalvarezruiz3@gmail.com</a>
                <span className="hidden md:inline">Â·</span>
                <a href="https://wa.me/50685812663?text=%C2%A1Hola!%20Te%20escribo%20despu%C3%A9s%20de%20ver%20tu%20curr%C3%ADculum.%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s." className="hover:underline">+506 8581 2663</a>
                <span className="hidden md:inline">Â·</span>
                <a href="https://github.com/Joseph2303" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                <span className="hidden md:inline">Â·</span>
                <a href="https://www.linkedin.com/in/joseph-sebastian-%C3%A1lvarez-ruiz-bb6758187/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <a href={CV_PDF_URL} download className="inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-lg font-semibold transition-colors">
                <FiDownload size={18} /> Descargar CV
              </a>
              <button onClick={handleBackToMenu} className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-lg font-semibold transition-colors border border-white/30">
                <FiArrowLeft size={18} /> Volver al menÃº
              </button>
            </div>
          </div>
        </div>
      </header>

      <main id="main" className="max-w-7xl mx-auto px-5 pb-10">
        <div className="grid lg:grid-cols-[320px_1fr] gap-5">
          {/* Sidebar */}
          <aside className="space-y-4">
            <Section title="EducaciÃ³n">
              <p><strong>2025</strong> Universidad Nacional (UNA) IngenierÃ­a en Sistemas de InformaciÃ³n (Bachillerato)</p>
              <p><strong>2023</strong> Universidad Nacional (UNA) Diplomado en ProgramaciÃ³n de Aplicaciones InformÃ¡ticas</p>
              <p><strong>2021</strong> Instituto COSVIC TÃ©cnico en Soporte para Computadoras</p>
              <p><strong>2017</strong> Bachiller en EducaciÃ³n Media</p>
            </Section>

            <Section title="Certificaciones">
              <p><strong>2025</strong> Habilidades para la Empleabilidad, Servicio al Cliente y Herramientas Digitales (FundaciÃ³n Aliarse & PADF)</p>
              <p><strong>2024</strong> Scrum Fundamentals Certified</p>
              <p><strong>2023</strong> RPA Developer Foundation Spanish</p>
            </Section>

            <Section title="AfiliaciÃ³n profesional (Colegiatura)">
              <p><strong>2026</strong> Colegio de Profesionales en InformÃ¡tica y ComputaciÃ³n (CPIC)</p>
            </Section>

            <Section title="Capacitaciones y Congresos">
              <p><strong>2024</strong> Congreso Iberoamericano de ComputaciÃ³n para el Desarrollo (COMPDES 2024) ParticipaciÃ³n</p>
            </Section>

            <Section title="Licencias de conducir">
              <p>B1 y A2</p>
            </Section>

            <Section title="Habilidades Blandas">
              <div className="flex flex-wrap gap-2">
                {['ComunicaciÃ³n efectiva', 'Trabajo en equipo', 'ResoluciÃ³n de problemas', 'Adaptabilidad', 'GestiÃ³n del tiempo', 'Responsabilidad', 'Pensamiento crÃ­tico', 'Creatividad', 'AutonomÃ­a', 'Servicio al cliente'].map((skill) => (
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
                Profesional con formaciÃ³n universitaria y amplia experiencia en atenciÃ³n al cliente, gestiÃ³n documental, manejo de caja y procesos administrativos. Con sÃ³lidos conocimientos en herramientas digitales, organizaciÃ³n de tareas, redacciÃ³n de documentos y trato cordial al pÃºblico. Me considero responsable, proactivo, con excelente capacidad de aprendizaje y adaptabilidad. Busco aportar mis habilidades al Ã¡rea administrativa para contribuir al buen funcionamiento de la organizaciÃ³n.
              </p>
            </Card>

            <Card title="Experiencia Profesional">
              <div className="space-y-6">
                <ExperienceBlock
                  title="Desarrollador Full Stack (DiseÃ±o de Software e IngenierÃ­a Web)"
                  company="Upgo Technology"
                  period="ene. 2026 â€“ actualidad"
                  duties={[
                    "Rol con enfoque administrativo-operativo, apoyando la gestiÃ³n y organizaciÃ³n de procesos internos.",
                    "Control y actualizaciÃ³n de documentaciÃ³n e informaciÃ³n, seguimiento de solicitudes y elaboraciÃ³n de reportes.",
                    "CoordinaciÃ³n con distintas Ã¡reas para asegurar orden, cumplimiento de tiempos y operaciÃ³n eficiente."
                  ]}
                />

                <ExperienceBlock
                  title="Plataforma de InformaciÃ³n TurÃ­stica (PrÃ¡ctica profesional)"
                  company="Municipalidad de La Cruz"
                  period="jun. 2024 â€“ nov. 2024 Â· 6 meses"
                  duties={[
                    "GestionÃ© el flujo de informaciÃ³n turÃ­stica (destinos, actividades y servicios), asegurando actualizaciÃ³n, orden y calidad de los contenidos.",
                    "AtendÃ­ consultas internas/externas, di seguimiento a requerimientos y registrÃ© incidencias para su resoluciÃ³n oportuna.",
                    "ElaborÃ© reportes de avance y tableros bÃ¡sicos (visitas, tiempos de respuesta, publicaciones), facilitando la toma de decisiones del Ã¡rea.",
                    "CoordinÃ© con las Ã¡reas de Turismo y Soporte para calendarizar tareas, levantar minutas y estandarizar procedimientos.",
                    "VerifiquÃ© lineamientos de usabilidad y accesibilidad en la informaciÃ³n publicada, mejorando la experiencia de las personas usuarias."
                  ]}
                />

                <ExperienceBlock
                  title="Sistema de Control de Empleados con Face ID"
                  company="Coriport"
                  period="feb. 2023 â€“ jun. 2024 Â· 1 aÃ±o 5 meses"
                  duties={[
                    "ApoyÃ© el levantamiento de requerimientos con RR. HH. y Operaciones, documentando alcances, casos de uso y flujos de trabajo.",
                    "OrganicÃ© el plan de trabajo (cronograma, hitos, responsables) y di seguimiento mediante tableros de tareas y reportes de estado.",
                    "RedactÃ© minutas, gestionÃ© acuerdos y controlÃ© versiones de documentos, asegurando trazabilidad y cumplimiento de entregables.",
                    "CoordinÃ© pruebas funcionales con usuarios clave, registrÃ© hallazgos y gestionÃ© su cierre antes de la puesta en marcha.",
                    "ColaborÃ© en la preparaciÃ³n de manuales de uso."
                  ]}
                />

                <ExperienceBlock
                  title="Otras Experiencias"
                  duties={[
                    "AsociaciÃ³n de Estudiantes de la Universidad Nacional (ASO-UNA): ParticipÃ© en la coordinaciÃ³n de talleres y eventos, gestionÃ© inscripciones y asistencia, y elaboraciÃ³n de reportes con resultados."
                  ]}
                />
              </div>
            </Card>

            <Card title="Habilidades TÃ©cnicas">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">Conocimientos InformÃ¡ticos</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                    <li><strong>Microsoft Excel</strong> â€” Nivel intermedio.</li>
                    <li><strong>Paquetes OfimÃ¡ticos</strong> â€” Nivel avanzado.</li>
                    <li><strong>Correo ElectrÃ³nico y Herramientas Web</strong> â€” Manejo eficiente de plataformas digitales para comunicaciÃ³n y organizaciÃ³n.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">GestiÃ³n de Documentos y Archivos</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>Microsoft OneDrive</li>
                    <li>Google Drive</li>
                    <li>Dropbox</li>
                    <li>PDF (ediciÃ³n, combinaciÃ³n y firma digital)</li>
                    <li>Escaneo y digitalizaciÃ³n de documentos</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">Presentaciones y ComunicaciÃ³n</h3>
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
                    <li><strong>Correo electrÃ³nico</strong> (Outlook, Gmail)</li>
                    <li><strong>Calendarios compartidos</strong> y gestiÃ³n de citas</li>
                    <li><strong>RedacciÃ³n</strong> de oficios, informes y cartas formales</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">Sistemas de OrganizaciÃ³n y Productividad</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>Microsoft Outlook (calendario y tareas)</li>
                    <li>Google Calendar</li>
                    <li>Microsoft OneNote, Evernote</li>
                    <li>Microsoft To Do, Google Tasks, recordatorios</li>
                    <li>Agenda fÃ­sica y digital</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">AtenciÃ³n al Cliente y RedacciÃ³n</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                    <li><strong>ComunicaciÃ³n escrita</strong> clara y profesional</li>
                    <li><strong>Respuestas a consultas</strong>, seguimiento de tareas y elaboraciÃ³n de reportes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">Herramientas Asistidas por IA</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                    <li><strong>ChatGPT, Grammarly, Tome, Gamma</strong></li>
                    <li>Uso para redacciÃ³n, sÃ­ntesis de informaciÃ³n y generaciÃ³n de contenido</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card title="Recomendaciones">
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>MSc. AndrÃ©s Alberto CortÃ©s Fuentes â€” Jefe del Departamento de TecnologÃ­as de InformaciÃ³n, Municipalidad de Carrillo</li>
                <li>Gretel Vega AlemÃ¡n â€” Municipalidad de La Cruz, Gestora de Turismo</li>
                <li>MSc. Eddier LÃ³pez LÃ³pez â€” Coordinador AcadÃ©mico de IngenierÃ­a en Sistemas de InformaciÃ³n, UNA</li>
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
          aria-label="Volver al menÃº"
        >
          <FiArrowLeft size={18} /> MenÃº
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


