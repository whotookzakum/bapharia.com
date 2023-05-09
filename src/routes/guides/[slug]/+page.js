// https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
import { fetchMarkdownPosts } from '$lib/utils'

export async function load({ params }) {
    const post = await import(`../${params.slug}.md`)

    const allGuides = await fetchMarkdownPosts()
    const sortedGuides = allGuides.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date)
    })

    return { 
        guides: sortedGuides,
        content: post.default
    }
}