export async function load({ params }) {
    const post = await import(`./events.md`)
    return {
        content: post.default
    }
}