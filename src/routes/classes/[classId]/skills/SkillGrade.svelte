<script>
    import { userLocale } from "$lib/stores";

    export let grade = 0;
    export let reqLevel = 0;
    export let ability_type = 0;
    export let desc;
    function getAltText() {
        switch (ability_type) {
            case 1:
                return "alpha";
            case 2:
                return "beta";
            case 3:
                return "gamma";
            default:
                return "normal";
        }
    }

    function getText(locale) {
        
        const string = desc[locale].replace(/(G[1-3]|α|β)/g, '').replace(/：|: /g, '|')
        const splitString = string.split("|")
        if (splitString[grade]) return splitString[grade] // tac skills
        if (splitString[0]) return splitString[0] // ults
        return splitString[1] // alpha and beta
    }

    $: interpolatedString = getText($userLocale)
</script>

<div class="row grid">
    {#if ability_type > 0 && ability_type !== 100}
        <hr style:margin="1rem 0" style:grid-column="-2" />
    {/if}
    <dt class="grid">
        <span
            class="grade skip-std"
            class:hidden={ability_type > 0 && ability_type !== 100}
        >
            G{grade}
        </span>
        <img
            src="/UI/SkillTree/UI_SkiList_IconType0{ability_type !== 100
                ? ability_type
                : 0}.png"
            alt={getAltText()}
            width="32"
            height="32"
        />
        <span class="level-requirement">(Level {reqLevel})</span>
    </dt>
    <dd>{interpolatedString}</dd>
</div>

<style lang="scss">
    .row {
        grid-template-columns: 16ch 1fr;
        column-gap: 2rem;
        font-size: var(--step-1);
    }

    dt {
        grid-template-columns: 3ch 32px auto !important;
        gap: 0.5rem;
        align-items: center;

        .grade {
            justify-self: end;
            font-size: var(--step-2);
            font-weight: normal;
        }

        .hidden {
            opacity: 0;
        }

        .level-requirement {
            color: var(--text2);
        }
    }

    dd {
        max-inline-size: none;
        margin: 0;
    }

    @media (max-width: 600px) {
        .grid {
            grid-template-columns: 1fr;
            gap: 0.25rem;
        }

        dt .hidden {
            opacity: unset;
        }

        dt {
            display: flex;
        }
    }
</style>
