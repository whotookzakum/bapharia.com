<script>
	export let name;
	export let type;
	export let itemType;
	export let reqAR;
	export let imgSrc;
</script>

<li class="item">
	<div class="item-data">
		<div class="item-thumbnail-wrapper">
			<img class="item-thumbnail" src={`/images/${imgSrc}`} alt="Item Thumbnail" />
		</div>
		<div class="item-info">
			<div class="item-info-main">
				<span class="item-name">{name}</span>
				<span class="item-type">
					{type}
					{#if itemType === 'weapon'}
						(Weapon)
					{/if}
				</span>
			</div>
			<div class="item-info-sub">
				<span class="owned-amount">
					{#if itemType === 'weapon'}
						Owned: <b>0</b>
					{/if}
				</span>
				<span class="unobtained-tag">Uncrafted</span>
			</div>
		</div>
	</div>
	<div class="req-ar">
		<span class="req-ar-text">Req. AR</span>
		<span class="req-ar-number">{reqAR}</span>
	</div>
</li>

<style lang="scss">
	$black: #000;
	$gray: #242424;
	$midgray: #333;
	$yellow: #ffce04;
	$lightgray: #d0d0d0;

	.item {
		display: flex;
		gap: var(--space-2xs);
        cursor: pointer;

		&:hover {
			.item-data,
			.req-ar {
				box-shadow: 0 0 0 2px white;
			}
		}

		&:active {
			.item-data,
			.req-ar {
				box-shadow: 0 0 0 2px #e7f837;
			}
		}
	}

	.item-data {
		border-radius: 4px;
		overflow: hidden;
		display: flex;
		
		flex: 1;

		.item-thumbnail-wrapper {
			background: $black;
			padding: var(--space-3xs);
		}

		.item-info {
			display: flex;
			flex-direction: column;
			width: 100%;

			&-main {
				background: $gray;
				padding: var(--space-3xs);
			}

			&-sub {
				color: $midgray;
                background: $lightgray;
				font-size: var(--step--2);
				font-weight: 600;
				padding: var(--space-3xs);
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		.item-name {
			display: block;
			font-weight: 600;
		}

		.item-type {
			font-size: var(--step--1);
		}

		b {
			font-weight: 700;
		}

		.unobtained-tag {
			background: $yellow;
			text-align: center;
			padding-top: 1px;
			border-radius: 3px;
			width: 13ch;
		}
	}

	.req-ar {
		border-radius: 4px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 8ch;
		flex: 1;

		.req-ar-text {
			background: $black;
			padding: var(--space-3xs);
			width: 100%;
			text-align: center;
			font-size: var(--step--1);
		}

		.req-ar-number {
			margin: auto;
			font-size: var(--step-2);
			font-weight: 700;
			color: $midgray;
            background: $lightgray;
            width: 100%;
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
		}
	}
</style>
