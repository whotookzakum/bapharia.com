export async function load({ params }) {
    const guide = await import(`../../../lib/guides/${params.slug}.md`)
    const readingTime = Math.ceil(guide.default.render().html.replace(/<\/?[^>]+>/g, "").split(/[\s.!?—-]+/).length / 200)
    return {
        readingTime,
    }
}