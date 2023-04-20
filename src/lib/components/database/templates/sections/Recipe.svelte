<script>
    import { userLocale } from "$lib/stores";
    import LunoIcon from "./LunoIcon.svelte";
    export let recipe;

    let sources = recipe.materials.map(mat => false);
    const toggleSource = (index) => {
        sources[index] = !sources[index];
    };
</script>

<h4>Recipe</h4>
<table>
    <thead>
        <tr>
            <th>素材</th>
            <th>必要数</th>
        </tr>
    </thead>
    <tbody>
        {#each recipe.materials as material, index}
            <tr>
                <td>
                    <a href={`?result=${material.id}`}>
                        {material.name[$userLocale]}
                    </a>
                    <button
                        class="hint-toggle"
                        on:click={() => toggleSource(index)}
                    >
                        <img
                            src="/UI/Common/UI_CmnIconInfo.png"
                            alt="Hint"
                            width="28"
                            height="28"
                            style="margin: -9px 0"
                        />
                    </button>
                    <div class="hint" class:show={sources[index]}>
                        {material.sourceDesc[$userLocale]}
                    </div>
                </td>
                <td>{material.amount || material.need_num}</td>
            </tr>
        {/each}
        <tr>
            <td colspan="1">Luno</td>
            <td>{recipe.price || recipe.use_money} <LunoIcon /></td>
        </tr>
    </tbody>
</table>

<style lang="scss">
    .hint-toggle {
        padding: 0;
        border: none;
        background: none;

        &:hover {
            filter: brightness(0.8);
        }
    }

    .hint {
        display: none;
        color: var(--text2);
        font-size: var(--step--1);

        &.show {
            display: block;
        }
    }
</style>
