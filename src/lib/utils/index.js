import { goto } from "$app/navigation";
import { page } from "$app/stores";
import { browser } from "$app/environment";
import { get } from "svelte/store";

export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('../guides/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver()
            const postPath = path.slice(2, -3)

            return {
                meta: metadata,
                path: postPath,
            }
        })
    )

    return allPosts
}

export function updateSearchParams(param, newValue) {
    const pageStore = get(page)
    
    if (!newValue) {
        pageStore.url.searchParams.delete(param);
    } else {
        pageStore.url.searchParams.set(param, newValue);
    }

    if (browser) {
        goto(`?${pageStore.url.searchParams.toString()}`, {
            noScroll: true,
            replaceState: false,
            keepFocus: true,
            invalidateAll: true,
        });
    }
}