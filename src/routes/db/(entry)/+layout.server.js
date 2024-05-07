export const load = async ({ params, url }) => {
    let fileName = url.pathname.split("/")[2];

    if (fileName.charAt(fileName.length - 1) === "y") {
        fileName = fileName.replace("y", "ie")
    }

    const entries = await import(`../../../../functions/${fileName}s.js`)

    // const res = await fetch("http://localhost:5173/weapons/106001201?lang=en_US")
    const res = await fetch("http://localhost:5173/tokens/100000101?lang=en_US")
    const data = await res.json()

    return data
    return entries.default.find(entry => entry.id === params.id)
}