// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog

export async function load({ params }) {
    const post = await import(`../${params.slug}.md`)
    return { content: post.default }
}