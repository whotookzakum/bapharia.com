<script>
    const elements = [
        {
            name: "Fire",
            desc: "Damage over time",
            burst: "Small explosion & knockdown",
            finish: "Large explosion that deals heavy damage",
            images: [
                "/UI/Icon/PlayerSkill/Attribute/UI_PlayerSkillAttribute_1.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1000.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1001.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1002.png",
            ],
        },
        {
            name: "Ice",
            desc: "Reduced movement speed",
            burst: "Freezes target",
            finish: "Shatters ice, dealing heavy damage",
            images: [
                "/UI/Icon/PlayerSkill/Attribute/UI_PlayerSkillAttribute_3.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1003.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1004.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1005.png",
            ],
        },
        {
            name: "Thunder",
            desc: "Periodically disrupt actions",
            burst: "Small explosion & knockdown",
            finish: "Large explosion that deals heavy damage and Paralyzes target",
            images: [
                "/UI/Icon/PlayerSkill/Attribute/UI_PlayerSkillAttribute_2.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1006.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1007.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1008.png",
            ],
        },
        {
            name: "Earth",
            desc: "Receive increased damage",
            burst: "Petrifies target",
            finish: "Destroys rock, dealing heavy damage",
            images: [
                "/UI/Icon/PlayerSkill/Attribute/UI_PlayerSkillAttribute_4.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1009.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1010.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1011.png",
            ],
        },
        {
            name: "Light",
            desc: "Deal reduced damage",
            burst: "Small explosion & knockdown",
            finish: "Large explosion that deals heavy damage and grants HP Regen to nearby players",
            images: [
                "/UI/Icon/PlayerSkill/Attribute/UI_PlayerSkillAttribute_5.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1012.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1013.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1014.png",
            ],
        },
        {
            name: "Dark",
            desc: "Attacks may miss",
            burst: "Knockdown",
            finish: "Large explosion that deals heavy damage and inflicts Drained",
            images: [
                "/UI/Icon/PlayerSkill/Attribute/UI_PlayerSkillAttribute_6.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1015.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1016.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1017.png",
            ],
        },
    ];
</script>

<div class="grid elements-grid full-bleed">
    {#each elements as element}
        <div class={`element box grid ${element.name}`}>
            <div class="flex g-50" style="align-items: center">
                <img src={element.images[0]} alt="" />
                <h3>{element.name}</h3>
            </div>
            
                <div class="row">
                    <div class="grid">
                        <span class="component-label">Level 1 & 2</span>
                        <span class="description">{element.desc}</span>
                    </div>
                    <div class="flex g-25">
                        <img
                            src={element.images[1]}
                            alt=""
                            width="65"
                            height="75"
                        />
                        <img
                            src={element.images[2]}
                            alt=""
                            width="65"
                            height="75"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="grid">
                        <span class="component-label"
                            >Level 3 (Elemental Burst)</span
                        >
                        <span class="description">{element.burst}</span>
                    </div>
                    <img
                        src={element.images[3]}
                        alt=""
                        width="65"
                        height="75"
                    />
                </div>
                <div class="grid">
                    <span class="component-label burst-finish"
                        >Burst Finish</span
                    >
                    <span class="description">{element.finish}</span>
                </div>
            </div>
    {/each}
</div>

<style lang="scss">
    h3 {
        margin: 0;
    }

    .elements-grid {
        
        grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
        gap: 1rem;
        width: min(100%, 1200px) !important;
        padding: 1rem;
    }

    .element {
        align-items: flex-start;
        gap: 1rem;
        background: linear-gradient(
            hsl(var(--h), 80%, 10%),
            hsl(var(--h), 80%, 6%)
        );
        border-color: hsl(var(--h), 80%, 22%);
        color: hsl(0, 0%, 82%);
    }

    .row {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        img {
            width: 36px;
            height: auto;
            aspect-ratio: 65/75;
        }
    }

    .component-label {
        color: hsl(var(--h), 50%, 62%);
        text-transform: unset;
        margin: 0;
    }

    .description {
        // font-weight: 600;
        font-size: 18px;
        margin: 0;
    }

    .burst-finish {
        color: #afb1ff;
        font-weight: 600;
    }

    .Fire {
        --h: 14;
    }

    .Ice {
        --h: 194;
    }

    .Thunder {
        --h: 180;
    }

    .Earth {
        --h: 30;
    }

    .Light {
        --h: 60;
    }

    .Dark {
        --h: 260;
    }
</style>
