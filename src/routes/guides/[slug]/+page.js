// export const csr = false
import hi from "../../../lib/guides/combat.md"
// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
export async function load({ params }) {
    const allGuides =
        Object.entries(import.meta.glob("../../../lib/guides/*.md", { import: "metadata", eager: true }))
            .reduce((acc, [key, value]) => {
                const href = key.split("/lib")[1].split(".")[0]
                acc.push({ href, title: value.title })
                return acc
            }, [])

    const guide = await import(`../../../lib/guides/${params.slug}.md`)
    const { metadata } = guide
    // Find all <h2> elements and extract their id and inner text to create a table of contents
    const pattern = /<h2\s+id="([^"]+)"[^>]*>(.*?)<a\s[^>]*>.*?<\/a>?<\/h2>/g;
    let matches, anchors = [];
    if (guide.default.render) {
        const html = guide.default.render().html
        while (matches = pattern.exec(html)) {
            const [_, id, title] = matches
            anchors.push({ id, title });
        }
    }

    return {
        metadata,
        html: guide.default,
        allGuides,
        anchors
    }
}