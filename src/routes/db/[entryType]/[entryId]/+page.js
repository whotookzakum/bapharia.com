export const load = async ({ fetch, params, url }) => {
    const { entryType, entryId } = params
    const res = await fetch(`/api/${entryType}/${entryId}?lang=en_US`)
    const data = await res.json()
    return data
}