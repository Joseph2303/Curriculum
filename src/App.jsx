import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Menu } from './components/Menu'
import { CVEngineer } from './components/CVEngineer'
import { CVAssistant } from './components/CVAssistant'
import { Projects } from './components/Projects'
import { skeletonFor } from './components/Skeletons'
import { useTheme } from './hooks/useTheme'
import './App.css'

// Tiempo que se muestra el skeleton al cambiar de vista
const TRANSITION_MS = 350

const AnimatedRoutes = () => {
  const location = useLocation()
  const [displayed, setDisplayed] = useState(location)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (location.pathname === displayed.pathname) return

    setLoading(true)
    window.scrollTo({ top: 0 })

    const timer = setTimeout(() => {
      setDisplayed(location)
      setLoading(false)
    }, TRANSITION_MS)

    return () => clearTimeout(timer)
  }, [location, displayed.pathname])

  if (loading) return skeletonFor(location.pathname)

  return (
    <div key={displayed.pathname} className="motion-safe:animate-page-in">
      <Routes location={displayed}>
        <Route path="/" element={<Menu />} />
        <Route path="/cv-engineer" element={<CVEngineer />} />
        <Route path="/cv-assistant" element={<CVAssistant />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

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
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AnimatedRoutes />
    </Router>
  )
}

export default App
