// import { getSummaries as imagines } from "../api_old/imagines";
import { getSummaries as items } from "./items";
import { getSummaries as seasons } from "./seasons";
import { getSummaries as weapons } from "./weapons";
import { getSummaries as avatarparts } from "./avatarparts";
import { getSummaries as emotes } from "./emotes";
import { getSummaries as skills } from "./skills";
import { getSummaries as achievements } from "./achievements";
import { getSummaries as costumes } from "./costumes";
import { getSummaries as gacha } from "./gacha";
import { getSummaries as liquidmemories } from "./liquidmemories";
import { getSummaries as mounts } from "./mounts";
import { getSummaries as stamps } from "./stamps";
import { getSummaries as tokens } from "./tokens";

const entries = async (lang) => {
    return [
        // ...achievements(lang),
        // ...avatarparts(lang),
        // ...costumes(lang),
        // ...emotes(lang),
        // ...gacha(lang),
        // ...imagines(lang),
        // ...items(lang),
        // liquidmemories(lang),
        // ...mounts(lang),
        // ...seasons(lang),
        ...await skills(lang),
        // ...stamps(lang),
        // ...tokens(lang),
        // ...weapons(lang),
    ]
}

export default entries;