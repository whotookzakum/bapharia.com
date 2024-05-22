export const load = async () => {
    const allClasses =
        Object.entries(import.meta.glob("../../lib/classes/*.md", { import: "metadata", eager: true }))
            .reduce((acc, [key, value]) => {
                const href = key.split("/lib")[1].split(".")[0]
                acc.push({ href, title: value.title, isNew: value.isNew, weapon: value.weapon })
                return acc
            }, [])
            .sort((a, b) => {
                if (a.title < b.title) return -1
                if (a.title > b.title) return 1
                return 0;
            })

    return { allClasses }
}