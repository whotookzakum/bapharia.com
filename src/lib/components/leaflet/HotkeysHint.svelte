<div class="box">
    <span>Hotkeys</span>
    <dl>
        <dt>Move</dt>
        <dd>
            <kbd>🡄</kbd>
            <kbd>🡅</kbd>
            <kbd>🡆</kbd>
            <kbd>🡇</kbd>
            <div
                class="flex g-25"
                style:margin-top="0.5rem"
                style:font-size="var(--step--1)"
            >
                (Hold <span class="combo-input"><kbd>Shift</kbd></span> to go faster)
            </div>
        </dd>
        <dt>Zoom in/out</dt>
        <dd style="font-weight: 900;">
            <kbd>+</kbd>
            <kbd>−</kbd>
        </dd>
        <dt>Search</dt>
        <dd class="combo-input flex g-25">
            <kbd>Ctrl</kbd> +
            <kbd>K</kbd>
        </dd>
        <dt>Toggle Map List</dt>
        <dd class="combo-input flex g-25">
            <kbd>Ctrl</kbd> +
            <kbd>;</kbd>
        </dd>
        <dt>Toggle Marker List</dt>
        <dd class="combo-input flex g-25">
            <kbd>Ctrl</kbd> +
            <kbd>'</kbd>
        </dd>
        <dt>Toggle Hotkeys Hint</dt>
        <dd class="combo-input flex g-25">
            <kbd>Ctrl</kbd> +
            <kbd>/</kbd>
        </dd>
    </dl>
</div>

<style lang="scss">
    dl {
        max-inline-size: unset;
        grid-template-columns: 1fr 1fr;
        align-items: baseline;
    }

    dd {
        margin: 0;
    }

    .combo-input kbd {
        font-size: var(--step--2);
        font-weight: 700;
    }

    kbd {
        padding: 0.5rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        min-width: 32px;
        background: var(--surface2);
        border-radius: 3px;
        border: 1px solid var(--surface3);
        box-shadow: 0 1px 1px rgba(18, 18, 18, 0.26);
        user-select: none;
        font: inherit;
    }

    .flex {
        align-items: center;
    }
</style>
