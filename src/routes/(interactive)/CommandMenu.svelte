<script>
	import CommandMenuItem from "./CommandMenuItem.svelte";

    const menuItems = [
        {
            title: 'キャラクター',
            imgSrc: 'UI_CommandMenuIcon1MyChara.png',
            url: '/sim/character' // '/sim/character'
        },
        {
            title: '所持品',
            imgSrc: 'UI_CommandMenuIcon1Inventory.png',
            url: '/sim/inventory'
        },
        {
            title: 'クエスト',
            imgSrc: 'UI_CommandMenuIcon1Quest.png',
            url: '/sim/quest'
        },
        {
            title: 'マップ',
            imgSrc: 'UI_CommandMenuIcon1Map.png',
            url: '/sim/map'
        },
        {
            title: 'コミュニケート',
            imgSrc: 'UI_CommandMenuIcon1Communicate.png',
            url: '/sim/communicate'
        },
        {
            title: '冒険手帳',
            imgSrc: 'UI_CommandMenuIcon1Library.png',
            url: '/sim/guide'
        },
        {
            title: 'シーズンパス',
            imgSrc: 'UI_CommandMenuIcon1Map.png',
            url: '/sim/season-pass'
        },
        {
            title: '受信ボックス',
            imgSrc: 'UI_CommandMenuIcon1Quest.png',
            url: '/sim/quest'
        },
    ]
</script>

<menu class="command-menu">
    {#each menuItems as item}
        <CommandMenuItem item={item} />
    {/each}
</menu>

<style lang="scss">
	menu.command-menu {
		list-style: none;
		padding: 0;
		margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        flex: 1;
		max-width: 320px;
    }
</style>
