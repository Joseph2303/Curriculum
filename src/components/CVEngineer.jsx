import { useNavigate } from 'react-router-dom'
import { useImagePreload } from '../hooks/useImagePreload'
import { useAutoReloadOnce } from '../hooks/useAutoReloadOnce'
import { ImageWithFallback } from './ImageWithFallback'
import { CVPage, Card, Sidebar, Timeline, TimelineItem, References, references, accents } from './CVShared'

// Lista de todas las imágenes a precargar
const imageUrls = [
  "/iconosInge/python_18894.png",
  "/iconosInge/java_original_wordmark_logo_icon_146459.png",
  "/iconosInge/javascript_icon_130900.png",
  "/iconosInge/c_icon_132529.png",
  "/iconosInge/php_icon_130857.png",
  "/iconosInge/typescript_original_logo_icon_146317.png",
  "/iconosInge/nodejs_original_wordmark_logo_icon_146412.png",
  "/iconosInge/vuejs_original_wordmark_logo_icon_146305.png",
  "/iconosInge/react_original_wordmark_logo_icon_146375.png",
  "/iconosInge/bootstrap_plain_logo_icon_146619.png",
  "/iconosInge/angular_logo_icon_169595.png",
  "/iconosInge/logo_pure@2x.png",
  "/iconosInge/foundation_original_wordmark_logo_icon_146520.png",
  "/iconosInge/html_original_wordmark_logo_icon_146478.png",
  "/iconosInge/css_original_wordmark_logo_icon_146576.png",
  "/iconosInge/mysql_original_wordmark_logo_icon_146417.png",
  "/iconosInge/mongodb_original_wordmark_logo_icon_146425.png",
  "/iconosInge/dbs-sqlserver_icon-icons.com_50903.png",
  "/iconosInge/sqlite_logo_icon_169724.png",
  "/iconosInge/git_original_wordmark_logo_icon_146510.png",
  "/iconosInge/github-logo_icon-icons.com_73546.png",
  "/iconosInge/microsoft_visual_studio_code_alt_macos_bigsur_icon_189954.png",
  "/iconosInge/codeoutlinedprogrammingsigns_81143.png",
  "/iconosInge/microsoft_visual_studio_macos_bigsur_icon_189958.png",
  "/iconosInge/intellij_macos_bigsur_icon_190061.png",
  "/iconosInge/chatgpt_logo_chatgpt_logo_square_green_gpt_ia_openai_icon_264977.png",
  "/iconosInge/microsoft_icon_130876.png",
  "/iconosInge/claude-logo.webp",
  "/iconosInge/ia_writer_dark_macos_bigsur_icon_189510.png",
  "/iconosInge/scrum_backlog_process_project_management_agile_approache_dev_icon_261689.png",
  "/iconosInge/web_development_trello_agile_kanban_icon_265401.png",
  "/iconosInge/figma_logo_icon_147289.png",
  "/iconosInge/jira_logo_icon_147274.png",
  "/iconosInge/azure_devops_logo_icon_145466.png",
  "/iconosInge/4202106excellogomicrosoftms-115582_115719.png",
  "/iconosInge/office365_icon-icons.com_61639.png",
  "/iconosInge/4202011emailgmaillogomailsocialsocialmedia-115677_115624.png",
  "/iconosInge/OneDrive_23654.png",
  "/iconosInge/4201991drivegooglegoogledrivelogosocialsocialmedia-115718_115583.png",
  "/iconosInge/dropbox_tile_logo_icon_168230.png",
  "/iconosInge/pdf_filetype_icon_177525.png",
]

const CV_PDF_URL = (import.meta.env.BASE_URL || '/') + 'files/Joseph-Alvarez-Ruiz.pdf'
const ACCENT = 'blue'

const icon = (file) => `/iconosInge/${file}`

