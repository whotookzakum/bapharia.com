<script>
    import classes from "./classes.json";
</script>

<ul class="classes-list grid unstyled-list" role="list">
    {#each classes as job}
        <li class="grid box hover">
            <img src={job.image} alt="" width="96" height="96" />
            <a href={job.href} class="styled-link">{job.name}</a>
            <span>{job.weapon}</span>
        </li>
    {/each}
</ul>

<style lang="scss">
    .classes-list {
        grid-template-columns: repeat(
            auto-fit,
            minmax(min(calc(var(--space-2xl-3xl) + 1rem), 100%), 1fr)
        );
        // grid-template-columns: repeat(4, 1fr);
        align-content: start;
        grid-column: 2;
        // max-width: 600px;
    }

    @media (max-width: 1200px) {
        .classes-list {
            grid-column: 1;
        }
    }

    @media (max-width: 600px) {
        li span {
            display: none;
        }
    }

    li {
        justify-items: center;
        position: relative;
        z-index: 1;
        line-height: 1.4;
        text-align: center;
        flex: 1 1 130px;

        *:not(a) {
            pointer-events: none;
        }

        img {
            margin: 0 auto 0.5rem auto;
            transition: all 0.2s ease;
        }

        span {
            color: var(--text2);
            font-size: var(--step--1);
        }

        &:hover img {
            transform: scale(1.07);
        }
    }

    a {
        color: var(--link);
        font-size: var(--step-1);
        font-weight: 600;
    }

    a:focus-visible {
        outline: none !important;
    }

    a::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
    }

    li:has(:focus-visible) {
        background: var(--surface2);
    }

    @supports not selector(:has(*)) {
        li:focus-within {
            outline: 2px solid var(--accent);
            background: var(--surface2);
        }
    }
</style>
