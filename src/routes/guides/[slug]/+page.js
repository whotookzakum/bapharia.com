export async function load({ params }) {
    const guide = await import(`../../../lib/guides/${params.slug}.md`)

    return {
        metadata: guide.metadata,
        html: guide.default,
    }
}