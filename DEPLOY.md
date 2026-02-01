# 🚀 Guía de Despliegue - Curriculum React

## Opciones de Despliegue

### 1. **Vercel** (Recomendado - Más fácil)

```bash
# Instala CLI de Vercel
npm install -g vercel

# Desde el directorio del proyecto
vercel

# Sigue los prompts
```

**Ventajas**:
- Deploy automático desde Git
- SSL gratuito
- Muy rápido
- Preview de PRs

### 2. **Netlify**

```bash
# Instala CLI de Netlify
npm install -g netlify-cli

# Login y deploy
netlify login
netlify deploy --prod

# O conecta tu repo para auto-deploy
```

**Ventajas**:
- Excelente para SPA
- Functions serverless gratis
- Preview en vivo

### 3. **GitHub Pages**

Modifica `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Curriculum/',  // Si es repo personal
  // base: '/',          // Si es user.github.io
  plugins: [react()],
})
```

Luego:

```bash
npm run build
# Sube dist/ a gh-pages branch
```

### 4. **Railway**

```bash
# Instala CLI
npm install -g railway

# Deploy
railway init
railway link
railway up
```

### 5. **Render.com**

1. Conecta tu repo GitHub
2. Selecciona "Static Site"
3. Build: `npm run build`
4. Publish: `dist`

## Paso a Paso - Vercel (Recomendado)

### 1. Prepara el proyecto

```bash
cd c:\Users\Admin\Documents\GitHub\Curriculum
npm run build
```

### 2. Instala Vercel CLI

```bash
npm install -g vercel
```

### 3. Deploy

```bash
vercel
```

Responde:
- ✅ Set up and deploy? → Yes
- ✅ Which scope? → Tu cuenta
- ✅ Link to existing project? → No
- ✅ Project name? → curriculum-joseph (o lo que prefieras)
- ✅ Directory? → `./` (actual)

### 4. ¡Listo!

Tu app estará en: `https://curriculum-joseph.vercel.app`

## Configuración de Dominio Personalizado

### Vercel
1. Ve a Settings → Domains
2. Agrega tu dominio
3. Apunta los registros DNS

### Netlify
1. Domain settings → Custom domains
2. Configura los registros A/CNAME

## Configuración del Redirects

Para que React Router funcione correctamente, necesitas redirigir 404s a `index.html`.

### Vercel
Automático ✅

### Netlify
Crea `public/_redirects`:

```
/*    /index.html   200
```

### GitHub Pages
Crear `.nojekyll` en `public/`

## Variables de Entorno (Opcional)

Crea `.env`:

```
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=G-XXXXX
```

Úsalas en código:

```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Monitoreo Post-Deploy

### Vercel
- Analytics incluido
- Performance insights
- Deployment history

### Netlify
- Netlify Analytics
- Deploy logs
- Split testing (pago)

## Troubleshooting

### Error: Routes not working

**Problema**: Al recargar página, da 404

**Solución**: Asegúrate que el servidor redirige 404s a `index.html`

### Error: Assets no carga

**Problema**: CSS/JS no carga en deployment

**Solución**: Verifica `base` en `vite.config.js`

```js
export default defineConfig({
  base: '/',  // Si es dominio raíz
  plugins: [react()],
})
```

### Performance lento

**Solución**: 
- Ejecuta `npm run build` y verifica tamaño
- Agrega compresión: `npm install compression`
- Lazy load componentes si es necesario

## Checklist Pre-Deploy

- [ ] `npm run build` sin errores
- [ ] `npm run preview` funciona correctamente
- [ ] Tema oscuro/claro funciona
- [ ] Navegación entre páginas funciona
- [ ] PDFs descargan correctamente
- [ ] Responsive en móvil funciona
- [ ] Links externos abren en nueva pestaña
- [ ] Velocidad de carga aceptable

## Monitorar After Deploy

```bash
# Ver logs en tiempo real
vercel logs

# O con Netlify
netlify logs:tail
```

## Rollback

Si algo sale mal:

```bash
# Vercel
vercel rollback

# Netlify
netlify deploy --prod --dir=dist  # con build anterior
```

---

**¿Preguntas? Revisa los docs oficiales:**
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
