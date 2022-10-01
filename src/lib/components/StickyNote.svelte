<script>
	export let type;
</script>

<aside class={type}>
	<slot />
</aside>

<style lang="scss">
	aside {
		--color-bg: rgb(31, 31, 31);
		--color-border: rgb(61, 61, 61);
		color: #f5f0f0;
		background: var(--color-bg);
		padding: var(--space-xs);
		margin: var(--space-xs) 0;
		border-left: 4px solid var(--color-border);
		box-shadow: 0 2px 8px rgb(12, 12, 12);

		&::before {
			font-size: var(--step--1);
			font-weight: bold;
			display: block;
			margin-bottom: var(--space-2xs);
			text-transform: uppercase;
			opacity: 0.8;
		}
	}
    
	aside.warning {
		--color-bg: rgb(99, 34, 34);
		--color-border: rgb(187, 24, 24);
		&::before {
			content: 'Warning';
		}
	}

	aside.note {
		--color-bg: rgb(34, 51, 99);
		--color-border: rgb(24, 127, 187);

		&::before {
			content: 'Note';
		}
	}

	aside.hint {
		--color-bg: rgb(34, 99, 37);
		--color-border: rgb(29, 187, 24);
		&::before {
			content: 'Hint';
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
		}
	}

	aside.other {
		--color-bg: rgb(153, 31, 76);
		--color-border: rgb(249, 53, 124);
		&::before {
			content: 'Other';
		}
	}
</style>
