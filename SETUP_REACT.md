# 🎯 Guía Rápida - Proyecto React Curriculum

## ¿Qué se hizo?

Tu proyecto HTML se convirtió completamente a **React + Vite**. Ahora tienes:

### 📦 Estructura

```
Curriculum/
├── src/
│   ├── components/          # Componentes React
│   ├── hooks/               # Custom hooks
│   ├── styles/              # CSS modularizado
│   ├── App.jsx              # Rutas
│   └── main.jsx             # Entrada
├── public/                  # Assets estáticos
├── index.html               # HTML raíz
├── package.json             # Dependencias
├── vite.config.js           # Config Vite
└── README_REACT.md          # Documentación
```

## 🚀 Comandos

```bash
# Desarrollo (en ejecución)
npm run dev                  # Ya está corriendo en http://localhost:5173

# Producción
npm run build                # Crea dist/
npm run preview              # Previsualiza build

# Auditoría
npm audit fix                # Corrige vulnerabilidades (opcional)
```

## 📂 Archivos Principales

| Archivo | Función |
|---------|---------|
| `src/components/Menu.jsx` | Menú principal con opción Ingeniero/Asistente |
| `src/components/CVEngineer.jsx` | CV perfil técnico |
| `src/components/CVAssistant.jsx` | CV perfil administrativo |
| `src/components/ThemeToggle.jsx` | Botón cambio tema |
| `src/hooks/useTheme.js` | Lógica tema oscuro/claro |
| `src/styles/menu.css` | Estilos menú |
| `src/styles/cv.css` | Estilos CVs |
| `src/App.jsx` | Rutas React Router |

## 🎨 Cambios de Diseño

- ✅ Mismo look & feel que el original
- ✅ Tema oscuro/claro funcional
- ✅ Responsive en mobile, tablet, desktop
- ✅ Animaciones suaves
- ✅ Sin recargas de página (SPA)

## 🔄 Flujo de Navegación

```
Menú Principal (/)
    ↓
    ├─→ CV Ingeniero (/cv-engineer)
    │       ├─→ Volver al menú
    │       └─→ Descargar PDF
    │
    └─→ CV Asistente (/cv-assistant)
            ├─→ Volver al menú
            └─→ Descargar PDF
```

## 💾 Persistencia

- **Tema**: Se guarda en localStorage
- **Última elección**: Se guarda en localStorage (futuro: redirect automático)

## 📱 Responsive Points

- **Mobile** (< 480px): Stack vertical, botones FAB
- **Tablet** (480-900px): Layout adaptado
- **Desktop** (> 900px): Layout de dos columnas

## ⚡ Funcionalidades

✅ Toggle tema con animación  
✅ Navegación sin recarga  
✅ Descargar CV  
✅ Volver al menú sin perder estado  
✅ Mobile-first responsive  
✅ Accesibilidad (skip links, ARIA)  
✅ Print-friendly  

## 🛠️ Próximos Pasos Opcionales

1. **Agregar animaciones de página**: Usar Framer Motion
2. **Traducción**: i18n para ES/EN
3. **Formulario de contacto**: Envío de emails
4. **Analytics**: Google Analytics integration
5. **PWA**: Hacer funcionar offline
6. **Dark mode automático**: Sistema os tema

## 📝 Notas

- Los archivos HTML antiguos (`menu.html`, `cv.html`, `cv-asistente.html`) siguen en el proyecto pero ya no se usan
- Puedes eliminarlos si lo deseas: `del menu.html cv.html cv-asistente.html styles.css`
- Los estilos CSS fueron adaptados a módulos React
- Los assets en `public/img` y `public/files` se sirven normalmente

## 🔗 URLs Importantes

- **Dev**: http://localhost:5173
- **Menú**: http://localhost:5173/
- **CV Ingeniero**: http://localhost:5173/cv-engineer
- **CV Asistente**: http://localhost:5173/cv-assistant

---

**¡Ya está listo para desarrollar! 🎉**

Cualquier cambio que hagas en `src/` se reflejará automáticamente en el navegador gracias a HMR (Hot Module Replacement).
