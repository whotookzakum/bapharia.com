<script>
    import { assetUrl } from "$lib/utils";
    import RadioSlider from "$lib/components/RadioSlider.svelte";
    import { math, display } from "mathlifier";
    import ClassIcon from "$lib/components/ClassIcon.svelte";
    import CLASSES from "../../../routes/[[lang]]/classes/[classId]/classes.json";

    let viewMode = "brief";
</script>

<div class="surface1 grid gap-4 p-4 rounded-2xl">
    <RadioSlider
        bind:group={viewMode}
        groupName="stats-slider"
        name="statsSlider"
        data={[
            { label: "Overview", value: "brief" },
            { label: "Formulas", value: "formula" },
        ]}
        style="max-width: 200px"
    />

    {#if viewMode === "brief"}
        <table>
            <thead>
                <tr class="section-header">
                    <th>Stat</th>
                    <th colspan="2">Affected Parameters</th>
                </tr>
            </thead>
            <tbody>
                <tr class="section-header">
                    <th>Base Stats</th>
                    <th>
                        <div class="flex gap-1">
                            {#each CLASSES.filter((c) => c.type === "physical") as { id }}
                                <ClassIcon
                                    {id}
                                    style="background-color: var(--outline-color)"
                                />
                            {/each}
                        </div>
                    </th>
                    <th>
                        <div class="flex gap-1">
                            {#each CLASSES.filter((c) => c.type === "magic") as { id }}
                                <ClassIcon
                                    {id}
                                    style="background-color: var(--outline-color)"
                                />
                            {/each}
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>
                        <abbr title="Strength">STR</abbr>
                    </th>
                    <td>ATK, DEF, Crit Damage</td>
                    <td>DEF</td>
                </tr>
                <tr>
                    <th>
                        <abbr title="Vitality">VIT</abbr>
                    </th>
                    <td>HP, DEF</td>
                    <td>HP, DEF</td>
                </tr>
                <tr>
                    <th>
                        <abbr title="Dexterity">DEX</abbr>
                    </th>
                    <td>ATK, Crit Rate</td>
                    <td>Crit Rate</td>
                </tr>
                <tr>
                    <th>
                        <abbr title="Intelligence">INT</abbr>
                    </th>
                    <td>Recovery</td>
                    <td>ATK, Recovery, Crit Damage</td>
                </tr>
                <tr>
                    <th>
                        <abbr title="Mind">MND</abbr>
                    </th>
                    <td>Recovery, Crit Rate</td>
                    <td>ATK, Recovery, Crit Rate</td>
                </tr>
                <tr class="section-header">
                    <th colspan="3">Attack Stats</th>
                </tr>
                <tr>
                    <th>
                        <abbr title="Attack">ATK</abbr>
                    </th>
                    <td colspan="2">Influences damage output</td>
                </tr>
                <tr>
                    <th>Crit Rate</th>
                    <td colspan="2">Chance of a critical hit</td>
                </tr>
                <tr>
                    <th>Crit Damage</th>
                    <td colspan="2"
                        >Amount of damage increased during critical hits</td
                    >
                </tr>
                <tr class="section-header">
                    <th colspan="3">Defense Stats</th>
                </tr>
                <tr>
                    <th>
                        <abbr title="Defense">DEF</abbr>
                    </th>
                    <td colspan="2">Influences damage taken</td>
                </tr>
                <tr>
                    <th>Recovery</th>
                    <td colspan="2"
                        >Influences effectiveness of HP recovery effects</td
                    >
                </tr>
                <tr>
                    <th>Elemental Resistance</th>
                    <td colspan="2"
                        >Influences elemental damage and elemental charge
                        received</td
                    >
                </tr>
                <tr class="section-header">
                    <th colspan="3">Other</th>
                </tr>
                <tr>
                    <th>
                        <abbr title="Hit Points">HP</abbr>
                    </th>
                    <td colspan="2"
                        >Amount of damage you can take before dying</td
                    >
                </tr>
                <tr>
                    <th>
                        <abbr title="Stamina">ST</abbr>
                    </th>
                    <td colspan="2">Consumed when performing certain actions</td
                    >
                </tr>
            </tbody>
        </table>
        <p
            class="text-center font-semibold text2"
            style="font-size: var(--step-0); max-inline-size: unset;"
        >
            The in-game character page shows total stat values, which includes
            the gains from base stats.<br />Decimal values are truncated.
        </p>
    {/if}

    {#if viewMode === "formula"}
        <table class="formula-table">
            <tbody>
                <tr class="section-header">
                    <th></th>
                    <th>
                        <div class="flex gap-1">
                            <img
                                src={assetUrl(
                                    "/UI/Icon/Class/UI_IconClass_06.webp",
                                )}
                                alt="Blast Archer"
                                width="32"
                                height="32"
                            />
                            <img
                                src={assetUrl(
                                    "/UI/Icon/Class/UI_IconClass_07.webp",
                                )}
                                alt="Twin Striker"
                                width="32"
                                height="32"
                            />
                            <img
                                src={assetUrl(
                                    "/UI/Icon/Class/UI_IconClass_12.webp",
                                )}
                                alt="Aegis Fighter"
                                width="32"
                                height="32"
                            />
                            <img
                                src={assetUrl(
                                    "/UI/Icon/Class/UI_IconClass_19.webp",
                                )}
                                alt="Heavy Smasher"
                                width="32"
                                height="32"
                            />
                            <img
                                src={assetUrl(
                                    "/UI/Icon/Class/UI_IconClass_20.webp",
                                )}
                                alt="Blitz Lancer"
                                width="32"
                                height="32"
                            />
                        </div>
                    </th>
                    <th>
                        <div class="flex gap-1">
                            <img
                                src={assetUrl(
                                    "/UI/Icon/Class/UI_IconClass_11.webp",
                                )}
                                alt="Spell Caster"
                                width="32"
                                height="32"
                            />
                        </div>
                    </th>
                </tr>
                <tr>
                    <th>Total ATK</th>
                    <td
                        >{@html math(
                            "\\text{Base ATK} + (0.6 \\times \\text{STR}) + (0.4 \\times \\text{DEX})",
                        )}</td
                    >
                    <td
                        >{@html math(
                            "\\text{Base ATK} + (0.6 \\times \\text{INT}) + (0.4 \\times \\text{MND})",
                        )}</td
                    >
                </tr>
                <tr>
                    <th>Total Crit Rate</th>
                    <td colspan="2"
                        >{@html math(
                            "\\text{Base Crit Rate} + [0.2 \\times (\\text{DEX} + \\text{MND})]^{0.3}",
                        )}</td
                    >
                </tr>
                <tr>
                    <th>Total Crit Damage</th>
                    <td
                        >{@html math(
                            "\\text{Base Crit Damage} + (0.04 \\times \\text{STR})",
                        )}</td
                    >
                    <td
                        >{@html math(
                            "\\text{Base Crit Damage} + (0.04 \\times \\text{INT})",
                        )}</td
                    >
                </tr>
                <tr>
                    <th>Total DEF</th>
                    <td colspan="2"
                        >{@html math(
                            "\\text{Base DEF} + (0.4 \\times \\text{STR}) + (0.6 \\times \\text{VIT})",
                        )}</td
                    >
                </tr>
                <tr>
                    <th>Total Recovery</th>
                    <td colspan="2"
                        >{@html math(
                            "\\text{Base Recovery} + [0.4 \\times (\\text{INT} + \\text{MND})]",
                        )}</td
                    >
                </tr>
                <tr>
                    <th>Total HP</th>
                    <td colspan="2"
                        >{@html math(
                            "\\text{Base HP} + (0.6 \\times \\text{VIT})",
                        )}</td
                    >
                </tr>
            </tbody>
        </table>
    {/if}
</div>

<style lang="scss">
    table {
        font-size: var(--step-1);
    }

    .formula-table {
        .flex {
            justify-content: center;
        }

        td {
            text-align: center;
        }
    }

    .section-header {
        font-size: var(--step-2);

        &:not(:first-of-type) th {
            padding-top: 1rem;
        }
    }

    tr:not(.section-header) th {
        color: var(--accent1);
    }

    abbr {
        text-decoration: none;

        &::after {
            content: " (" attr(title) ")";
            margin-left: 0.2ch;
            color: var(--text2);
            font-size: var(--step--1);
            font-weight: normal;
            font-style: normal;
        }
    }
</style>
