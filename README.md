1. `npm run updateAll`
2. Push submodule `bp assets`
3. Pull submodule `bptranslatefiles` 
4. Visit `/api/skilltext` to check for updates in skill strings.
5. Visit `/api/create` to output api routes
6. Move `api` folder out of `routes`
7. `npm run build`
8. Deploy via wrangler

In the `/api/create`, I delete SkillInfo from skills, as it's not needed in the final .json and takes a lot of data. This fixed running out of memory when building. May be needed for other jsons as well.

## Update checklist
1. **Fetch and decrypt API**
2. Update cloudflare KV
3. Update worker schema

1. **Datamine new client files**
2. Update bp_client files
3. Update UI files
4. Create new map images
5. Place new map markers

## Deploy checklist
- Change graphql endpoint `/src/client.js`
- Move `kv` and `graphql` out of routes
- Watch remote schema `/houdini.config.js`

## ITEMS
- Weapons
    - 3d model
    - stats (class, level, element, str, int...)
    - recipe
    - sale price
- Imagine
    - 3d model
    - stats
    - recipe
    -sale price
- Consumables
    - effect
    - sale price
- Cosmetic Items
    - 3d model
- Materials (drops & resources)
    - source (drops from x in y/found in y)
- Plugs
    - stats
- Currencies
- Stamps
- Liquid Memory
    - effect
    - source

## ENTITIES
- Enemies
    - 3d model
    - stats
    - location
    - drops
- NPCs
    - location

## OTHER
- Achievements
- Maps
    - enemies
    - resources
    - NPCs
- Buffs?
- Skills
    - class
    - stats/effects
- Classes?
    - skills


If possible have links show a preview of content on hover, i.e. hover a map name -> show map image; hover an item name -> show the header content with thumbnail and whatnot

Search parameters i.e. `location:minster hills` or `drops:goblin staff` and show results that have those