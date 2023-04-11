<script>
	
</script>

<menu class="options">
	<li>
        <a href="/crafting/imagine">
            <!-- <IconImagine width={180} height={180} /> -->
            Imagine
        </a>
    </li>
	<li>
        <a href="/crafting/weapons">
            <!-- <IconCrafting width={180} height={180} /> -->
            Weapon
        </a>
    </li>
</menu>

<style lang="scss">
	.options {
		padding: 0;
		margin: 0;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--space-m);
		padding: var(--space-m);
		margin: 0 auto;
		max-width: 1440px;
		height: 100%;

        li {
            background: var(--surface3);
            transition: var(--transition-bg), var(--transition-shadow);
            box-shadow: 0 0 4px var(--surface-shadow);
        }

		a {
            height: 100%;
            display: block;
            border: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.6rem;
            font-size: var(--step-3);
            color: var(--text2);

            &:hover {
                color: var(--accent);
                background: var(--surface2);
            }
		}
	}
</style>
