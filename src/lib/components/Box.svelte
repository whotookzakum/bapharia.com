<script>
	export let title;
	export let item;
	export let href;
	export let linkText;
	export let id;
</script>

<div class="box" id={item.version} >
	{#if title}
		<h4>{title}</h4>
	{/if}
	<ul>
		<li>
			{#if item.version}
				<a href={`${href}#${item.version}`}>
					<code>{item.version}</code>
				</a>
			{:else}
				<a href={item.link}>
					<code>{item.date}</code>
				</a>
			{/if}
			<p>{item.description}</p>
		</li>
	</ul>
	{#if linkText}
		<a {href}>{linkText}</a>
	{/if}
</div>

<style lang="scss">
	.box {
		background: var(--surface2);
		padding: var(--space-s);
		box-shadow: 0 2px 4px var(--surface-shadow);
		transition: var(--transition-bg), var(--transition-color), var(--transition-shadow);
		max-width: 50ch;
		
		h4 {
			margin: 0;
		}

		ul {
			padding: 0;
			list-style-type: none;
		}

		code {
			color: var(--accent);
			display: block;
		}

        p {
            margin: 0;
        }
        
		a {
			border: none;
			color: var(--text2);

			&:hover {
				color: var(--accent);
			}
		}
	}
</style>
