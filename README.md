# 🇨🇴 Convocatorias Procuraduría General de la Nación (PGN 2026)

Aplicación web interactiva y buscador optimizado para explorar, filtrar y analizar las **318 convocatorias de empleo público** del Concurso de Méritos 2026 de la Procuraduría General de la Nación (PGN Colombia).

🌐 **Sitio Web Oficial Publicado:**
👉 **[https://gparada669.github.io/Convocatorias_procuraduria/](https://gparada669.github.io/Convocatorias_procuraduria/)**

---

## 🚀 Características Principales

- **318 Convocatorias Completas:** Datos sincronizados en tiempo real directamente desde la API oficial del portal de inscripciones.
- **Relación de Competencia:** Cálculo automático de `aspirantes / plaza` para identificar rápidamente empleos con mayor probabilidad de selección.
- **Filtros Avanzados Táctiles & Móviles:**
  - Búsqueda por texto libre (cargo, palabra clave, código).
  - Filtro por nivel de empleo (Asesor, Profesional, Técnico, Asistencial).
  - Filtro por disciplinas académicas requeridas.
  - Filtro por ubicación geográfica (Departamentos y Ciudades).
  - Filtro de vacantes sin posgrado obligatorio.
  - Slider dinámico de experiencia máxima exigida.
- **Lista de Favoritos:** Guardado persistente local (`Mis Guardados`) para realizar seguimiento a las vacantes de interés.
- **Diseño Mobile-First & Drawer Responsive:** Interfaz limpia con drawer desplegable táctil, scroll suave y botones táctiles adaptados para celular y PC.

---

## 📁 Estructura del Proyecto

```text
Convocatorias_procuraduria/
├── index.html                 # Aplicación web interactiva completa (HTML5 + Tailwind CSS + JS)
├── convocatorias.json         # Base de datos respaldada en JSON con las 318 vacantes
├── scraper.js                 # Script Node.js para extracción y refresco de datos desde la API PGN
├── Auto_Sync_And_Publish.bat  # Ejecutable Windows de 1 clic para actualizar y publicar en GitHub Pages
├── package.json               # Configuración de dependencias de Node.js
└── README.md                  # Documentación oficial del proyecto
```

---

## ⚙️ Automatización en Segundo Plano

El proyecto cuenta con una tarea automatizada en el **Programador de Tareas de Windows**:

- **Nombre de Tarea:** `Actualizar_Convocatorias_PGN`
- **Frecuencia:** Se ejecuta automáticamente **cada 6 horas**.
- **Fecha de expiración:** **17/09/2026**.
- **Función:** Descarga el conteo actualizado de inscritos desde la PGN y realiza un `git push` automático al repositorio de GitHub Pages.

---

## 🛠️ Ejecución Manual

Si deseas forzar una actualización inmediata sin esperar el intervalo de 6 horas:

1. Ve a la carpeta del proyecto.
2. Haz **doble clic** en **`Auto_Sync_And_Publish.bat`**.

---

*Desarrollado para el Concurso de Méritos PGN 2026 Colombia.*
