<script>
    import { userLocale } from "$lib/stores";
    export let sources;
</script>

<h2>Drops from</h2>

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
                    href="/db/enemy/{source.enemy_id}{source.location.id ? `?map=${source.location.id}` : ""}"
                >
                    {source.name[$userLocale]}
                </a>
                {#if source.location.id}
                    <a
                        class="location-name styled-link"
                        href="/db/map/{source.location.id}"
                        >{source.location.name[$userLocale]}</a
                    >
                {/if}
            </div>
        </li>
    {/each}
</ul>
<small
    >Weapon chests have a 50% chance to contain a weapon for your current class.</small
>

<style lang="scss">
    small {
        display: block;
        margin-top: 0.75rem;
    }

    li {
        gap: 1rem;
        align-items: center;
        position: relative;
        z-index: 1;
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
