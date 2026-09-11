@echo off
title Publicar Convocatorias PGN 2026 en Internet
color 0B
echo ============================================================
echo   Publicando sitio web en Internet con Surge...
echo ============================================================
cd /d "%~dp0"
npx surge . convocatorias-merito-2026.surge.sh
echo.
pause
