import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const storageKey = 'cv-dark'
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const saved = localStorage.getItem(storageKey)
    const darkInit = saved ? saved === '1' : prefersDark

    applyTheme(darkInit)
  }, [])

  const applyTheme = (dark) => {
    try {
      if (dark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('cv-dark', dark ? '1' : '0')
      setIsDark(dark)
    } catch (e) {
      console.error('Error applying theme:', e)
    }
  }

  const toggleTheme = () => {
    applyTheme(!isDark)
  }

  return { isDark, toggleTheme, applyTheme }
}
