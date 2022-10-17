<script>
	import HeroBanner from "../../lib/components/HeroBanner.svelte";
import StickyNote from "../../lib/components/StickyNote.svelte";

</script>

<HeroBanner title="Page Title" subtext="Some page slug here." />

<article>
    <h3>A little header..</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos tempore, eveniet hic labore provident perspiciatis voluptate cupiditate eligendi alias quidem. Reiciendis dicta quia, fuga cumque laborum mollitia ea. Ipsa.</p>

    <StickyNote type="tip">
        This is a sticky note.<br>
        The available types are Note, Tip, Caution, and Warning.
    </StickyNote>

    <h3 style="color: var(--text2)">...goes a long way!</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui laboriosam, quo voluptates similique magni voluptas ipsa ducimus illo architecto est beatae harum soluta suscipit blanditiis esse dolore quia praesentium?</p>
</article>
