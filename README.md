1. `npm run upd` updates bp_api, bp_client, bpassets
3. Pull submodule `bptranslatefiles` 
4. Move `/old_routes/create` to `/routes/api/create` and visit `/api/create` to update the API; move back to `/old_routes` afterwards

In the `/api/create`, I delete SkillInfo from skills, as it's not needed in the final .json and takes a lot of data. This fixed running out of memory when building. May be needed for other jsons as well.

If SSR and caching don't work, prerender each page locally and deploy via wrangler CLI.

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


## Architecture
1. Detect user location & redirect to BNO or AGS version
2. Detect user locale & redirect to EN/JA/FR etc.
3. Load content and listen to changes in publisher or locale. Store as cookie.