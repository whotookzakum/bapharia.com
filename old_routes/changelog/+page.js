export async function load() {
    const post = await import('./changelog.md')
    return {
        meta: post.metadata,
        content: post.default
    }
}