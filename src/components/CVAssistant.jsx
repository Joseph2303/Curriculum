import { useNavigate } from 'react-router-dom'
import { useAutoReloadOnce } from '../hooks/useAutoReloadOnce'
import { CVPage, Card, Sidebar, Timeline, TimelineItem, References, references } from './CVShared'

const CV_PDF_URL = (import.meta.env.BASE_URL || '/') + 'files/joseph_alvarez_cv.pdf'
const WHATSAPP_URL =
  'https://wa.me/50685812663?text=%C2%A1Hola!%20Te%20escribo%20despu%C3%A9s%20de%20ver%20tu%20curr%C3%ADculum.%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s.'
const ACCENT = 'violet'

const skillGroups = [
  {
    title: 'Conocimientos informáticos',
    items: [
      ['Microsoft Excel', 'Nivel intermedio'],
      ['Paquetes ofimáticos', 'Nivel avanzado'],
      ['Correo electrónico y herramientas web', 'Manejo eficiente de plataformas digitales para comunicación y organización'],
    ],
  },
  {
    title: 'Gestión de documentos y archivos',
    items: [
      ['Microsoft OneDrive'],
      ['Google Drive'],
      ['Dropbox'],
      ['PDF', 'Edición, combinación y firma digital'],
      ['Escaneo y digitalización de documentos'],
    ],
  },
  {
    title: 'Presentaciones y comunicación',
    items: [['Microsoft PowerPoint'], ['Canva'], ['Google Slides'], ['Zoom, Google Meet, Microsoft Teams']],
  },
  {
    title: 'Herramientas administrativas',
    items: [
      ['Correo electrónico', 'Outlook, Gmail'],
      ['Calendarios compartidos', 'Gestión de citas'],
      ['Redacción', 'Oficios, informes y cartas formales'],
    ],
  },
  {
    title: 'Organización y productividad',
    items: [
      ['Microsoft Outlook', 'Calendario y tareas'],
      ['Google Calendar'],
      ['Microsoft OneNote, Evernote'],
      ['Microsoft To Do, Google Tasks', 'Recordatorios'],
      ['Agenda física y digital'],
    ],
  },
  {
    title: 'Atención al cliente y redacción',
    items: [
      ['Comunicación escrita', 'Clara y profesional'],
      ['Respuesta a consultas', 'Seguimiento de tareas y elaboración de reportes'],
    ],
  },
  {
    title: 'Herramientas asistidas por IA',
    items: [['ChatGPT, Grammarly, Tome, Gamma', 'Redacción, síntesis de información y generación de contenido']],
  },
]

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
    <CVPage
      accent={ACCENT}
      eyebrow="Currículum · Perfil administrativo"
      role="Asistente Administrativo · Profesional en Gestión y Tecnología"
      pdfUrl={CV_PDF_URL}
      whatsappUrl={WHATSAPP_URL}
      onBack={handleBackToMenu}
    >
      <Sidebar accent={ACCENT} />

      <div className="space-y-6 min-w-0">
        <Card title="Perfil profesional" accent={ACCENT}>
          <p className="leading-relaxed">
            Profesional con formación universitaria y amplia experiencia en atención al cliente, gestión documental,
            manejo de caja y procesos administrativos. Con sólidos conocimientos en herramientas digitales, organización
            de tareas, redacción de documentos y trato cordial al público. Me considero responsable, proactivo, con
            excelente capacidad de aprendizaje y adaptabilidad. Busco aportar mis habilidades al área administrativa para
            contribuir al buen funcionamiento de la organización.
          </p>
        </Card>

        <Card title="Experiencia profesional" accent={ACCENT}>
          <Timeline>
            <TimelineItem
              accent={ACCENT}
              title="Desarrollador Full Stack (Diseño de Software e Ingeniería Web)"
              company="Upgo Technology"
              period="ene. 2026 – actualidad"
              duties={[
                'Rol con enfoque administrativo-operativo, apoyando la gestión y organización de procesos internos.',
                'Control y actualización de documentación e información, seguimiento de solicitudes y elaboración de reportes.',
                'Coordinación con distintas áreas para asegurar orden, cumplimiento de tiempos y operación eficiente.',
              ]}
            />
            <TimelineItem
              accent={ACCENT}
              title="Plataforma de Información Turística (Práctica profesional)"
              company="Municipalidad de La Cruz"
              period="jun. 2024 – nov. 2024 · 6 meses"
              duties={[
                'Gestioné el flujo de información turística (destinos, actividades y servicios), asegurando actualización, orden y calidad de los contenidos.',
                'Atendí consultas internas/externas, di seguimiento a requerimientos y registré incidencias para su resolución oportuna.',
                'Elaboré reportes de avance y tableros básicos (visitas, tiempos de respuesta, publicaciones), facilitando la toma de decisiones del área.',
                'Coordiné con las áreas de Turismo y Soporte para calendarizar tareas, levantar minutas y estandarizar procedimientos.',
                'Verifiqué lineamientos de usabilidad y accesibilidad en la información publicada, mejorando la experiencia de las personas usuarias.',
              ]}
            />
            <TimelineItem
              accent={ACCENT}
              title="Sistema de Control de Empleados con Face ID"
              company="Coriport"
              period="feb. 2023 – jun. 2024 · 1 año 5 meses"
              duties={[
                'Apoyé el levantamiento de requerimientos con RR. HH. y Operaciones, documentando alcances, casos de uso y flujos de trabajo.',
                'Organicé el plan de trabajo (cronograma, hitos, responsables) y di seguimiento mediante tableros de tareas y reportes de estado.',
                'Redacté minutas, gestioné acuerdos y controlé versiones de documentos, asegurando trazabilidad y cumplimiento de entregables.',
                'Coordiné pruebas funcionales con usuarios clave, registré hallazgos y gestioné su cierre antes de la puesta en marcha.',
                'Colaboré en la preparación de manuales de uso.',
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map(([name, detail]) => (
                    <li key={name} className="flex gap-2.5 text-sm leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500" />
                      <span>
                        <span className="font-medium text-gray-900 dark:text-gray-100">{name}</span>
                        {detail && <span className="text-gray-500 dark:text-gray-400"> — {detail}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
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
