<script>
    import Icon from "@iconify/svelte";
    export let group;
    export let data = [];
    export let inputCallback;
</script>

<div class="modal box grid gap-2 mini-header">
    {#each data as item}
        <label>
            <input
                type="radio"
                class="visually-hidden"
                value={item.value}
                bind:group
                on:input={(e) => inputCallback(e)}
            />
            <span>
                {item.title}
                {#if item.icon}
                    <Icon icon={item.icon} width="20" />
                {/if}
            </span>
        </label>
    {/each}
</div>

<style lang="scss">
    .modal {
        position: absolute;
        right: 0;
        top: calc(0.5rem + 44px);
        border-radius: 0.5rem;
        text-transform: unset;
    }

    label {
        user-select: none;
        min-height: 20px;
    }

    span {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        flex-direction: row-reverse;
        justify-content: start;
    }

    input:focus-visible + span,
    span:hover {
        color: var(--text2);
    }

    input:checked + span {
        color: var(--accent1);
    }
</style>
