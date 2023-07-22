export async function load({ params }) {
    const post = await import(`../../../../lib/classes/${params.classId}.md`)

    return {
        meta: post.metadata,
        content: post.default
    }
}