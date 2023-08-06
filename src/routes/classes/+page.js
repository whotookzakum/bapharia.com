export async function load({ params }) {
    const post = await import(`./classes.md`)
    return {
        meta: post.metadata,
        content: post.default
    }
}