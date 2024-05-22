<script>
    import Icon from "@iconify/svelte";

    export let animationCancels = {};
</script>

<dl class="grid unstyled-list" role="list">
    {#each animationCancels as cancel}
        <div>
            <dt>{cancel.timing}</dt>
            {#each cancel.inputs as input}
                <dd>
                    {#if input.recommended}
                        <span class="visually-hidden">Recommended:</span>
                    {/if}
                    {input.action}
                    {#if input.recommended}
                        <i class="rec-cancel">
                            <Icon icon="ph:sparkle-fill" style="margin-bottom: -2px" />
                            {#if input.context}
                                <span>{input.context}</span>
                            {/if}
                        </i>
                    {/if}
                </dd>
            {/each}
        </div>
    {/each}
</dl>


<style lang="scss">
    dl {
        margin-block: 0.5rem 1rem;
    }

    dt {
        font-weight: 700;
    }

    dd {
        margin: 0;
    }

    .rec-cancel {
        vertical-align: middle;
        font-style: normal;
        font-weight: 600;
        color: goldenrod;
        margin: 0 0.25rem;
        vertical-align: baseline;

        span {
            font-size: var(--step--1);
            margin-left: 2px;
        }
    }
</style>
