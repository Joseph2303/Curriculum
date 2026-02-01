import { useTheme } from '../hooks/useTheme'
import { FiMoon, FiSun } from 'react-icons/fi'

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  const handleToggle = () => {
    toggleTheme()
  }

  return (
    <button 
      id="toggleTheme" 
      className="fixed right-4 top-4 z-50 inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-full px-4 py-2 cursor-pointer text-base transition-all duration-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600"
      aria-pressed={isDark}
      title="Cambiar tema"
      onClick={handleToggle}
    >
      {isDark ? <FiMoon size={18} /> : <FiSun size={18} />}
      <span className="text-sm font-semibold">Tema</span>
    </button>
  )
}
