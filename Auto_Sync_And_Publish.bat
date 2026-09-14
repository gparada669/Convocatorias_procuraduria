@echo off
cd /d "%~dp0"
echo ============================================================
echo   [SISTEMA AUTO] Actualizando base de datos PGN 2026...
echo ============================================================
call node scraper.js
echo.
echo ============================================================
echo   [SISTEMA AUTO] Publicando en GitHub Pages...
echo ============================================================
git add convocatorias.json index.html
git commit -m "Auto sync PGN dataset"
git push origin master
echo.
echo [FINALIZADO] Sincronización finalizada correctamente en GitHub Pages.
