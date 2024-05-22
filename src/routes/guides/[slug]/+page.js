export async function load({ params, data }) {
    const guide = await import(`../${params.slug}.md`)
    return {
        metadata: {
            ...guide.metadata,
            readingTime: data.readingTime
        },
        html: guide.default,
    }
}