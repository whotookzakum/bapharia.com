<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    
    function goToRoute(e) {
        e.preventDefault()
        console.log(e.target.href)
        goto(e.target.href, {
            noScroll: true,
            replaceState: true,
            keepFocus: true,
        });
    }
</script>

<nav class="subpages-nav flex rounded">
    <a
        class="styled-link overview"
        href={`/classes/${$page.params.classId}`}
        class:active={$page.url.pathname === `/classes/${$page.params.classId}`}
        on:click={e => goToRoute(e)}>Overview</a
    >
    <a
        class="styled-link skills"
        href={`/classes/${$page.params.classId}/skills`}
        class:active={$page.url.pathname === `/classes/${$page.params.classId}/skills`}
        on:click={e => goToRoute(e)}
        >Skills</a
    >
    <a
        class="styled-link meta"
        href={`/classes/${$page.params.classId}/meta`}
        class:active={$page.url.pathname === `/classes/${$page.params.classId}/meta`}
        on:click={e => goToRoute(e)}>Meta</a
    >
    <div class="slider rounded" />
</nav>

<style lang="scss">
    .subpages-nav {
        font-size: clamp(var(--step--1), 3vw, var(--step-1));
        // font-size: var(--step-1);
        // padding-top: 1rem;
        margin-top: 1rem;
        position: sticky;
        top: calc(var(--nav-height) + 1rem);
        justify-content: space-between;
        gap: 0;
        background: var(--surface2);
        overflow: hidden;
        z-index: 10;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

        a {
            padding: 1rem;
            flex: 1;
            text-align: center;
            position: relative;
            z-index: 1;
        }

        // a::before {
        //     content: "";
        //     position: absolute;
        //     inset: 0;
        //     z-index: -1;
        // }

        // a:hover::before {
        //     background: var(--surface2);
        // }
    }

    .slider {
        background: var(--surface3);
        width: 33.3333%;
        height: 100%;
        position: absolute;
        // inset: 0 auto auto 0;
        top: 0;
        left: 0;

        // transform: translateX(133%);

        transition: all 0.3s ease;
    }

    .active {
        background: none;
    }

    .overview.active ~ .slider {
        left: 0;
    }

    .skills.active ~ .slider {
        // left: 33.6%;
        transform: translateX(100%);
    }

    .meta.active ~ .slider {
        // left: 67%;
        transform: translateX(200%);
    }
</style>
