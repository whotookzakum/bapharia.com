export async function load({ params }) {
    const allPosts = import.meta.glob("../../*.md", { import: "default", eager: true })
    const post = allPosts[`../../${params.slug}.md`]
    const readingTime = Math.ceil(post.render().html.replace(/<\/?[^>]+>/g, "").split(/[\s.!?—-]+/).length / 200)
    return {
        readingTime,
    }
}