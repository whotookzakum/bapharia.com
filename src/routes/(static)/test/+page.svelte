<script>
	import HeroBanner from '../../../lib/components/HeroBanner.svelte';
	import StickyNote from '../../../lib/components/StickyNote.svelte';
	import Item from '../../../lib/components/Item.svelte';
	import ItemList from '../../../lib/components/ItemList.svelte';
</script>

<HeroBanner title="Page Title" subtext="Some page slug here." />

<article>
	<h3>A little header..</h3>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos tempore, eveniet hic
		labore provident perspiciatis voluptate cupiditate eligendi alias quidem. Reiciendis dicta quia,
		fuga cumque laborum mollitia ea. Ipsa.
	</p>

	<StickyNote type="tip">
		This is a sticky note.<br />
		The available types are Note, Tip, Caution, and Warning.
	</StickyNote>

	<h3 style="color: var(--text2)">...goes a long way!</h3>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui laboriosam, quo voluptates
		similique magni voluptas ipsa ducimus illo architecto est beatae harum soluta suscipit
		blanditiis esse dolore quia praesentium?
	</p>
</article>

<p style="color: var(--text1)">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatibus, consequatur,
	temporibus velit cum modi dolorum id mollitia explicabo praesentium nisi tenetur commodi illo
	blanditiis quidem, possimus veniam fuga inventore?
</p>

<p style="color: var(--text2)">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatibus, consequatur,
	temporibus velit cum modi dolorum id mollitia explicabo praesentium nisi tenetur commodi illo
	blanditiis quidem, possimus veniam fuga inventore?
</p>

<div style="display: flex; color: var(--brand); gap: 3rem;">
	<div
		style="background: var(--surface1); width: 200px; height: 200px; box-shadow: 0 6px 14px var(--surface-shadow)"
	/>
	<div
		style="background: var(--surface2); width: 200px; height: 200px; box-shadow: 0 6px 14px var(--surface-shadow)"
	/>
	<div
		style="background: var(--surface3); width: 200px; height: 200px; box-shadow: 0 6px 14px 2px var(--surface-shadow)"
	/>
</div>

<ItemList>
	<Item name="Ancient Flame Bow" type="Axe" itemType="weapon" reqAR="2" imgSrc="axe1.png" />
	<Item name="Ancient Flame Bow" type="Axe" itemType="weapon" reqAR="2" imgSrc="axe1.png" />
	<Item name="Ancient Flame Bow" type="Axe" itemType="weapon" reqAR="2" imgSrc="axe1.png" />
	<Item name="Ancient Flame Bow" type="Axe" itemType="weapon" reqAR="2" imgSrc="axe1.png" />
	<Item name="Ancient Flame Bow" type="Axe" itemType="weapon" reqAR="2" imgSrc="axe1.png" />
	<Item name="Ancient Flame Bow" type="Axe" itemType="weapon" reqAR="2" imgSrc="axe1.png" />
</ItemList>
