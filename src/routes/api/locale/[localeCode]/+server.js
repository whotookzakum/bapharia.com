import { json } from '@sveltejs/kit'

function arrayOfObjectsToObject(arr) {
    return Object.assign({}, ...arr)
}

function combineObjectKeyWithValue(arr, key, value) {
    return arr.map((obj) => {
        return { [obj[key]]: obj[value] }
    })
}

export const GET = async ({ params }) => {
    const allTexts = await import(`../../../../lib/apiext/texts/${params.localeCode}.json`);

    const textsArray = allTexts.default.map((category) => {

        const entries = combineObjectKeyWithValue(category.texts, "id", "text")

        return {
            [category.name]: arrayOfObjectsToObject(entries)
        }
    })

    const texts = arrayOfObjectsToObject(textsArray)

    return json(texts)
}