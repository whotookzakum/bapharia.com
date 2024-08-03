# Enemy-related files

`EnemyWave_common.uasset` contains wave info, with enemy sets and their spawn conditions inside
`EnemySet_common.uasset` contains the enemies that spawn in that enemy set
`_common` can be replaced with arena/dungeon/field/extra etc.

## Client
- Models: `/Content/Character/Enemy`
- Spawn locations, respawn time: `/Content/Maps/*/*/sublevel/*_EN.umap`
- Spawn location ID to Enemy ID mapping, Enemy levels: `/Content/Blueprints/Manager/EnemySet`
- `DT_EnemyBattleStatusBiasByContentIdDB`
Min lv max lv `EnemySet_field`
- `DT_EnemyDungeonAttributeDB`
- AttackElement `DT_LibraryEnemyTable`

### Naming conventions
- NQ_1001_3_001 (Pink Boarlet): `NAMEDQUEST_[EnemyInstanceId]_[Zone]_[NamedEnemyInstanceId]`

## Server
- Enemy IDs, name IDs, stats: `/enemyparams.json`
elite monster respawn times etc `masterchallengequest.json`

### Naming conventions
- E005_00_01_01001 (Pink Boarlet): `ENEMY[EnemyRace]_[MajorVariant]_[MinorVariant]_[EnemyInstanceId]`
Major Variants have different models; Minor Variants have different materials

### Variables
`is_boss`
- 0: normal enemy
- 1: story?
- 2: named enemy
- 3: dungeon boss