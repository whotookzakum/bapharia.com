## Deploy checklist
`127.0.0.1:5173/kv` get the kv data to push to cloudflare
`/src/routes/graphql/schema.js` get the schema to put in the worker
`/src/client.js` change graphql api endpoint
`/src/routes/kv` move kv out of routes
`/src/routes/graphql` move graphql out of routes
`/houdini.config.js` change watch schema

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