<script>
    import classes from "./classes.json";
</script>
<!--  PUT IN NAV -->
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
            auto-fill,
            minmax(180px, 1fr)
        );
        margin: 2rem auto;
        align-content: start;
        flex: 1;
        flex-basis: 40rem; // 40~45rem

        img {
            width: 100%;
            height: auto;
            margin-bottom: 0.5rem;
            transition: all 0.2s ease;
        }

        span {
            color: var(--text2);
        }
    }
    li {
        position: relative;
        z-index: 1;
        // text-align: center;
        line-height: 1.6;
        align-content: start;

        *:not(a) {
            pointer-events: none;
        }

        &:hover img {
            transform: scale(1.07);
        }
    }

    a {
        color: var(--link);
        font-size: var(--step-2);
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

    @media (max-width: 424px) {
        .classes-list {
            grid-template-columns: 1fr 1fr;

            li {
                line-height: 1.4;
            }

            a {
                font-size: var(--step-0);
            }

            span {
                font-size: var(--step--1);
            }
        }
    }
</style>
