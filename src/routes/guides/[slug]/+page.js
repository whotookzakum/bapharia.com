// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog

export async function load({ params }) {
    const post = await import(`../${params.slug}.md`)
    const { title, date } = post.metadata
    const content = post.default

    return {
        content,
        title,
        date,
    }
}