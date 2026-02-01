import { useState, useEffect } from 'react'

export const ImageWithFallback = ({ src, alt, className, loading = "eager", fallback = null }) => {
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    // Forzar recarga de la imagen añadiendo timestamp solo si falla
    if (error) {
      const timestamp = new Date().getTime()
      setImgSrc(`${src}?t=${timestamp}`)
    } else {
      setImgSrc(src)
    }
  }, [src, error])

  const handleError = () => {
    if (!error) {
      setError(true)
    }
  }

  const handleLoad = () => {
    setLoaded(true)
    setError(false)
  }

  if (error && fallback) {
    return fallback
  }

  return (
    <>
      {!loaded && (
        <div className={`${className} animate-pulse bg-gray-200 dark:bg-gray-700`} />
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`${className} ${!loaded ? 'hidden' : ''}`}
        loading={loading}
        crossOrigin="anonymous"
        onError={handleError}
        onLoad={handleLoad}
      />
    </>
  )
}
