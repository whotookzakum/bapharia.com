<script>
    import { userLocale } from "$lib/stores";
    export let imgSrc = "";

    function getElementName(text) {
        if (text.includes("Attribute_1")) {
            return {
                ja_JP: "火属性",
                en_US: "Fire",
            };
        }
        if (text.includes("Attribute_2")) {
            return {
                ja_JP: "雷属性",
                en_US: "Thunder",
            };
        }
        if (text.includes("Attribute_3")) {
            return {
                ja_JP: "氷属性",
                en_US: "Ice",
            };
        }
        if (text.includes("Attribute_4")) {
            return {
                ja_JP: "土属性",
                en_US: "Earth",
            };
        }
        if (text.includes("Attribute_5")) {
            return {
                ja_JP: "光属性",
                en_US: "Light",
            };
        }
        if (text.includes("Attribute_6")) {
            return {
                ja_JP: "闇属性",
                en_US: "Dark",
            };
        }
        if (text.includes("Attribute_Empty")) {
            return {
                ja_JP: "なし",
                en_US: "None",
            };
        }
    }
</script>

<img src={imgSrc} alt="" width="32" height="32" />
<span>{getElementName(imgSrc)[$userLocale]}</span>

<style>
    * {
        vertical-align: middle;
        font-size: var(--step-1);
    }
</style>
