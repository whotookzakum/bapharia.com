<div class="box-title">クラス／武器</div>
<div class="info-box">
	<div class="left">
		<div>Lv. 1</div>
		<img src="/images/axe1.png" alt="" />
	</div>
	<div class="right">
		<div class="weapon-name">訓練用の斧</div>
		<ul class="stats">
			<li class="stat">
				<span>攻撃力</span>
				<strong>30</strong>
			</li>
			<li class="stat">
				<span>属性</span>
				<strong>ー</strong>
				<span>属性攻撃力</span>
				<strong>0</strong>
			</li>
			<li class="stat">
				<span>特効</span>
				<span>なし</span>
				<span />
			</li>
		</ul>
	</div>
</div>

<style lang="scss">
	.box-title {
		color: var(--text1-light);
		font-weight: 600;
		font-size: var(--step-1);
		text-align: center;
		margin-top: var(--space-xs);
		margin-bottom: var(--space-3xs);
	}

	.info-box {
		display: grid;
		align-items: center;
		grid-template-columns: 1fr 1fr 1fr;
		padding: var(--space-2xs);
		background: rgba(0, 0, 0, 0.1);
	}

	.left {
		font-size: var(--step-1);
		text-align: center;
		font-weight: 500;

		img {
			margin-top: var(--space-3xs);
		}
	}

	.right {
		grid-column: span 2;
		border-left: 6px solid rgba(0, 0, 0, 0.4);

		.weapon-name {
			font-size: var(--step-1);
			font-weight: bold;
			padding: var(--space-2xs);
			background: linear-gradient(90deg, rgba(0, 0, 0, 0.4), transparent);
		}

		ul.stats {
			margin: 0;
			list-style: none;
			padding: var(--space-2xs);
			max-width: 320px;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		li.stat {
			display: flex;
			justify-content: space-between;
		}
	}
</style>
