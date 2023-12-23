<script>
    import { userLocale } from "$lib/stores";

    export let tag;
    export let splitHybrids;
    export let styleless;

    const TAG_TEXT = {
        Fire: {
            ja_JP: "火属性",
            en_US: "Fire",
        },
        Thunder: {
            ja_JP: "雷属性",
            en_US: "Thunder",
        },
        Ice: {
            ja_JP: "氷属性",
            en_US: "Ice",
        },
        Earth: {
            ja_JP: "土属性",
            en_US: "Earth",
        },
        Light: {
            ja_JP: "光属性",
            en_US: "Light",
        },
        Dark: {
            ja_JP: "闇属性",
            en_US: "Dark",
        },
        None: {
            ja_JP: "無属性",
            en_US: "No Element",
        },
        Attack: {
            ja_JP: "攻撃",
            en_US: "Attack",
        },
        AttackBuf: {
            ja_JP: "攻撃・バフ",
            en_US: "Attack / Buff",
        },
        AttackDebuf: {
            ja_JP: "攻撃・デバフ",
            en_US: "Attack / Debuff",
        },
        AttackHeal: {
            ja_JP: "攻撃・回復",
            en_US: "Attack / Recovery",
        },
        Buf: {
            ja_JP: "バフ",
            en_US: "Buff",
        },
        BufDebuf: {
            ja_JP: "バフ・デバフ",
            en_US: "Buff / Debuff",
        },
        Debuf: {
            ja_JP: "デバフ",
            en_US: "Debuff",
        },
        Heal: {
            ja_JP: "回復",
            en_US: "Recovery",
        },
        HealBuf: {
            ja_JP: "回復・バフ",
            en_US: "Recovery / Buff",
        },
        HealDebuf: {
            ja_JP: "回復・デバフ",
            en_US: "Recovery / Debuff",
        },
    };

    const HYBRID_MAP = {
        AttackBuf: ["Attack", "Buf"],
        AttackDebuf: ["Attack", "Debuf"],
        AttackHeal: ["Attack", "Heal"],
        BufDebuf: ["Buf", "Debuf"],
        HealBuf: ["Heal", "Buf"],
        HealDebuf: ["Heal", "Debuf"],
    };
</script>

{#if tag !== "None"}
    {#if splitHybrids && HYBRID_MAP[tag]}
        {#each HYBRID_MAP[tag] as thisTag}
            <div class="tag {thisTag} box">
                {TAG_TEXT[thisTag][$userLocale]}
            </div>
        {/each}
    {:else if styleless}
        {TAG_TEXT[tag][$userLocale]}
    {:else}
        <div class="tag {tag} box">
            {TAG_TEXT[tag][$userLocale]}
        </div>
    {/if}
{/if}

<style lang="scss">
    .tag {
        color: whitesmoke;
        padding: 0.1rem 0.5rem;
        font-weight: 500;
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
        border-radius: 0.35rem;
        font-size: var(--step--1);
        background: linear-gradient(
            hsl(var(--h), 80%, 40%),
            hsl(var(--h), 80%, 10%)
        );
    }

    .Fire {
        --h: 0;
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

    .Heal {
        background: #00618c;
    }

    .Attack {
        background: #c60000;
    }

    .Buf {
        background: #9c00a5;
    }

    .Debuf {
        background: #00876d;
    }
</style>