const skillGroups = [
  {
    title: 'Lenguajes de programación',
    skills: [
      { src: icon('python_18894.png'), label: 'Python' },
      { src: icon('java_original_wordmark_logo_icon_146459.png'), label: 'Java' },
      { src: icon('javascript_icon_130900.png'), label: 'JavaScript' },
      { src: icon('c_icon_132529.png'), label: 'C++' },
      { src: icon('php_icon_130857.png'), label: 'PHP' },
      { src: icon('typescript_original_logo_icon_146317.png'), label: 'TypeScript' },
    ],
  },
  {
    title: 'Frameworks y librerías',
    skills: [
      { src: icon('nodejs_original_wordmark_logo_icon_146412.png'), label: 'Node.js' },
      { src: icon('vuejs_original_wordmark_logo_icon_146305.png'), label: 'Vue.js' },
      { src: icon('react_original_wordmark_logo_icon_146375.png'), label: 'React' },
      { src: icon('bootstrap_plain_logo_icon_146619.png'), label: 'Bootstrap' },
      { src: icon('angular_logo_icon_169595.png'), label: 'Angular' },
      { src: icon('logo_pure@2x.png'), label: 'Pure.CSS' },
      { src: icon('foundation_original_wordmark_logo_icon_146520.png'), label: 'Foundation' },
      { src: icon('html_original_wordmark_logo_icon_146478.png'), label: 'HTML' },
      { src: icon('css_original_wordmark_logo_icon_146576.png'), label: 'CSS' },
    ],
  },
  {
    title: 'Bases de datos',
    skills: [
      { src: icon('mysql_original_wordmark_logo_icon_146417.png'), label: 'MySQL' },
      { src: icon('mongodb_original_wordmark_logo_icon_146425.png'), label: 'MongoDB' },
      { src: icon('dbs-sqlserver_icon-icons.com_50903.png'), label: 'SQL Server' },
      { src: icon('sqlite_logo_icon_169724.png'), label: 'SQLite' },
    ],
  },
  {
    title: 'Control de versiones',
    skills: [
      { src: icon('git_original_wordmark_logo_icon_146510.png'), label: 'Git' },
      { src: icon('github-logo_icon-icons.com_73546.png'), label: 'GitHub' },
    ],
  },
  {
    title: 'Herramientas de desarrollo',
    skills: [
      { src: icon('microsoft_visual_studio_code_alt_macos_bigsur_icon_189954.png'), label: 'VS Code' },
      { src: icon('codeoutlinedprogrammingsigns_81143.png'), label: 'ZinjaI' },
      { src: icon('microsoft_visual_studio_macos_bigsur_icon_189958.png'), label: 'Visual Studio' },
      { src: icon('intellij_macos_bigsur_icon_190061.png'), label: 'IntelliJ' },
    ],
  },
  {
    title: 'IA generativa y herramientas asistidas por IA',
    skills: [
      { src: icon('chatgpt_logo_chatgpt_logo_square_green_gpt_ia_openai_icon_264977.png'), label: 'ChatGPT' },
      { src: icon('microsoft_icon_130876.png'), label: 'Copilot' },
      { src: icon('claude-logo.webp'), label: 'Claude' },
    ],
    extra: ['Monica', 'Midjourney', 'DALL-E', 'Tome', 'Gamma', 'V0', 'Blackbox'],
  },
  {
    title: 'Metodologías de desarrollo',
    skills: [
      { src: icon('scrum_backlog_process_project_management_agile_approache_dev_icon_261689.png'), label: 'Scrum' },
      { src: icon('web_development_trello_agile_kanban_icon_265401.png'), label: 'Kanban' },
    ],
  },
  {
    title: 'Colaboración y gestión',
    skills: [
      { src: icon('figma_logo_icon_147289.png'), label: 'Figma' },
      { src: icon('jira_logo_icon_147274.png'), label: 'Jira' },
      { src: icon('azure_devops_logo_icon_145466.png'), label: 'Azure DevOps' },
      { src: icon('microsoft_icon_130876.png'), label: 'Loop' },
    ],
  },
  {
    title: 'Conocimientos informáticos',
    skills: [
      { src: icon('4202106excellogomicrosoftms-115582_115719.png'), label: 'Excel' },
      { src: icon('office365_icon-icons.com_61639.png'), label: 'Office' },
      { src: icon('4202011emailgmaillogomailsocialsocialmedia-115677_115624.png'), label: 'Email' },
    ],
    note: 'Microsoft Excel: nivel intermedio. Paquetes ofimáticos: nivel avanzado. Correo electrónico y herramientas web: manejo eficiente de plataformas digitales para comunicación y organización.',
  },
  {
    title: 'Gestión de documentos y archivos',
    skills: [
      { src: icon('OneDrive_23654.png'), label: 'OneDrive' },
      { src: icon('4201991drivegooglegoogledrivelogosocialsocialmedia-115718_115583.png'), label: 'Drive' },
      { src: icon('dropbox_tile_logo_icon_168230.png'), label: 'Dropbox' },
      { src: icon('pdf_filetype_icon_177525.png'), label: 'PDF' },
    ],
    note: 'Microsoft OneDrive, Google Drive, Dropbox, PDF (edición, combinación y firma digital), escaneo y digitalización de documentos.',
  },
]

