import { useTheme } from '../hooks/useTheme'
import { FiMoon, FiSun } from 'react-icons/fi'

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      id="toggleTheme"
      type="button"
      className="fixed right-4 top-4 z-50 inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
      aria-pressed={isDark}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      onClick={toggleTheme}
    >
      {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
      <span className="hidden sm:inline">{isDark ? 'Modo claro' : 'Modo oscuro'}</span>
    </button>
  )
}
