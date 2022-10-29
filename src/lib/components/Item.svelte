<script>
	import { currentImagineId } from '../stores'
	export let data

	function handleClick() {
		currentImagineId.set(data.id)
	}
</script>

<li class="item" on:click={handleClick}>
	<div class="item-data">
		<div class="item-thumbnail-wrapper">
			<!-- <img class="item-thumbnail" src={`/images/${data.imgSrc}`} alt="Item Icon" /> -->
		</div>
		<div class="item-info">
			<div class="item-info-main">
				<span class="item-name">{data.name}</span>
				<span class="item-type">{data.type}</span>
			</div>
			<div class="item-info-sub">
				<span class="owned-amount">
					{#if data.type === 'weapon'}
						Owned: <b>0</b>
					{/if}
				</span>
				<span class="unobtained-tag">Uncrafted</span>
			</div>
		</div>
	</div>
	<div class="req-ar">
		<span class="req-ar-text">Req. AR</span>
		<span class="req-ar-number">{data.reqAR}</span>
	</div>
</li>

<style lang="scss">
	$black: #000;
	$gray: #242424;
	$lightgray: #d0d0d0;
	$midgray: #333;
	$yellow: #ffce04;
	$highlight-hover: #fff;
	$highlight-active: #e7f837;

	.item {
		display: flex;
		gap: var(--space-2xs);
		color: var(--text1);

		&:hover {
			.item-data,
			.req-ar {
				box-shadow: 0 0 0 2px $highlight-hover;
			}
		}

		&:active {
			.item-data,
			.req-ar {
				box-shadow: 0 0 0 2px $highlight-active;
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
