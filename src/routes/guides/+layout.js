export const load = async () => {
    const allGuides =
        Object.entries(import.meta.glob("./*.md", { import: "metadata", eager: true }))
            .reduce((acc, [key, value]) => {
                const href = "/guides" + key.split(".")[1]
                acc.push({ href, title: value.title })
                return acc
            }, [])
    
    return { allGuides }
}