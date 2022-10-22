<script>
	import Navbar from '../../lib/components/Navbar.svelte';
import '../../lib/styles/globals.scss';
</script>

<main>
	<div class="nav-wrapper">
		<Navbar />
	</div>
	<slot />
</main>

<style>
	* { 
		cursor: url('/images/cursor.png'), default;
	}

	.nav-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		background: var(--surface1);
		width: 100%;
	}
	
	main {
		height: 100vh;
        width: 100vw;
	}
</style>