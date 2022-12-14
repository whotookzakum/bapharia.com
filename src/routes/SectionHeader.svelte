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
		font-size: 1rem;
		font-family: inherit;
		text-transform: uppercase;
		white-space: nowrap;
		margin-bottom: 1rem;
		max-width: 100%;

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