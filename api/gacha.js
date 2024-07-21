const res = await fetch("https://object-web.blue-protocol.com/gasha.json")
const GACHAS_RAW = await res.json()

// TODO: get icons for rewards (tokens, items, emotes, costumes...)
function processBanner(banner, lang) {
    // Banner: "Otherworldly Outfit Gacha"
    // Category: Male/Female/Mount
    const gashaCostumeList = banner.gashaCostumeList.map(category => {
        const csvStrings = [
            "itemCsv", // Rewards directly from gacha
            "bonusCsv", // Rewards for pulling 10, 40, 70, 110 etc. times
            "roseOrbBonusCsv", // Rewards for pulling with Rose Orbs (gives BPP)
            "stepupCsv", // Guaranteed prizes from step up gacha
            "stepupStepCsv", // For each step: amount of pulls performed (# of random gacha items received + # of guaranteed prizes received) and price
        ]

        csvStrings.forEach(key => {
            try { category[key] = JSON.parse(category[key]) }
            catch (err) { }
        })

        return category
    })

    return {
        ...banner,
        url: "https://blue-protocol.com/gasha/" + banner.urlPageName,
        gashaCostumeList
    }
}

export function getEntry(id, lang) {
    return processBanner(GACHAS_RAW.find(banner => banner.gashaId == id), lang)
}

export const getSummaries = (lang) => GACHAS_RAW.map(banner => {
    const data = processBanner(banner, lang)
    return {
        href: `/db/gacha/${data.gashaId}`,
        name: data.gashaName,
        jpName: data.gashaName,
        // icon,
        // iconL,
        category: "Gacha"
    }
})

const gachas = (lang) => GACHAS_RAW.map(banner => processBanner(banner, lang))

export default gachas;