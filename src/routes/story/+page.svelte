<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import StickyNote from "$lib/components/StickyNote.svelte";
</script>

<MetaTags
    title="Guides — Bapharia"
    description="Information about the main story chapters, characters, and timeline of BLUE PROTOCOL."
/>

<article class="main-pane">
    <hgroup>
        <p class="mini-header">BLUE PROTOCOL</p>
        <h1>Story</h1>
        <p>Information about the main story chapters, characters, and timeline.</p>
    </hgroup>

    <section>
        <h2>What's here?</h2>
        <p>
            <a href="/story/characters">Characters</a> provides a per-chapter breakdown of the characters that appear in the main story of BLUE PROTOCOL.
        </p>
        <p>
            The <a href="/story/timeline">timeline</a> presents a comprehensive list of all events occuring in the timeline of the main story.
        </p>
        <p>
            On chapter pages, you can find summaries of what happened in each story chapter, along with a video of all cutscenes from that chapter. In-game chapters feature a mix of cinematic cutscenes and visual novel-style storytelling.
        </p>
        <p>
            <strong>Story pages are only available in English.</strong>
        </p>
    </section>
</article>

<style lang="scss">
    ul.card-grid {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: var(--space-s-m);
        margin: var(--space-s-m) 0;
        max-width: 100%;

        li {
            max-inline-size: none;
        }
    }
</style>
