import { json } from '@sveltejs/kit'
import iconData from "../../graphql/bp_client/japan/Content/Blueprints/UI/Icon/DT_MakeupIconDB.json"

export const GET = async () => {
    const icons = {}

    Object.entries(iconData[0].Rows).forEach(([id, data]) => {
        // const imgData = Object.values(data)[0].AssetPathName.replace("/Game", "").split(".")[0]
        let imgData;
        let i = 0;
        while((imgData === "None" || !imgData) && i < Object.values(data).length) {
            imgData = Object.values(data)[i].AssetPathName.replace("/Game", "").split(".")[0]
            i++;
        }
        icons[id] = `${imgData}.png`
    })

    return json(icons)
}