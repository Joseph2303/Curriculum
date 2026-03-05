import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Menu } from './components/Menu'
import { CVEngineer } from './components/CVEngineer'
import { CVAssistant } from './components/CVAssistant'
import { Projects } from './components/Projects'
import { useTheme } from './hooks/useTheme'
import './App.css'

function App() {
  const { applyTheme } = useTheme()

  useEffect(() => {
    // Aplicar tema al montar
    const storageKey = 'cv-dark'
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const saved = localStorage.getItem(storageKey)
    const darkInit = saved ? saved === '1' : prefersDark
    applyTheme(darkInit)
  }, [applyTheme])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cv-engineer" element={<CVEngineer />} />
        <Route path="/cv-assistant" element={<CVAssistant />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
