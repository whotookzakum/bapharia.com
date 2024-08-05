@echo off

@REM Umodel: handle 3D models 
scripts\umodel\umodel_materials -game="ue4.27" -path=C:\BandaiNamcoLauncherGames\BLUEPROTOCOL -aes=0xEA9051DDACE1CCF98A0510F0E370BD986A75C74756E0309E6A578A47AF564255 -pkg=\Game\Character\Weapon\WP\* -out=D:\bapharia.com\scripts\UnrealExporter\bno -export -gltf -png

@REM UnrealExporter: handle JSONs and UI PNGs
cd scripts\UnrealExporter
UnrealExporter.exe config

@REM Copy assets to /bpassets (main)
cd ..\..\bpassets
git checkout main
robocopy ..\scripts\UnrealExporter\bno\BLUEPROTOCOL\Content . /e
robocopy ..\scripts\UnrealExporter\bno . /e /xd BLUEPROTOCOL
git add .
git commit -m "Updated via script"
git push

@REM Copy assets to /bpassets (webp)
git checkout webp
robocopy ..\scripts\UnrealExporter\bno\BLUEPROTOCOL\Content . /e /mov
robocopy ..\scripts\UnrealExporter\bno . /e /xd BLUEPROTOCOL
git add .
git commit -m "Updated via script"
git push
git checkout main
cd ..

@REM Move client data to /api/bp_client
robocopy .\scripts\UnrealExporter\bno\BLUEPROTOCOL ..\api\bp_client\bno /e /mov /xd Content\UI
rm -rf .\scripts\UnrealExporter\bno

echo Finished exporting client to /api/bp_client/bno and /bpassets