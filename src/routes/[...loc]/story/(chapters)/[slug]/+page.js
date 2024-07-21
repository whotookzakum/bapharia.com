export async function load({ params, data }) {
    // For some reason single file import isn't working with [...loc]
    const allPosts = import.meta.glob("../../*.md", { eager: true })
    const post = allPosts[`../../${params.slug}.md`]
    return {
        metadata: {
            ...post.metadata,
            readingTime: data.readingTime
        },
        html: post.default,
    }
}