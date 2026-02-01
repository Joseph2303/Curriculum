import { useNavigate } from 'react-router-dom'
import { FiDownload, FiArrowLeft } from 'react-icons/fi'
import { ThemeToggle } from './ThemeToggle'
import { Footer } from './Footer'

export const CVEngineer = () => {
  const navigate = useNavigate()

  const handleBackToMenu = () => {
    try {
      localStorage.removeItem('cv-choice')
    } catch (e) {}
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <ThemeToggle />
      <a className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:px-3 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded" href="#main">
        Saltar al contenido
      </a>
      
      {/* Header */}
      <header className="mb-6">
        <div className="max-w-7xl mx-auto px-5 py-9">
          <div className="grid md:grid-cols-[auto_1fr_auto] grid-cols-1 gap-5 items-center bg-gradient-to-r from-teal-500 to-blue-500 dark:from-blue-600 dark:to-indigo-700 p-6 rounded-2xl text-white shadow-2xl">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white text-teal-500 dark:text-blue-600 grid place-items-center font-extrabold text-3xl shadow-inner border-4 border-white/60 mx-auto md:mx-0">
              JA
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold mb-1">Joseph Sebastián Álvarez Ruiz</h1>
              <p className="text-base md:text-lg opacity-95 mb-1">Ingeniero en Sistemas de Información</p>
              <p className="text-sm opacity-95 mb-2">San José, Costa Rica</p>
              <p className="text-xs md:text-sm flex flex-wrap gap-2 justify-center md:justify-start">
                <a href="mailto:jalvarezruiz3@gmail.com" className="hover:underline">jalvarezruiz3@gmail.com</a>
                <span className="hidden md:inline">·</span>
                <a href="https://wa.me/50685812663" className="hover:underline">+506 8581 2663</a>
                <span className="hidden md:inline">·</span>
                <a href="https://github.com/Joseph2303" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                <span className="hidden md:inline">·</span>
                <a href="https://www.linkedin.com/in/joseph-sebastian-%C3%A1lvarez-ruiz-bb6758187/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <a href="/files/Joseph Álvarez Ruiz..pdf" download className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition-colors">
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
                  <span key={skill} className="inline-block bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-xs">
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
                Profesional en Ingeniería en Sistemas de Información, con interés y entusiasmo por la tecnología y el desarrollo de software. Cuento con experiencia en programación, diseño y gestión de bases de datos, así como participación en proyectos tecnológicos. Me caracterizo por ser proactivo, orientado a la resolución de problemas y con disposición para aprender y adaptarme a nuevos retos. Estoy motivado para aplicar mis conocimientos y aportar soluciones creativas y eficientes en el ámbito tecnológico.
              </p>
            </Card>

            <Card title="Experiencia Profesional">
              <div className="space-y-4">
                <Experience
                  title="Desarrollador Full Stack (Diseño de Software e Ingeniería Web) | Upgo Technology | Enero 2026 – actualidad"
                  description="Actualmente, me desempeño como Desarrollador Full Stack, participando en el análisis, diseño y desarrollo de soluciones web. En el frontend implemento interfaces y flujos de usuario, mejorando usabilidad, accesibilidad y rendimiento. En el backend desarrollo y mantengo APIs/servicios, lógica de negocio e integración con bases de datos, asegurando validaciones, seguridad y buen manejo de errores. Además, colaboro en arquitectura, documentación y mantenimiento evolutivo, aplicando buenas prácticas de calidad para entregar funcionalidades escalables y estables."
                />
                
                <Experience
                  title="Desarrollador Frontend – Plataforma de Información Turística | jun. 2024 – nov. 2024 · 6 meses"
                  description={[
                    "Durante mi práctica profesional en la Municipalidad de La Cruz, diseñé, desarrollé y mantuve la interfaz de usuario y la experiencia visual de una plataforma de información turística, utilizando React y TypeScript para crear una arquitectura modular, escalable y mantenible.",
                    "Implementé vistas interactivas que permiten mostrar destinos turísticos, actividades y gestionar de usuarios, asegurando una experiencia fluida y atractiva. Me encargué de consumir los endpoints del backend para integrar datos en tiempo real, y apliqué prácticas de optimización, usabilidad y accesibilidad para mejorar el rendimiento y la experiencia del usuario."
                  ]}
                />

                <Experience
                  title="Desarrollo de un Sistema de Control de Empleados con Face ID | feb. 2023 – jun. 2024 · 1 año 5 meses"
                  description={[
                    "Durante los cursos de Ingeniería I, II y III, desarrollé un Sistema de Control de trabajadores para la empresa de Coriport que permite registrar e identificar a las personas colaboradoras mediante reconocimiento facial, garantizando seguridad y precisión en el proceso. Utilicé Laravel para el backend, lo que facilitó una gestión robusta de la lógica del servidor y de la base de datos. En el frontend implementé JavaScript, junto con HTML y CSS para una interfaz dinámica, visualmente atractiva y fácil de usar.",
                    "Además de la construcción técnica, realicé la planificación del proyecto, elaborando casos de uso, diagramas de clases y diagramas de flujo para definir la arquitectura y los procesos. Gestionamos el trabajo en Azure DevOps para organizar tareas, coordinar al equipo y dar seguimiento detallado al avance, asegurando un desarrollo ordenado y eficiente."
                  ]}
                />

                <div className="mt-4">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Otras Experiencias</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Asociación de Estudiantes de la Universidad Nacional (ASO-UNA): Participé en la coordinación de talleres y eventos, gestioné inscripciones y asistencia, y elaboración de reportes con resultados.</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card title="Habilidades Técnicas">
              <div className="space-y-6">
                <SkillGroup title="Lenguajes de Programación" skills={[
                  { src: "img/iconosInge/python_18894.png", label: "Python" },
                  { src: "img/iconosInge/java_original_wordmark_logo_icon_146459.png", label: "Java" },
                  { src: "img/iconosInge/javascript_icon_130900.png", label: "JavaScript" },
                  { src: "img/iconosInge/c_icon_132529.png", label: "C++" },
                  { src: "img/iconosInge/php_icon_130857.png", label: "PHP" },
                  { src: "img/iconosInge/typescript_original_logo_icon_146317.png", label: "TypeScript" },
                ]} />

                <SkillGroup title="Frameworks y Librerías" skills={[
                  { src: "img/iconosInge/nodejs_original_wordmark_logo_icon_146412.png", label: "Node.js" },
                  { src: "img/iconosInge/vuejs_original_wordmark_logo_icon_146305.png", label: "Vue.js" },
                  { src: "img/iconosInge/react_original_wordmark_logo_icon_146375.png", label: "React" },
                  { src: "img/iconosInge/bootstrap_plain_logo_icon_146619.png", label: "Bootstrap" },
                  { src: "img/iconosInge/angular_logo_icon_169595.png", label: "Angular" },
                  { src: "img/iconosInge/logo_pure@2x.png", label: "Pure.CSS" },
                  { src: "img/iconosInge/foundation_original_wordmark_logo_icon_146520.png", label: "Foundation" },
                  { src: "img/iconosInge/html_original_wordmark_logo_icon_146478.png", label: "HTML" },
                  { src: "img/iconosInge/css_original_wordmark_logo_icon_146576.png", label: "CSS" },
                ]} />

                <SkillGroup title="Bases de Datos" skills={[
                  { src: "img/iconosInge/mysql_original_wordmark_logo_icon_146417.png", label: "MySQL" },
                  { src: "img/iconosInge/mongodb_original_wordmark_logo_icon_146425.png", label: "MongoDB" },
                  { src: "img/iconosInge/dbs-sqlserver_icon-icons.com_50903.png", label: "SQL Server" },
                  { src: "img/iconosInge/sqlite_logo_icon_169724.png", label: "SQLite" },
                ]} />

                <SkillGroup title="Control de Versiones" skills={[
                  { src: "img/iconosInge/git_original_wordmark_logo_icon_146510.png", label: "Git" },
                  { src: "img/iconosInge/github-logo_icon-icons.com_73546.png", label: "GitHub" },
                ]} />

                <SkillGroup title="Herramientas de Desarrollo" skills={[
                  { src: "img/iconosInge/microsoft_visual_studio_code_alt_macos_bigsur_icon_189954.png", label: "VS Code" },
                  { src: "img/iconosInge/codeoutlinedprogrammingsigns_81143.png", label: "ZinjaI" },
                  { src: "img/iconosInge/microsoft_visual_studio_macos_bigsur_icon_189958.png", label: "Visual Studio" },
                  { src: "img/iconosInge/intellij_macos_bigsur_icon_190061.png", label: "IntelliJ" },
                ]} />

                <SkillGroup title="IA Generativa y Herramientas Asistidas por IA" skills={[
                  { src: "img/iconosInge/chatgpt_logo_chatgpt_logo_square_green_gpt_ia_openai_icon_264977.png", label: "ChatGPT" },
                  { src: "img/iconosInge/microsoft_icon_130876.png", label: "Copilot" },
                  { src: "img/iconosInge/claude-logo.webp", label: "Claude" },
                  { src: "img/iconosInge/ia_writer_dark_macos_bigsur_icon_189510.png", label: "Monica" },
                  { src: "img/iconosInge/ia_writer_dark_macos_bigsur_icon_189510.png", label: "Midjourney" },
                  { src: "img/iconosInge/ia_writer_dark_macos_bigsur_icon_189510.png", label: "DALL-E" },
                  { src: "img/iconosInge/ia_writer_dark_macos_bigsur_icon_189510.png", label: "Tome" },
                  { src: "img/iconosInge/ia_writer_dark_macos_bigsur_icon_189510.png", label: "Gamma" },
                  { src: "img/iconosInge/ia_writer_dark_macos_bigsur_icon_189510.png", label: "V0" },
                  { src: "img/iconosInge/ia_writer_dark_macos_bigsur_icon_189510.png", label: "Blackbox" },
                ]} />

                <SkillGroup title="Metodologías de Desarrollo" skills={[
                  { src: "img/iconosInge/scrum_backlog_process_project_management_agile_approache_dev_icon_261689.png", label: "Scrum" },
                  { src: "img/iconosInge/web_development_trello_agile_kanban_icon_265401.png", label: "Kanban" },
                ]} />

                <SkillGroup title="Herramientas de Colaboración y Gestión" skills={[
                  { src: "img/iconosInge/figma_logo_icon_147289.png", label: "Figma" },
                  { src: "img/iconosInge/jira_logo_icon_147274.png", label: "Jira" },
                  { src: "img/iconosInge/azure_devops_logo_icon_145466.png", label: "Azure DevOps" },
                  { src: "img/iconosInge/microsoft_icon_130876.png", label: "Loop" },
                ]} />

                <SkillGroup title="Conocimientos Informáticos" skills={[
                  { src: "img/iconosInge/4202106excellogomicrosoftms-115582_115719.png", label: "Excel" },
                  { src: "img/iconosInge/office365_icon-icons.com_61639.png", label: "Office" },
                  { src: "img/iconosInge/4202011emailgmaillogomailsocialsocialmedia-115677_115624.png", label: "Email" },
                ]}>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Microsoft Excel: Nivel intermedio. Paquetes Ofimáticos: Nivel avanzado. Correo Electrónico y Herramientas Web: Manejo eficiente de plataformas digitales para comunicación y organización.
                  </p>
                </SkillGroup>

                <SkillGroup title="Gestión de Documentos y Archivos" skills={[
                  { src: "img/iconosInge/OneDrive_23654.png", label: "OneDrive" },
                  { src: "img/iconosInge/4201991drivegooglegoogledrivelogosocialsocialmedia-115718_115583.png", label: "Drive" },
                  { src: "img/iconosInge/dropbox_tile_logo_icon_168230.png", label: "Dropbox" },
                  { src: "img/iconosInge/pdf_filetype_icon_177525.png", label: "PDF" },
                ]}>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Microsoft OneDrive, Google Drive, Dropbox, PDF (edición, combinación y firma digital), escaneo y digitalización de documentos.
                  </p>
                </SkillGroup>
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
          href="/files/Joseph Álvarez Ruiz..pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-sm shadow-lg"
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
      className="w-14 h-14 object-contain rounded-lg bg-teal-50 dark:bg-gray-700 p-2 transition-colors hover:bg-teal-100 dark:hover:bg-teal-600"
    />
    <span className="text-xs font-medium text-gray-600 dark:text-gray-400 max-w-[80px]">{label}</span>
  </div>
)
