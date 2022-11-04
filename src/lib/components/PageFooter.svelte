<footer class="page-footer">
	<div class="footer-content">
		<section class="footer-links">
			<div>
				<strong>Pages</strong>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/guides">Guides</a>
					</li>
					<li>
						<a href="/map">Map</a>
					</li>
					<li>
						<a href="/skills">Skills</a>
					</li>
					<li>
						<a href="/crafting">Crafting</a>
					</li>
					<li>
						<a href="/translator">Translator</a>
					</li>
					<li>
						<a href="/db">Database</a>
					</li>
				</ul>
			</div>
			<div>
				<strong>Other</strong>
				<ul>
					<li>
						<a href="/credits">Credits</a>
					</li>
					<li>
						<a href="/privacy-policy">Privacy Policy</a>
					</li>
				</ul>
			</div>
			<div>
				<strong>Community</strong>
				<ul>
					<li>
						<a
							href="https://discord.gg/ZKwhn3a4yH"
							target="_blank"
							rel="noreferrer noopener nofollow">Discord</a
						>
					</li>
					<li>
						<a
							href="https://www.reddit.com/r/blueprotocol"
							target="_blank"
							rel="noreferrer noopener nofollow">Reddit</a
						>
					</li>
				</ul>
			</div>
		</section>
		<section class="footer-copyright">
			<span> &copy; Copyright 2022 Bapharia.com. All rights reserved. </span>
			<br />
			<span>
				BLUE PROTOCOL is a trademark of &copy; BANDAI NAMCO ONLINE INC. and &copy; BANDAI NAMCO
				STUDIOS INC.
			</span>
		</section>
	</div>
</footer>

<style lang="scss">
	.page-footer {
		background: var(--surface2);
		transition: var(--transition-bg);
		box-shadow: 0 0 4px var(--surface-shadow);
	}

	.footer-content {
		--border-color: hsla(240, 25%, 60%, 0.5);
		// border-top: 1px solid var(--border-color);
		margin: var(--space-xl) auto auto auto;
		line-height: 1.6;
		padding: var(--space-m) 1em;
		display: flex;
		flex-direction: column;
		gap: var(--space-m);
		font-size: var(--step--1);
		color: var(--text2);
		transition: var(--transition-color);
		// background: red;

		max-width: 1400px;
	}

	.footer-links {
		display: flex;
		align-items: flex-start;
		gap: var(--space-l);
	}

	a {
		border-bottom-width: 0px;
	}

	strong {
		display: block;
		margin: 0 0 var(--space-3xs) 0;
		font-weight: 500;
		color: var(--text1);
		transition: var(--transition-color);
	}

	ul {
		padding: 0;
		margin: 0;
		list-style-type: none;
	}
</style>
