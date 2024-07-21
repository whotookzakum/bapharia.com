export const load = async () => {
    const allPosts =
        Object.entries(import.meta.glob("./*.md", { import: "metadata", eager: true }))
            .reduce((acc, [key, value]) => {
                const href = "/story" + key.split(".")[1]
                acc.push({ href, chapter: value.chapter })
                return acc
            }, [])
    
    return { allPosts }
}