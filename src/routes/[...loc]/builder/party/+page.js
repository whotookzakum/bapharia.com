import { getApi } from '$lib/utils.js'

const ids = [
    120000300, // Charlotte α
    120000110, // Aerinse β
    120000400, // Einrain α
    133001000, // Bandit Chief Higma
    131005100, // Elite Knight
    120000510, // Electra β
    
    120000410, // Einrain β
    131002100, // Providence Eye
    131000500, // Ferocious Gold
    131001600, // Little Brawler
    131001800, // Valley Vanguard
    131003300, // Bandit Scout Fox

    120000010, // Feste β
    131003800, // Prairie Anima
]

export const load = async ({ params, fetch }) => {
    const allImagines = await getApi("imagines", params)
    const bImagines = allImagines
        .filter(i => i.imagine_type === 1 && ids.includes(i.id))
        .sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id))

    return { bImagines }
}