<script>
	export let type;
</script>

<aside class={type}>
	<slot />
</aside>

<style lang="scss">
	aside {
		--color-bg: rgb(34, 51, 99);
		--color-border: rgb(24, 127, 187);
		color: var(--text1);
		background: var(--color-bg);
		padding: var(--space-xs);
		margin: var(--space-xs) 0;
		border-left: 4px solid var(--color-border);
		box-shadow: 0 2px 8px rgb(12, 12, 12);
		line-height: 1.5;

		&::before {
			font-size: var(--step--1);
			display: block;
			margin-bottom: var(--space-3xs);
			text-transform: uppercase;
			color: var(--text2);
		}
	}

	aside.note {
		&::before {
			content: 'Note';
		}
	}

	aside.tip {
		--color-bg: rgb(70, 34, 99);
		--color-border: rgb(135, 24, 187);
		&::before {
			content: 'Tip';
		}
	}
    
	aside.caution {
		--color-bg: rgb(99, 78, 34);
		--color-border: rgb(187, 149, 24);
		
		&::before {
			content: 'Caution';
			color: hsl(240, 5%, 78%);
		}
	}

	aside.warning {
		--color-bg: rgb(99, 34, 34);
		--color-border: rgb(187, 24, 24);
		&::before {
			content: 'Warning';
		}
	}
</style>
