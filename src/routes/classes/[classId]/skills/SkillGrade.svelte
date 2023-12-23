<script>
    import { userLocale } from "$lib/stores";

    export let skillLevel;
    export let abilityType;

    const { level, condition_class_level, desc, buffs } = skillLevel;

    function getAltText() {
        switch (abilityType) {
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

    $: descString = desc[$userLocale].replace(/(G[1-9]|α|β)|：|:/g, "");
</script>

<div class="row grid">
    {#if abilityType > 0 && abilityType !== 100}
        <hr style:margin="0" style:grid-column="-2" />
    {/if}
    <dt class="grid">
        <span
            class="grade skip-std"
            class:hidden={abilityType > 0 && abilityType !== 100}
        >
            G{level}
        </span>
        <img
            src="/UI/SkillTree/UI_SkiList_IconType0{abilityType !== 100
                ? abilityType
                : 0}.png"
            alt={getAltText()}
            width="24"
            height="24"
        />
        <span class="level-requirement">(Lv. {condition_class_level})</span>
    </dt>
    <dd>
        <!-- <br> -->
        {descString}
        {#if buffs?.length > 0}
            <div class="flex g-25">
                {#each buffs as buff}
                    <img
                        src="/UI/Icon/StatusAilment/UI_StatusAilment_{buff.id}.png"
                        alt=""
                    />
                {/each}
            </div>
        {/if}
    </dd>
</div>

<style lang="scss">
    .row {
        grid-template-columns: 16ch 1fr 4ch;
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
    }

    .level-requirement {
        color: var(--accent);
        font-weight: normal;
    }

    dd {
        margin: 0;
        max-inline-size: none;
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
