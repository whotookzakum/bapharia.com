export async function load({ params }) {
    const post = await import(`../../../lib/classes/${params.classId}.md`)
    return {
        metadata: post.metadata,
        html: post.default,
    }
}