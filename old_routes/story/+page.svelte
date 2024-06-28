<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
</script>

<MetaTags
    title="Story — Bapharia"
    description="Information about the main story chapters, characters, and timeline of BLUE PROTOCOL."
/>

<article class="main-pane">
    <hgroup>
        <p class="mini-header">BLUE PROTOCOL</p>
        <h1>Story</h1>
        <p>
            Information about the main story chapters, characters, and timeline.
        </p>
    </hgroup>

    <section>
        <h2>What's here?</h2>
        <p>
            <a href="/story/characters">Characters</a> provides a per-chapter breakdown
            of the characters that appear in the main story of BLUE PROTOCOL.
        </p>
        <p>
            The <a href="/story/timeline">timeline</a> presents a comprehensive list
            of all events occuring throughout main story, ordered chronologically.
        </p>
        <p>
            On chapter pages, you can find summaries of what happened in each
            story chapter, along with a video of all cutscenes from that
            chapter. In-game chapters feature a mix of cinematic cutscenes and visual
            novel-style storytelling. Lore from side quests are not included.
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
