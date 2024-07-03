export async function load({ params, data }) {
    const post = await import(`../../${params.slug}.md`)
    return {
        metadata: {
            ...post.metadata,
            readingTime: data.readingTime
        },
        html: post.default,
    }
}