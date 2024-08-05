@echo off

@REM Umodel: handle 3D models 
@REM scripts\umodel\umodel_materials -game="ue4.27" -path=C:\BandaiNamcoLauncherGames\BLUEPROTOCOL -aes=0xEA9051DDACE1CCF98A0510F0E370BD986A75C74756E0309E6A578A47AF564255 -pkg=\Game\Character\Weapon\WP\* -out=D:\bapharia.com\scripts\UnrealExporter\bno -export -gltf -png

@REM UnrealExporter: handle UI PNGs
cd scripts\UnrealExporter
@REM UnrealExporter.exe assets

@REM Copy assets to /bpassets (main)
cd ..\..\bpassets
git checkout main
@REM robocopy ..\scripts\UnrealExporter\bno\BLUEPROTOCOL\Content . /e
@REM robocopy ..\scripts\UnrealExporter\bno . /e /xd BLUEPROTOCOL

@REM Copy assets to /bpassets (webp)
git checkout webp
@REM robocopy ..\scripts\UnrealExporter\bno\BLUEPROTOCOL\Content . /e
@REM robocopy ..\scripts\UnrealExporter\bno . /e /xd BLUEPROTOCOL

@REM
@REM cd ..\..\bpassets
@REM git checkout webp
@REM robocopy .\bno\BLUEPROTOCOL\Content\UI ..\..\bpassets\UI /E

@REM rm -rf .\bno\BLUEPROTOCOL\Content\UI


@REM UnrealExporter: handle JSONs

@REM Move JSONs
@REM robocopy .\bno\BLUEPROTOCOL ..\..\api\bp_client\bno /E /MOV 
@REM rm -rf .\bno

@REM cd ..



echo Finished exporting client to /api/bp_client/bno and /bpassets