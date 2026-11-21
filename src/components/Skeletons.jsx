import { useState } from 'react'

// Bloque gris base del skeleton
const Bone = ({ className = '', style }) => <div style={style} className={`rounded-md bg-gray-200/80 dark:bg-gray-800 ${className}`} />

// Contenedor común: fondo, botón de tema y pulso
const Shell = ({ children }) => (
  <div
    className="min-h-screen bg-slate-50 dark:bg-gray-950 motion-safe:animate-pulse"
    role="status"
    aria-live="polite"
    aria-label="Cargando contenido"
  >
    <div className="fixed right-4 top-4 h-9 w-10 sm:w-32 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900" />
    {children}
    <span className="sr-only">Cargando…</span>
  </div>
)

const HeaderBand = ({ children }) => (
  <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
    <div className="max-w-6xl mx-auto px-5 pt-20 pb-10 md:pt-16 md:pb-12">{children}</div>
  </div>
)

const CardBone = ({ children, className = '' }) => (
  <div className={`rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 ${className}`}>
    {children}
  </div>
)

export const MenuSkeleton = () => (
  <Shell>
    <HeaderBand>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
        <div className="order-2 md:order-1 space-y-4">
          <Bone className="h-6 w-56 rounded-full" />
          <Bone className="h-12 w-full max-w-xl mt-6" />
          <Bone className="h-6 w-80 max-w-full" />
          <Bone className="h-4 w-40" />
          <Bone className="h-4 w-full max-w-2xl mt-6" />
          <Bone className="h-4 w-2/3" />
          <div className="flex gap-3 pt-2">
            <Bone className="h-10 w-24" />
            <Bone className="h-10 w-24" />
            <Bone className="h-10 w-24" />
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Bone className="h-44 w-44 md:h-64 md:w-56 rounded-2xl" />
        </div>
      </div>
    </HeaderBand>
    <div className="max-w-6xl mx-auto px-5 py-12">
      <Bone className="h-3 w-32" />
      <Bone className="h-7 w-64 mt-3" />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[0, 1, 2].map((i) => (
          <CardBone key={i} className="space-y-4">
            <div className="flex justify-between">
              <Bone className="h-11 w-11 rounded-xl" />
              <Bone className="h-3 w-24" />
            </div>
            <Bone className="h-6 w-3/4 mt-2" />
            <Bone className="h-4 w-full" />
            <Bone className="h-4 w-5/6" />
            <div className="flex gap-1.5 pt-2">
              <Bone className="h-6 w-14" />
              <Bone className="h-6 w-16" />
              <Bone className="h-6 w-12" />
            </div>
            <Bone className="h-10 w-full mt-6" />
          </CardBone>
        ))}
      </div>
    </div>
  </Shell>
)

export const CVSkeleton = () => (
  <Shell>
    <HeaderBand>
      <Bone className="h-4 w-32" />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-8 items-center">
        <Bone className="h-28 w-28 md:h-32 md:w-32 rounded-2xl" />
        <div className="space-y-3">
          <Bone className="h-3 w-48" />
          <Bone className="h-10 w-full max-w-lg" />
          <Bone className="h-5 w-80 max-w-full" />
          <div className="flex flex-wrap gap-4 pt-2">
            <Bone className="h-4 w-36" />
            <Bone className="h-4 w-44" />
            <Bone className="h-4 w-28" />
            <Bone className="h-4 w-20" />
          </div>
        </div>
        <Bone className="h-12 w-full md:w-52 rounded-lg" />
      </div>
    </HeaderBand>
    <div className="max-w-6xl mx-auto px-5 py-10 grid lg:grid-cols-[300px_1fr] gap-6 items-start">
      <div className="space-y-6">
        {[4, 3, 1].map((rows, i) => (
          <CardBone key={i} className="space-y-4">
            <Bone className="h-3 w-24" />
            {Array.from({ length: rows }).map((_, j) => (
              <div key={j} className="grid grid-cols-[3rem_1fr] gap-3">
                <Bone className="h-3 w-8" />
                <div className="space-y-1.5">
                  <Bone className="h-4 w-full" />
                  <Bone className="h-3 w-2/3" />
                </div>
              </div>
            ))}
          </CardBone>
        ))}
      </div>
      <div className="space-y-6">
        <CardBone className="space-y-3 md:p-8">
          <Bone className="h-5 w-40" />
          <Bone className="h-4 w-full mt-4" />
          <Bone className="h-4 w-full" />
          <Bone className="h-4 w-11/12" />
          <Bone className="h-4 w-3/4" />
        </CardBone>
        <CardBone className="space-y-6 md:p-8">
          <Bone className="h-5 w-52" />
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-2 pl-6 border-l border-gray-200 dark:border-gray-800">
              <div className="flex justify-between gap-4">
                <Bone className="h-5 w-2/3" />
                <Bone className="h-3 w-24" />
              </div>
              <Bone className="h-4 w-40" />
              <Bone className="h-4 w-full mt-3" />
              <Bone className="h-4 w-full" />
              <Bone className="h-4 w-4/5" />
            </div>
          ))}
        </CardBone>
      </div>
    </div>
  </Shell>
)

export const ProjectsSkeleton = () => (
  <Shell>
    <HeaderBand>
      <Bone className="h-4 w-32" />
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:items-end">
        <div className="space-y-3">
          <Bone className="h-3 w-36" />
          <Bone className="h-10 w-80 max-w-full" />
          <Bone className="h-4 w-full max-w-2xl mt-4" />
          <Bone className="h-4 w-3/4 max-w-xl" />
        </div>
        <Bone className="h-20 w-full lg:w-80 rounded-xl" />
      </div>
    </HeaderBand>
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div className="flex flex-wrap gap-2">
        {[14, 16, 20, 24, 16, 20].map((w, i) => (
          <Bone key={i} className="h-7" style={{ width: `${w * 4}px` }} />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[0, 1, 2, 3].map((i) => (
          <CardBone key={i} className="space-y-4">
            <div className="flex justify-between">
              <Bone className="h-3 w-40" />
              <Bone className="h-6 w-24 rounded-full" />
            </div>
            <Bone className="h-6 w-2/3" />
            <Bone className="h-4 w-full" />
            <Bone className="h-4 w-5/6" />
            <Bone className="h-4 w-1/2 mt-2" />
            <Bone className="h-4 w-2/5" />
            <div className="flex gap-3 pt-5">
              <Bone className="h-9 w-32" />
              <Bone className="h-9 w-28" />
            </div>
          </CardBone>
        ))}
      </div>
    </div>
  </Shell>
)

export const skeletonFor = (pathname) => {
  if (pathname.startsWith('/cv-')) return <CVSkeleton />
  if (pathname.startsWith('/projects')) return <ProjectsSkeleton />
  return <MenuSkeleton />
}

// Imagen que aparece con fundido sobre un fondo gris mientras carga
export const FadeImage = ({ className = '', ...props }) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <img
      {...props}
      onLoad={() => setLoaded(true)}
      className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
    />
  )
}
