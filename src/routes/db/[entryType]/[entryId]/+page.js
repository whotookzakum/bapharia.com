export const load = async ({ fetch, params, url }) => {
    const { entryType, entryId } = params
    const res = await fetch(`http://localhost:5173/${params.entryType}/${params.entryId}?lang=en_US`)
    const data = await res.json()
    return data
}