import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

export const Footer = () => (
  <footer className="mt-8 border-t border-gray-200/70 dark:border-gray-800/70 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-5 py-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            Joseph Sebastián Álvarez Ruiz
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Ingeniero en Sistemas de Información · Costa Rica
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:jalvarezruiz3@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/50 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-400 hover:text-gray-900 dark:hover:text-white"
            aria-label="Enviar correo"
          >
            <FiMail size={14} /> Email
          </a>
          <a
            href="https://wa.me/50685812663"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/50 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-400 hover:text-gray-900 dark:hover:text-white"
            aria-label="Contactar por WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiPhone size={14} /> WhatsApp
          </a>
          <a
            href="https://github.com/Joseph2303"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/50 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-400 hover:text-gray-900 dark:hover:text-white"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size={14} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-sebastian-%C3%A1lvarez-ruiz-bb6758187/"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/50 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-400 hover:text-gray-900 dark:hover:text-white"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size={14} /> LinkedIn
          </a>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} · Todos los derechos reservados
        </p>
      </div>
    </div>
  </footer>
)


