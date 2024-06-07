export async function load({ params }) {
    const post = await import(`../../${params.slug}.md`)
    const readingTime = Math.ceil(post.default.render().html.replace(/<\/?[^>]+>/g, "").split(/[\s.!?—-]+/).length / 200)
    return {
        readingTime,
    }
}