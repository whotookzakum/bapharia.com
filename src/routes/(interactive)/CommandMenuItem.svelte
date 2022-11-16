<script>
    import { page } from '$app/stores'
    export let item
    
</script>

<li class:active={$page.url.pathname === item.url} class="command-menu-item">
    <div class="img-wrapper">
        <img
            src={`/images/CommandMenu/CommandMenuIcon1/${item.imgSrc}`}
            alt={item.title}
        />
    </div>
    <div class="title-wrapper">
        <span class="item-title">{item.title}</span>
    </div>
</li>

<style lang="scss">
	li.command-menu-item {
		--color: rgba(255, 255, 255, 0.8);
		display: flex;
		align-items: center;
		background: linear-gradient(90deg, rgba(0, 0, 0, 0.733), transparent);
		padding: 0 var(--space-m);

		&:nth-child(2n + 1) {
			--color: rgba(187, 255, 0, 0.8);
		}

		// Left glow
		&::before {
			content: '';
			width: 0px;
			aspect-ratio: 1/1;
			position: absolute;
			left: 0px;
			transform: translateX(-40px);
			box-shadow: 0px 0px 16px 8px rgb(91, 214, 255), 0px 0px 24px 12px rgb(113, 239, 248);
			transition: transform 0.8s ease;
		}
	}

	div.title-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;

		// Underline
		&::after {
			content: '';
			height: 1px;
			width: 100%;
			display: block;
			border-radius: 50%;
			filter: drop-shadow(0 0 1px var(--color, rgba(255, 255, 255, 0.8)));
			background: linear-gradient(
				90deg,
				transparent,
				var(--color, rgba(255, 255, 255, 0.8)),
				transparent
			);
			transition: filter 0.2s ease;
		}
	}

	.img-wrapper {
		position: relative;
	}

	.item-title {
		transition: all 0.1s ease;
	}

	.command-menu-item:hover:not(.active) {
		--color: rgba(255, 255, 255, 0.8);

		&::before {
			transform: translateX(-4px);
			transition: transform 0.1s ease;
		}
	}

	.command-menu-item:hover,
	.command-menu-item.active {
		.img-wrapper img {
			transform: scale(1.1);
		}

		.item-title {
			transform: translateX(20px);
		}
	}

	li.command-menu-item.active {
		background: linear-gradient(90deg, transparent, transparent);
		font-weight: bold;
		font-size: var(--step-1);
		--color: lightblue;

		.title-wrapper::after {
			filter: drop-shadow(14px -4px 9px deepskyblue)
				drop-shadow(13px 0px 1px var(--color, lightblue));
		}

		.img-wrapper::after {
			content: '';
			width: 0px;
			aspect-ratio: 1/1;
			position: absolute;
			left: 0;
			box-shadow: 14px 22px 12px 3px rgba(255, 255, 255, 0.8), 14px 22px 26px 8px deepskyblue,
				14px 22px 34px 14px lightblue;
		}
	}
</style>