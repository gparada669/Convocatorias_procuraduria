# Convocatorias Procuraduría General de la Nación (PGN 2026)

Buscador e interfaz interactiva para explorar, filtrar y guardar las 318 convocatorias de empleo público del Concurso de Méritos 2026 de la PGN Colombia.

## 📁 Estructura del Proyecto

```text
Convocatorias_procuraduria/
├── index.html           # Aplicación web completa interactiva (HTML5 + Tailwind CSS + JS)
├── convocatorias.json   # Base de datos JSON de respaldo con las 318 vacantes
├── scraper.js           # Script automatizado con Puppeteer para actualizar datos desde la PGN
├── package.json         # Configuración de comandos Node.js
└── README.md            # Documentación del proyecto
```

## 🚀 Comandos Rápidos

### 1. Probar localmente
Abre `index.html` directamente en cualquier navegador (Chrome, Edge, Firefox, Safari).

### 2. Publicar permanentemente en Internet (Gratis con Surge)
En tu consola/terminal ejecuta:
```bash
npm run deploy
```

### 3. Actualizar datos automáticamente desde el portal PGN
Para volver a consultar el portal oficial y actualizar el listado:
```bash
npm run update
```
