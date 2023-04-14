<script>
    import { graphql } from "$houdini";
    import Icon from "@iconify/svelte";

    

    // Result details
	export const _itemVariables = ({url}) => {
		return {
			id: parseInt(url.searchParams.get("result")) || 121000000,
		};
	};


	// $: {
	// 	_itemVariables = () => {
	// 		return {
	// 			id: parseInt(userSelectedEntryId) || 121000000,
	// 		};
	// 	};
	// }

	const item = graphql(`
		query item($id: Int!) @load {
			item(id: $id) {
				id
				bapharia {
					name {
						ja_JP
						en_US
					}
					thumb
					category {
						ja_JP
						en_US
					}
				}
			}
		}
	`);

	let userLocale = "ja_JP";
	userLocale = "en_US";

	let detailsCollapsed = true;
</script>

<div class="details-pane">
    <span class="component-label">Details</span>
    <div class="box">
        <article>
            {#if !$item.fetching}
                <header>
                    <img
                        src={$item.data.item.bapharia.thumb}
                        alt="Item Icon"
                        width="64"
                        height="64"
                    />
                    <h3>
                        {$item.data.item.bapharia.name[userLocale]}
                        <span>(Lv. 1)</span>
                    </h3>
                    <span
                        >{$item.data.item.bapharia.category[
                            userLocale
                        ]}</span
                    >
                    <span>ID: {$item.data.item.id}</span>
                    <img
                        class="element-img"
                        src="/images/elements/UI_IconAttribute_1.png"
                        alt="Fire"
                        width="32"
                        height="32"
                    />
                </header>
            {/if}
            <div class:collapsed={detailsCollapsed}>
                
            </div>
        </article>
        <label class="details-expander">
            <Icon
                icon={detailsCollapsed ? "mdi:arrow-down" : "mdi:arrow-up"}
                width="18"
                height="18"
                style="margin-top:3px"
            />
            <input
                type="checkbox"
                class="visually-hidden"
                bind:checked={detailsCollapsed}
            />
        </label>
    </div>
</div>

<style lang="scss">
    .details-pane {
		article {
			border: 1px solid var(--surface2);
			border-top-right-radius: 5px;
			border-top-left-radius: 5px;
			border-bottom: none;
			padding: 1rem;
		}

		div.box {
			padding: 0;
			overflow: visible;
			border: none;
		}

		header {
			display: grid;
			grid-template-columns: auto 1fr;
			align-items: center;
			column-gap: 1rem;
			padding-bottom: 1rem;
			line-height: 1.4;
			border-bottom: 1px solid rgba(255, 255, 255, 0.05);
			position: relative;

			img {
				grid-row: span 3;
			}

			h3 {
				margin: 0;
				font-size: var(--step-1);
			}

			span {
				color: var(--text2);
				font-size: var(--step--1);
			}

			.element-img {
				position: absolute;
				right: 0;
				top: 0;
				opacity: 0.5;
			}
		}

		.collapsed {
			max-height: 465px;
			-webkit-mask-image: linear-gradient(black, transparent);
			mask-image: linear-gradient(black 70%, transparent);
		}

		.details-expander {
			background: var(--surface2);
			border: 1px solid var(--surface3); // or just border-top
			display: block;
			text-align: center;
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;

			&:hover,
			&:has(:focus-visible) {
				background: var(--surface3);
				color: var(--accent);
			}

			&:has(:focus-visible) {
				border-radius: 5px;
			}
		}
	}
</style>