export const CVEngineer = () => {
  const navigate = useNavigate()
  useImagePreload(imageUrls)

  // Auto-reload una sola vez si las imágenes no cargan en Netlify
  useAutoReloadOnce()

  const handleBackToMenu = () => {
    try {
      localStorage.removeItem('cv-choice')
    } catch (e) {}
    navigate('/')
  }

  return (
    <CVPage
      accent={ACCENT}
      eyebrow="Currículum · Perfil técnico"
      role="Ingeniero en Sistemas de Información · Desarrollador Full Stack"
      pdfUrl={CV_PDF_URL}
      onBack={handleBackToMenu}
    >
      <Sidebar accent={ACCENT} />

      <div className="space-y-6 min-w-0">
        <Card title="Perfil profesional" accent={ACCENT}>
          <p className="leading-relaxed">
            Profesional en Ingeniería en Sistemas de Información, con interés y entusiasmo por la tecnología y el
            desarrollo de software. Cuento con experiencia en programación, diseño y gestión de bases de datos, así como
            participación en proyectos tecnológicos. Me caracterizo por ser proactivo, orientado a la resolución de
            problemas y con disposición para aprender y adaptarme a nuevos retos. Estoy motivado para aplicar mis
            conocimientos y aportar soluciones creativas y eficientes en el ámbito tecnológico.
          </p>
        </Card>

        <Card title="Experiencia profesional" accent={ACCENT}>
          <Timeline>
            <TimelineItem
              accent={ACCENT}
              title="Desarrollador Full Stack / Soporte e Infraestructura TI"
              company="Upgo Technology"
              period="ene. 2026 – actualidad"
              paragraphs={[
                'Actualmente, me desempeño como Desarrollador Full Stack, participando en el análisis, diseño y desarrollo de soluciones web. En el frontend implemento interfaces y flujos de usuario, mejorando usabilidad, accesibilidad y rendimiento. En el backend desarrollo y mantengo APIs/servicios, lógica de negocio e integración con bases de datos, asegurando validaciones, seguridad y buen manejo de errores. Además, colaboro en arquitectura, documentación y mantenimiento evolutivo, aplicando buenas prácticas de calidad para entregar funcionalidades escalables y estables.',
                'En paralelo, brindo apoyo técnico en soporte e infraestructura: instalación, conexión y revisión de equipos y periféricos, elaboración de patch cords, ponchado y preparación de cableado para conexiones de red y cámaras IP, y apoyo en enlaces entre switches y dispositivos de infraestructura, además de diagnóstico de conectividad y resolución básica de incidencias de red y hardware. También despliego y administro aplicaciones web en DigitalOcean y AWS mediante Coolify, dando seguimiento a servicios y bases de datos, y utilizo Jira, Azure DevOps y Trello para el seguimiento de tareas, incidencias y documentación de proyectos.',
              ]}
            />
            <TimelineItem
              accent={ACCENT}
              title="Desarrollador Frontend · Plataforma de Información Turística"
              company="Municipalidad de La Cruz · Práctica profesional"
              period="jun. 2024 – nov. 2024 · 6 meses"
              paragraphs={[
                'Durante mi práctica profesional en la Municipalidad de La Cruz, diseñé, desarrollé y mantuve la interfaz de usuario y la experiencia visual de una plataforma de información turística, utilizando React y TypeScript para crear una arquitectura modular, escalable y mantenible.',
                'Implementé vistas interactivas que permiten mostrar destinos turísticos, actividades y gestionar usuarios, asegurando una experiencia fluida y atractiva. Me encargué de consumir los endpoints del backend para integrar datos en tiempo real, y apliqué prácticas de optimización, usabilidad y accesibilidad para mejorar el rendimiento y la experiencia del usuario.',
              ]}
            />
            <TimelineItem
              accent={ACCENT}
              title="Sistema de Control de Empleados con Face ID"
              company="Coriport · Proyecto de Ingeniería I, II y III"
              period="feb. 2023 – jun. 2024 · 1 año 5 meses"
              paragraphs={[
                'Durante los cursos de Ingeniería I, II y III, desarrollé un Sistema de Control de trabajadores para la empresa Coriport que permite registrar e identificar a las personas colaboradoras mediante reconocimiento facial, garantizando seguridad y precisión en el proceso. Utilicé Laravel para el backend, lo que facilitó una gestión robusta de la lógica del servidor y de la base de datos. En el frontend implementé JavaScript, junto con HTML y CSS para una interfaz dinámica, visualmente atractiva y fácil de usar.',
                'Además de la construcción técnica, realicé la planificación del proyecto, elaborando casos de uso, diagramas de clases y diagramas de flujo para definir la arquitectura y los procesos. Gestionamos el trabajo en Azure DevOps para organizar tareas, coordinar al equipo y dar seguimiento detallado al avance, asegurando un desarrollo ordenado y eficiente.',
              ]}
            />
            <TimelineItem
              accent={ACCENT}
              title="Otras experiencias"
              company="Asociación de Estudiantes de la Universidad Nacional (ASO-UNA)"
              duties={[
                'Participé en la coordinación de talleres y eventos, gestioné inscripciones y asistencia, y elaboré reportes con resultados.',
              ]}
            />
          </Timeline>
        </Card>

        <Card title="Habilidades técnicas" accent={ACCENT}>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} {...group} />
            ))}
          </div>
        </Card>

        <Card title="Referencias" accent={ACCENT}>
          <References items={references} />
        </Card>
      </div>
    </CVPage>
  )
}

const SkillGroup = ({ title, skills, extra, note }) => (
  <div className="py-5 first:pt-0 last:pb-0">
    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">{title}</h3>
    <div className="mt-3 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <div
          key={skill.label}
          className={`flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950/40 py-1.5 pl-1.5 pr-3 transition-colors ${accents[ACCENT].tile}`}
        >
          <ImageWithFallback
            src={skill.src}
            alt=""
            loading="eager"
            className="h-7 w-7 rounded-md bg-slate-50 dark:bg-gray-800 object-contain p-1"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.label}</span>
        </div>
      ))}
      {extra?.map((label) => (
        <span
          key={label}
          className="flex items-center rounded-lg border border-gray-200 dark:border-gray-800 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {label}
        </span>
      ))}
    </div>
    {note && <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{note}</p>}
  </div>
)
