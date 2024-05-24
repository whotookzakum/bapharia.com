@echo off
cd scripts\UnrealExporter
UnrealExporter.exe config
robocopy .\output\BLUEPROTOCOL ..\..\src\bp_client\japan /E /MOV 
@REM xcopy .\output\BLUEPROTOCOL ..\..\src\bp_client\japan /s /y
rm -rf .\output
echo Finished exporting client to /src/bp_client/japan