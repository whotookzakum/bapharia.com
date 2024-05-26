<script>
  import { isRTLDocument } from "./core.js";
  import { effect, styleToString } from "./utils.js";

  export let index;
  export let offset;
  export let hide;
  export let horizontal;
  export let resizer;

  let elementRef;

  // The index may be changed if elements are inserted to or removed from the start of props.children
  let prevIndex;
  effect(() => {
    if (prevIndex === index) return;
    return resizer(elementRef, (prevIndex = index));
  });

  let style;
  $: {
    const _style = {
      margin: "0px",
      padding: "0px",
      position: "absolute",
      [horizontal ? "height" : "width"]: "100%",
      [horizontal ? "top" : "left"]: "0px",
      [horizontal ? (isRTLDocument() ? "right" : "left") : "top"]:
        offset + "px",
      visibility: hide ? "hidden" : "visible",
    };
    if (horizontal) {
      _style["display"] = "flex";
    }

    style = styleToString(_style);
  }
</script>

<div bind:this={elementRef} {style}>
  <slot />
</div>
