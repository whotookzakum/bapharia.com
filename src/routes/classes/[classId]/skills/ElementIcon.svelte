<script>
    export let elementName = "";
    export let showBlankElement = false;
    export let size = "48";
    export let style = "";

    let src = "";
    switch (elementName) {
        case "Fire":
            src = "/UI/Icon/Attribute/UI_IconAttribute_1.png";
            break;
        case "Thunder":
            src = "/UI/Icon/Attribute/UI_IconAttribute_2.png";
            break;
        case "Ice":
            src = "/UI/Icon/Attribute/UI_IconAttribute_3.png";
            break;
        case "Earth":
            src = "/UI/Icon/Attribute/UI_IconAttribute_4.png";
            break;
        case "Light":
            src = "/UI/Icon/Attribute/UI_IconAttribute_5.png";
            break;
        case "Dark":
            src = "/UI/Icon/Attribute/UI_IconAttribute_6.png";
            break;
        case "None":
        default:
            if (showBlankElement) {
                src = "/UI/Icon/Attribute/UI_IconAttribute_Empty.png";
            }
    }
</script>

{#if src}
    <img
        class="element-icon"
        {src}
        alt=""
        width={size}
        height={size}
        {style}
    />
{/if}
