# Enemy-related files

## Client
- Models: `/Content/Character/Enemy`
- Spawn locations, respawn time: `/Content/Maps/*/*/sublevel/*_EN.umap`
- Spawn location ID to Enemy ID mapping, Enemy levels: `/Content/Blueprints/Manager/EnemySet`

### Naming conventions
- NQ_1001_3_001 (Pink Boarlet): `NAMEDQUEST_[EnemyInstanceId]_[Zone]_[NamedEnemyInstanceId]`

## Server
- Enemy IDs, name IDs, stats: `/enemyparams.json`

### Naming conventions
- E005_00_01_01001 (Pink Boarlet): `ENEMY[EnemyRace]_[MajorVariant]_[MinorVariant]_[EnemyInstanceId]`