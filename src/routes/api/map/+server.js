import map from "./cty01_SHP.json"
import { json } from '@sveltejs/kit'

export const GET = async () => {
    const points = map.filter(point => 
        point.Type === "SceneComponent" 
        && point.Properties?.hasOwnProperty("RelativeLocation")
        // && point.Outer.includes("WarpPoint") // Warp Point
        // && point.Outer.includes("LockerTarget") // Storage
        // && point.Outer.includes("LiquidMemory")
        && point.Outer.includes("SynthesisShop") // Weapon reconstructor
    )

    return json(points)
}