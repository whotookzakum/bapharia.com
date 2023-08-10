// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
export async function load({ params }) {
    const post = await import(`../../../lib/guides/${params.slug}.md`)
    return {
        meta: post.metadata,
        content: post.default
    }
}