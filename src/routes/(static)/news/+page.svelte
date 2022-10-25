<script>
	import HeroBanner from '../../../lib/components/HeroBanner.svelte';
	import Box from '../../../lib/components/Box.svelte';
	import latestNews from '../../../lib/data/latestNews.json';
	import { onMount } from 'svelte';

	onMount(() => {
		const timelineMeter = document.getElementById('center-line');
		function updateTimelineStyle() {
			var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			var scrolled = (winScroll / height) * 100;
			timelineMeter.style.setProperty('--line-progress', `${scrolled}%`);
		}

		updateTimelineStyle();
		window.addEventListener('scroll', updateTimelineStyle);
	});
</script>

<HeroBanner title="News" subtext="A timeline of official news updates" />

<div class="timeline-wrapper">
	<div id="center-line" />
	<ul class="timeline">
		{#each latestNews as post, i}
			<li class="timeline-item {i % 2 === 0 ? 'left' : 'right'}">
				<div class="post-wrapper">
					<Box title="Latest News" item={post} href="/news" />
				</div>
				<div class="post-date-wrapper">
					<span class="post-date show">{post.date}</span>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.timeline-wrapper {
		position: relative;
	}

	.timeline {
		padding: 0;
		margin: var(--space-xl) 0;
		list-style: none;
		// background: goldenrod;
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 3em;
		justify-content: center;
	}

	#center-line {
		--line-progress: 0%;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		width: 10px;
		height: 100%;
		background: var(--accent);
		overflow: hidden;
		box-shadow: 0 2px 4px var(--surface-shadow);
		transition: var(--transition-shadow), var(--transition-bg);

		&::after {
			content: '';
			background: var(--text2);
			position: absolute;
			width: 100%;
			height: 100%;
			transform: translateY(var(--line-progress));
			transition: height 0s ease;
		}
	}

	.timeline-item {
		display: flex;
		gap: 4em;
		align-items: center;

		& > * {
			flex: 1;
			display: flex;
		}
	}

	.post-date {
		font-size: var(--step-2);
		font-weight: bold;
		transform: translateY(20%);
		opacity: 0;
		transition: transform 0.25s ease, opacity 0.25s ease;
	}

	.left {
		.post-wrapper {
			margin-left: auto;
			justify-content: flex-end;
		}
	}

	.right {
		flex-direction: row-reverse;

		.post-date-wrapper {
			justify-content: flex-end;
		}
	}

	.show {
		transform: translateY(0%) !important;
		opacity: 1 !important;
	}
</style>
