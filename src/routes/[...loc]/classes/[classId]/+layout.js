export async function load({ params }) {
    // For some reason single file import isn't working with [...loc]
    const allPosts = import.meta.glob("./*.md", { eager: true })
    const post = allPosts[`./${params.classId}.md`]
    return {
        metadata: post.metadata,
        html: post.default,
    }
}