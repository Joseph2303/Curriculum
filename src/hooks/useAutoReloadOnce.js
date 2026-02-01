import { useEffect } from 'react'

export const useAutoReloadOnce = () => {
  useEffect(() => {
    // Solo ejecutar una vez por sesión
    const hasReloaded = sessionStorage.getItem('hasReloadedOnce')
    
    if (!hasReloaded) {
      // Esperar 2 segundos para dar tiempo a que carguen las imágenes
      const timeoutId = setTimeout(() => {
        // Marcar que ya se hizo el reload
        sessionStorage.setItem('hasReloadedOnce', 'true')
        // Recargar la página
        window.location.reload()
      }, 2000)
      
      return () => clearTimeout(timeoutId)
    }
  }, [])
}
