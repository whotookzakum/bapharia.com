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
        // Remove from text: G1 G2 G3 and Japanese and English colons
        const string = desc[locale].replace(/(G[1-3]|α|β)|：|:/g, '')
         // Assumes that skill text doesn't contain a new line in it within the same grade, i.e. G1: some text \n some text \nG2: ...
        const splitString = string.split("\n")

        // tac skills and ults
        if (splitString[grade - 1]) return splitString[grade - 1]

        // alpha and beta shouldn't be affected by the regex above and thus only index 0 exists
        // can also be rewritten as if (ability_type > 0 && ability_type !== 100) or if (condition_skill_id_1 > 0)
        return splitString[0] 
    }

    $: interpolatedString = getText($userLocale)
</script>

<div class="row grid">
    <!-- {#if ability_type > 0 && ability_type !== 100}
        <hr style:margin="0" style:grid-column="-2" />
    {/if} -->
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
            width="24"
            height="24"
        />
        <span class="level-requirement">(Lv. {reqLevel})</span>
    </dt>
    <dd>{interpolatedString}</dd>
</div>

<style lang="scss">
    .row {
        grid-template-columns: 16ch 1fr;
        align-items: center;
        padding: 0.5rem 0;
    }

    dt {
        grid-template-columns: 3ch 24px auto !important;
        gap: 0.5rem;
        align-items: center;

        .grade {
            justify-self: end;
            font-size: var(--step-2);
        }

        .hidden {
            opacity: 0;
        }

        .level-requirement {
            color: var(--accent);
            font-weight: normal;
        }
    }

    dd {
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
