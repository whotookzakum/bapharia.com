# Quest-related files

## Client
- Quest locations: `/Content/Maps/*/*/sublevel/*_QST_*.umap` *Class/Exploration?/Main/Sub/T? quests*

## Server
- Quest IDs, steps, NPCs, locations, conditions: `/quests.json`
- Quest rewards: `/rewards.json`

### Naming conventions
- MQ103_010 `MQ1[Chapter]_[QuestId]`

### Variables
Category1 = [{1 = Normal}]
Category2 = [{1 = Main}, {2 = Sub},{3 = Extra}, {4 = Class}, {5 = Function Release}]
Category3 = [{1 = Errand}, {2 = Defeat Enemy}, {3 = Gather, Collection}, {4 = Traverse}] 

quest_condition_steps.condition_items.type
- 1: speak to npc
- 2: defeat enemy
- 3: craft an imagine
- 4: clear dungeon
- 5: go to place
- 6: requires adventurer rank
- 7: use an emote
- 8: activate teleportal
- 10: craft a weapon
- 13: get drop from enemy
- 14: gather resource

quest_condition_steps.condition_items.item_type
- 2: weapon
- 5: imagine
