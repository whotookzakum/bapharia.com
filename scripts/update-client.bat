@echo off
cd scripts\UnrealExporter
UnrealExporter.exe config
robocopy .\output\BLUEPROTOCOL\Content\UI ..\..\static\UI /E /MOV
rm -rf .\output\BLUEPROTOCOL\Content\UI
robocopy .\output\BLUEPROTOCOL ..\..\src\bp_client\japan /E /MOV 
rm -rf .\output
echo Finished exporting client to /src/bp_client/japan