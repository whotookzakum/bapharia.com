import { json } from '@sveltejs/kit'
import iconData from "./DT_ItemIconDB.json"

export const GET = async ({ params, fetch }) => {

    const icons = {}

    Object.entries(iconData[0].Rows).forEach(([id, data]) => {
        const imgData = Object.values(data)[0].AssetPathName.replace("/Game", "").split(".")[0]
        icons[id] = `${imgData}.png`
    })

    return json(icons)
}