<script>
	export let theme;
</script>

<svg
	class="sun-and-moon"
	aria-hidden="true"
	width="24"
	height="24"
	viewBox="0 0 24 24"
	data-theme={theme}
>
	<mask class="moon" id="moon-mask">
		<rect x="0" y="0" width="100%" height="100%" fill="white" />
		<circle cx="24" cy="10" r="6" fill="black" />
	</mask>
	<circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
	<g class="sun-beams" stroke="currentColor">
		<line x1="12" y1="1" x2="12" y2="3" />
		<line x1="12" y1="21" x2="12" y2="23" />
		<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
		<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
		<line x1="1" y1="12" x2="3" y2="12" />
		<line x1="21" y1="12" x2="23" y2="12" />
		<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
		<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
	</g>
</svg>

<style lang="scss">
	@import 'https://unpkg.com/open-props/easings.min.css';

	.sun-and-moon {
		inline-size: var(--step-2);
		block-size: var(--step-2);
		inline-size: 100%;
		block-size: 100%;
		stroke-linecap: round;

		.moon,
		.sun,
		.sun-beams {
			transform-origin: center center;
		}

		.sun-beams {
			stroke-width: 2px;
		}

		&[data-theme='light'] {
			.sun {
				transform: scale(1.75);
			}

			.sun-beams {
				opacity: 0;
			}

			.moon circle {
				transform: translateX(-7px);

				@supports (cx: 1) {
					transform: translateX(0);
					cx: 17;
				}
			}
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.sun {
			transition: transform 0.5s var(--ease-elastic-3);
		}

		.sun-beams {
			transition: transform 0.5s var(--ease-elastic-4), opacity 0.5s var(--ease-3);
		}

		.moon circle {
			transition: transform 0.25s var(--ease-out-5);

			@supports (cx: 1) {
				transition: cx 0.25s var(--ease-out-5);
			}
		}

		.sun-and-moon[data-theme='light'] {
			.sun {
				transform: scale(1.75);
				transition-timing-function: var(--ease-3);
				transition-duration: 0.25s;
			}

			.sun-beams {
				transform: rotateZ(-25deg);
				transition-duration: 0.15s;
			}

			.moon circle {
				transition-delay: 0.25s;
				transition-duration: 0.5s;
			}
		}
	}
</style>
