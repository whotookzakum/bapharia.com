<script>
    import ModelViewer from "../ModelViewer.svelte";
import Enemy from "./templates/Enemy.svelte";
    import Weapon from "./templates/Weapon.svelte";

    export let item = {};
</script>

<div>
    <!-- <p>{JSON.stringify(item.level_params[0])}</p>
        <p>{JSON.stringify(item.appearance[0])}</p>
        <p>{JSON.stringify(item.drop_items)}</p> -->
    <span class="component-label">Result</span>
    <article class="box">
        <header>
            <img
                src={`/images/axe1.png`}
                alt="Item Icon"
                width="64"
                height="64"
            />
            <h3>{item.name} <span>(Lv. 1)</span></h3>
            <span>Enemy</span>
            <span>ID: {item.enemy_id}</span>
            <img
                class="element-img"
                src="/images/elements/UI_IconAttribute_1.png"
                alt="Fire"
                width="32"
                height="32"
            />
        </header>
        <Enemy {item} />
        <!-- <Weapon {item} /> -->
        <ModelViewer/>
    </article>
</div>

<style lang="scss">
    header {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        column-gap: 1rem;
        padding-bottom: 1rem;
        line-height: 1.4;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        position: relative;

        img {
            grid-row: span 3;
        }

        h3 {
            margin: 0;
            font-size: var(--step-1);
        }

        span {
            color: var(--text2);
            font-size: var(--step--1);
        }

        .element-img {
            position: absolute;
            right: 0;
            top: 0;
            opacity: 0.5;
        }
    }
</style>
