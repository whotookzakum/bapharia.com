<script>
    import { userLocale } from "$lib/stores";
    export let imgSrc = "";

    function getClassName(text) {
        if (text.includes("Class_06")) {
            return {
                ja_JP: "ブラストアーチャー",
                en_US: "Blast Archer"
            }
        }
        if (text.includes("Class_07")) {
            return {
                ja_JP: "ツインストライカー",
                en_US: "Twin Striker"
            }
        }
        if (text.includes("Class_11")) {
            return {
                ja_JP: "スペルキャスター",
                en_US: "Spell Caster"
            }
        }
        if (text.includes("Class_12")) {
            return {
                ja_JP: "イージスファイター",
                en_US: "Aegis Fighter"
            }
        }
        if (text.includes("Class_19")) {
            return {
                ja_JP: "ヘビースマッシャー",
                en_US: "Heavy Smasher"
            }
        }
    }
</script>

<h4>Class</h4>
<div class="border-left flex g-50">
    <img src={imgSrc} alt="" width="32" height="32" />
    <p>{getClassName(imgSrc)[$userLocale]}</p>
</div>