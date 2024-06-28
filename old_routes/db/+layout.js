export const load = async ({ fetch }) => {
    const res = await fetch("/api/entries?lang=en_US")
    const entries = await res.json()
    return { entries }
}