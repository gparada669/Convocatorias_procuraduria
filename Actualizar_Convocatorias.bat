@echo off
title Actualizador de Convocatorias PGN 2026
color 0A
echo ============================================================
echo   Actualizando Convocatorias PGN en segundo plano...
echo ============================================================
cd /d "%~dp0"
node scraper.js
echo.
echo ============================================================
echo   ¡Proceso completado exitosamente!
echo ============================================================
timeout /t 5
