export async function load({ params }) {
    // For some reason single file import isn't working with [[lang]]
    const allGuides = import.meta.glob("../*.md", { import: "default", eager: true })
    const guide = allGuides[`../${params.slug}.md`]
    const readingTime = Math.ceil(guide.render().html.replace(/<\/?[^>]+>/g, "").split(/[\s.!?—-]+/).length / 200)
    return {
        readingTime,
    }
}