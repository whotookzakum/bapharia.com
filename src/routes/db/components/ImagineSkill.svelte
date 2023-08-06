<script>
    import { userLocale } from "$lib/stores";
    export let name = null;
    export let desc = null;
    export let skillType = null;

    const skillTypes = {
        "attack": {
            ja_JP: "攻撃タイプ",
            en_US: "Attack"
        },
        "support": {
            ja_JP: "補助タイプ",
            en_US: "Support"
        },
        "heal": {
            ja_JP: "回復タイプ",
            en_US: "Heal"
        },
    }
</script>

<h4>Skill</h4>
<div class="border-left">
    {#if skillType}
        <span class={`box tag ${skillType}`}>{skillTypes[skillType][$userLocale]}</span>
    {/if}
    {#if name}
        <h5>{name[$userLocale]}</h5>
    {/if}
    <p>{desc[$userLocale]}</p>
</div>

<style lang="scss">
    h5 {
        margin: 0;
        color: var(--accent);
        display: inline-block;
        line-height: 1.8;
    }

    p {
        margin-top: 0.5rem;
    }

    .tag {
        border-radius: 3px;
        text-transform: uppercase;
        font-weight: 800;
        font-size: var(--step--2);
        padding: 0.25rem 0.5rem;
        margin: 0rem;
        line-height: 2.4;
    }

    .attack {
        background: hsl(0, 95%, 25%);
        color: hsl(0, 15%, 85%);
        border-color: hsl(0, 65%, 35%);
    }

    .heal {
        background: hsl(150, 95%, 20%);
        color: hsl(150, 15%, 80%);
        border-color: hsl(150, 65%, 30%);
    }

    .support {
        background: hsl(200, 95%, 25%);
        color: hsl(200, 15%, 85%);
        border-color: hsl(200, 65%, 35%);
    }
</style>
