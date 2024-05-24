# Item-related files

## Client
- Item ID to Icon mapping: `/Content/Blueprints/UI/Icon/Map/DT_ItemIconDB.json`

## Server
- Item ID, name, desc, effect, price: `/items.json`

### Variables
`category`
- 0: consumable
- 1: sell-only (fish, luno gems)
- 2: ability plug
- 3: general item (materials, etc)
- 4: idea
- 5: set box
- 6: selection box
- 7: random box (random plug..)

#### item_box.json
`item_box_type_id`
- 1: set box
- 2: random box
- 3: selection box
- 4: costume set (gendered)

enum class EItemBoxType {
    None = 0,
    Set = 1,
    Random = 2,
    Select = 3,
    CostumeSet = 4,
    EItemBoxType_MAX = 5,
};