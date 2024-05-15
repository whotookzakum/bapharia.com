export const load = async () => {
    const allGuides =
        Object.entries(import.meta.glob("../../lib/guides/*.md", { import: "metadata", eager: true }))
            .reduce((acc, [key, value]) => {
                const href = key.split("/lib")[1].split(".")[0]
                acc.push({ href, title: value.title })
                return acc
            }, [])
    
    return { allGuides }
}