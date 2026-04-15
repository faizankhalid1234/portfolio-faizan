@echo off
echo Starting Portfolio Server...
echo.
echo Open in browser: http://localhost:3000
echo Press Ctrl+C to stop
echo.
cd /d "%~dp0"
npx -y serve -l 3000
pause
