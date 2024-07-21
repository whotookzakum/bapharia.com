@echo off

@REM UnrealExporter to export JSON, audio, etc. 
cd scripts\UnrealExporter
UnrealExporter.exe config
robocopy .\output\BLUEPROTOCOL\Content\UI ..\..\bpassets\UI /E /MOV
rm -rf .\output\BLUEPROTOCOL\Content\UI
robocopy .\output\BLUEPROTOCOL ..\..\api\bp_client\bno /E /MOV 
rm -rf .\output
echo Finished exporting client to /api/bp_client/bno

@REM UE Viewer to export 3d models
cd ..
umodel\umodel_materials -game="ue4.27" -path=C:\BandaiNamcoLauncherGames\BLUEPROTOCOL -aes=0xEA9051DDACE1CCF98A0510F0E370BD986A75C74756E0309E6A578A47AF564255 -pkg=\Game\Character\Weapon\WP\* -out=D:\bapharia.com\bpassets -export -gltf