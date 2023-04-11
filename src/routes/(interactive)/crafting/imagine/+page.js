export async function load({ fetch, params }) {
    const res = await fetch("/api/imagine")
    const imagines = res.json()
    return { imagines }
}