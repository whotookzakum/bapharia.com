export async function load() {
    const post = await import("./classes.md")
    return {
        metadata: post.metadata,
        html: post.default
    }
}