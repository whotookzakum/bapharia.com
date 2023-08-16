export async function load() {
    const post = await import(`./classes.md`)
    return {
        meta: post.metadata,
        content: post.default
    }
}