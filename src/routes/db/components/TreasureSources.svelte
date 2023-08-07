<script>
    import StickyNote from "$lib/components/StickyNote.svelte";
import { userLocale } from "$lib/stores";
    export let sources;
</script>

<h2>Drops from</h2>
<div class="section-wrapper flex">
    <ul class="unstyled-list" role="list">
        {#each sources as source}
            <li class="flex box">
                <div class="thumbnail-wrapper">
                    <img
                        src="/images/goldchest.png"
                        alt=""
                        width="96"
                        height="96"
                        loading="lazy"
                    />
                    <span class="probability">{source.probability / 100}%</span>
                </div>
                <div class="grid">
                    <a
                        class="enemy-name styled-link"
                        href="/db/enemy/{source.enemy_id}"
                    >
                        {source.name[$userLocale]}
                    </a>
                    <a
                        class="location-name styled-link"
                        href="/db/map/{source.location.id}"
                        >{source.location.name[$userLocale]}</a
                    >
                </div>
            </li>
        {/each}
    </ul>
    <div class="note-wrapper">
        <StickyNote type="note" style="margin: 0; max-inline-size: none">
            Weapon chests have a 50% chance to contain a weapon for your current class.
        </StickyNote>
    </div>
</div>

<style lang="scss">
    .section-wrapper {
        gap: 1rem; 
        align-items: start;
        flex-wrap: wrap;

        ul, .note-wrapper {
            flex: 1;
            flex-basis: 30ch;
        }

        .note-wrapper {
            position: sticky;
            top: calc(62px + 1rem);
        }
    }

    li {
        gap: 1rem;
        align-items: center;
        position: relative;
        z-index: 1;
        max-inline-size: none;
    }

    .thumbnail-wrapper {
        position: relative;
        
        img {
            display: block;
        }
    }

    .enemy-name {
        font-size: var(--step-2);
        font-weight: 600;
    }

    .location-name {
        color: var(--text2);
    }

    .probability {
        position: absolute;
        bottom: -10px;
        right: -8px;
        top: unset;
        text-align: center;
        margin-left: auto;
        font-weight: 700;
        padding: 0.05rem 0.3rem;
        border-radius: 5px;
        color: var(--accent);
        background: linear-gradient(335deg, var(--bg), var(--surface1));
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
</style>
