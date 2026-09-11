@echo off
cd /d "%~dp0"
echo ============================================================
echo   [SISTEMA AUTO] Actualizando base de datos PGN 2026...
echo ============================================================
call node scraper.js
echo.
echo ============================================================
echo   [SISTEMA AUTO] Publicando en Internet (surge.sh)...
echo ============================================================
call npx surge . --domain convocatorias-merito-2026.surge.sh
echo.
echo [FINALIZADO] Sincronización finalizada correctamente.
