<script>
    import { userLocale } from "$lib/stores";
    export let data = {};
    console.log(data);
    export let imgWidth = 256;
    export let imgHeight = 256;

    $: imgSrc = data.thumb
        ?.replace("Item", "ItemL")
        .replace("Weapon", "WeaponL");

    const CLASS_NAMES = {
        "6": {
            ja_JP: "ブラストアーチャー",
            en_US: "Blast Archer",
        },
        "7": {
            ja_JP: "ツインストライカー",
            en_US: "Twin Striker",
        },
        "11": {
            ja_JP: "スペルキャスター",
            en_US: "Spell Caster",
        },
        "12": {
            ja_JP: "イージスファイター",
            en_US: "Aegis Fighter",
        },
        "19": {
            ja_JP: "ヘビースマッシャー",
            en_US: "Heavy Smasher",
        },
        "20": {
            ja_JP: "ブリッツランサー",
            en_US: "Blitz Lancer",
        },
    };

    const ELEMENT_NAMES = {
        "3": {
            ja_JP: "火属性",
            en_US: "Fire",
        },
        "5": {
            ja_JP: "雷属性",
            en_US: "Thunder",
        },
        "4": {
            ja_JP: "氷属性",
            en_US: "Ice",
        },
        "2": {
            ja_JP: "土属性",
            en_US: "Earth",
        },
        "6": {
            ja_JP: "光属性",
            en_US: "Light",
        },
        "7": {
            ja_JP: "闇属性",
            en_US: "Dark",
        },
        "0": {
            ja_JP: "なし",
            en_US: "None",
        },
    };
</script>

<div class="box flex g-50">
    <img
        src={imgSrc}
        alt=""
        width={imgWidth}
        height={imgHeight}
        loading="lazy"
    />
    <div class="text-col grid g-25">
        {#if data.effectDesc && data.effectDesc.ja_JP !== "-"}
            <p>{data.effectDesc[$userLocale]}</p>
            <hr />
        {/if}
        {#if data.price_player_buys && data.price_player_buys !== 99999 && data.price_player_buys !== 1 && data.price_player_buys !== 999999999}
            <p>
                Buy for {data.price_player_buys}
                <img
                    src="/UI/Common/UI_CmnMoney1.png"
                    alt="Luno"
                    width="24"
                    height="24"
                    style="margin: -7px -4px; width: unset;"
                />
            </p>
        {/if}
        {#if !data.no_sale_flag && data.price_player_sells}
            <p>
                Sells for {data.price_player_sells}
                <img
                    src="/UI/Common/UI_CmnMoney1.png"
                    alt="Luno"
                    width="24"
                    height="24"
                    style="margin: -7px -4px; width: unset;"
                />
            </p>
            <hr />
        {/if}
        <blockquote>{data.desc[$userLocale]}</blockquote>
    </div>
</div>

<style lang="scss">
    .box {
        flex-wrap: wrap;
        align-items: start;
        justify-content: center;
    }

    .text-col {
        flex: 1;
        flex-basis: 30ch;
    }

    p {
        margin: 0;
    }

    blockquote {
        line-height: 1.75;
        color: var(--text2);
        font-size: var(--step-1);
        font-style: italic;
        margin: 0;
    }
</style>
