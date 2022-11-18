<script>
    export let text;
</script>

<h2 class="section-header">{text}</h2>

<style lang="scss">
    .section-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		color: var(--text2);
		font-size: var(--step-0);
		text-transform: uppercase;
		font-family: inherit;
		margin-bottom: 1rem;
		white-space: nowrap;

		&::before,
		&::after {
			content: '';
			opacity: 0.5;
			height: 1px;
			width: 100%;
		}

		&::before {
			background: linear-gradient(to right, transparent, var(--text2));
		}

		&::after {
			background: linear-gradient(to right, var(--text2), transparent);
		}
	}
</style>