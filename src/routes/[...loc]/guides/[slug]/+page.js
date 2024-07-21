export async function load({ params, data }) {
    // For some reason single file import isn't working with [...loc]
    const allGuides = import.meta.glob("../*.md", { eager: true })
    const guide = allGuides[`../${params.slug}.md`]
    return {
        metadata: {
            ...guide.metadata,
            readingTime: data.readingTime
        },
        html: guide.default,
    }
}