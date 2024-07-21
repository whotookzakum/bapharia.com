import enemiesData from "$bp_api/bno/enemyparams.json"
import { getText } from "$api/utils"

export const load = () => {
    const enemies =
        enemiesData
            .filter(enemy => enemy.drop_items.some(drop => drop.item_index === 500009005))
            .flatMap(enemy =>
                enemy.drop_items.map(drop => ({ ...drop, name: getText("enemyparam_text", enemy.name_id) }))
            )


    console.log(enemies)

    return { enemies }
}
