import { useEffect, useState } from 'react'

export const useImagePreload = (imageUrls) => {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setImagesLoaded(true)
      return
    }

    let isMounted = true
    const imageElements = []

    const loadImages = async () => {
      const promises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = url
          img.onload = resolve
          img.onerror = reject
          imageElements.push(img)
        })
      })

      try {
        await Promise.all(promises)
        if (isMounted) {
          setImagesLoaded(true)
        }
      } catch (error) {
        console.warn('Some images failed to preload:', error)
        if (isMounted) {
          setImagesLoaded(true)
        }
      }
    }

    loadImages()

    return () => {
      isMounted = false
    }
  }, [imageUrls])

  return imagesLoaded
}
