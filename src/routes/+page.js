import { fetchMarkdownPosts } from '$lib/utils'

export const load = async () => {
    const allGuides = await fetchMarkdownPosts()
    const sortedGuides = allGuides.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date)
    })

    return {
        guides: sortedGuides
    }
}