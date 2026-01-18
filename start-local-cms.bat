@echo off
echo ========================================
echo Starting Decap CMS Local Development
echo ========================================
echo.
echo Starting local backend proxy server...
echo Access CMS at: http://localhost:8080/admin
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

start "HTTP Server" cmd /k "npx http-server -p 8080 -c-1"
timeout /t 3 /nobreak >nul
start "Decap Server" cmd /k "npx decap-server"

echo.
echo Both servers are starting...
echo Opening browser in 5 seconds...
timeout /t 5 /nobreak >nul
start http://localhost:8080/admin

echo.
echo Done! CMS is running.
echo Close both terminal windows to stop.
