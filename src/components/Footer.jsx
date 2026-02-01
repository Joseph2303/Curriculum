import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

export const Footer = () => (
  <footer className="mt-8 border-t border-gray-200/70 dark:border-gray-800/70 bg-gradient-to-b from-white/40 to-white dark:from-gray-900/40 dark:to-gray-950">
    <div className="max-w-7xl mx-auto px-5 py-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            Joseph Sebastián Álvarez Ruiz
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Profesional en Sistemas • Costa Rica
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:jalvarezruiz3@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/50 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-300"
            aria-label="Enviar correo"
          >
            <FiMail size={14} /> Email
          </a>
          <a
            href="https://wa.me/50685812663"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/50 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm transition hover:-translate-y-0.5 hover:border-green-400 hover:text-green-600 dark:hover:text-green-300"
            aria-label="Contactar por WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiPhone size={14} /> WhatsApp
          </a>
          <a
            href="https://github.com/Joseph2303"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/50 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-400 hover:text-gray-900 dark:hover:text-white"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size={14} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-sebastian-%C3%A1lvarez-ruiz-bb6758187/"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/50 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size={14} /> LinkedIn
          </a>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} • Todos los derechos reservados
        </p>
      </div>
    </div>
  </footer>
)
