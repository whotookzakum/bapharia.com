export async function load({ params }) {
    const post = await import(/* @vite-ignore */`./${params.classId}.md`)
    return {
        metadata: post.metadata,
        html: post.default,
    }
}