<script>
    import { ScrollArea } from "bits-ui";

    export let viewportStyle = "";
    export let rootClasses = ""
</script>

<ScrollArea.Root class="relative pane-max-height {rootClasses}" hideDelay={0}>
    <ScrollArea.Viewport
        class="h-full p-8"
        style="scrollbar-width: none; overflow: hidden scroll; {viewportStyle}"
    >
        <ScrollArea.Content>
            <slot />
        </ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar
        orientation="vertical"
        class="flex h-full w-3 touch-none select-none rounded-full border-l border-l-transparent transition-all hover-w-3 bg-[hsla(220,23%,59%,0.2)] opacity-40 hover:opacity-100"
    >
        <ScrollArea.Thumb class="relative flex-1 rounded-full bg-[hsla(220,23%,59%,0.8)]" />
    </ScrollArea.Scrollbar>
</ScrollArea.Root>