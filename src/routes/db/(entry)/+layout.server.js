export const load = async ({ params, url }) => {
    let fileName = url.pathname.split("/")[2];

    if (fileName.charAt(fileName.length - 1) === "y") {
        fileName = fileName.replace("y", "ie")
    }

    const entries = await import(`../../kv/functions/${fileName}s.js`)
    return entries.default.find(entry => entry.id === params.id)
}