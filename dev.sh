#!/bin/bash

# Script de desarrollo rápido para Curriculum React

echo "🎓 Curriculum React - Iniciador Rápido"
echo "======================================"
echo ""

# Verifica Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado"
    echo "📥 Descárgalo de: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"
echo "✅ npm encontrado: $(npm --version)"
echo ""

# Opciones
echo "¿Qué quieres hacer?"
echo ""
echo "1) Instalar dependencias (npm install)"
echo "2) Iniciar servidor de desarrollo (npm run dev)"
echo "3) Build para producción (npm run build)"
echo "4) Previsualizar build (npm run preview)"
echo "5) Hacer audit de seguridad (npm audit)"
echo "6) Limpiar node_modules y reinstalar"
echo "0) Salir"
echo ""

read -p "Selecciona una opción (0-6): " option

case $option in
    1)
        echo "📦 Instalando dependencias..."
        npm install
        echo "✅ Instalación completada"
        ;;
    2)
        echo "🚀 Iniciando servidor de desarrollo..."
        npm run dev
        ;;
    3)
        echo "🔨 Buildiendo para producción..."
        npm run build
        echo "✅ Build completado en dist/"
        ;;
    4)
        echo "👀 Previsualizando build..."
        npm run preview
        ;;
    5)
        echo "🔍 Ejecutando audit de seguridad..."
        npm audit
        ;;
    6)
        echo "🗑️  Limpiando node_modules..."
        rm -rf node_modules package-lock.json
        echo "📦 Reinstalando..."
        npm install
        echo "✅ Reinstalación completada"
        ;;
    0)
        echo "👋 ¡Adiós!"
        exit 0
        ;;
    *)
        echo "❌ Opción inválida"
        exit 1
        ;;
esac

echo ""
echo "Para más información, lee:"
echo "  📖 README_REACT.md"
echo "  🚀 SETUP_REACT.md"
echo "  📤 DEPLOY.md"
