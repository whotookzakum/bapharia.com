import { writable, readable, derived } from "svelte/store";
import cloneDeep from "lodash/cloneDeep"
import { browser } from "$app/environment";
import { page } from "$app/stores";

export const currentImagineId = writable(1)
export const platformId = writable(1)
export const currency = writable({
    name: "Japanese Yen",
    code: "JPY",
    symbol: "¥",
    rate: 1,
    decimals: 0,
})
export const userLocale = writable("en_US")
export const markersVisibility = writable({
    "Weapon Reconstructor": true,
    "Millie": true,
    "Fishing Spot": true,
    "Warp Gate": true,
    "Storage": true,
    "Ranking Board": true,
    "Spheromutator": true,
    "Dyeworker": true,
    "Beauty Salon": true,
    "Peddler": true,
    "Guild": true,
    "Echoforge": true,
    "Item Shop": true,
    "Memory Stand": true,
    "Quest Receptionist": true,
    "Class Maker": true,
    "Weapon Shop": true,
    "Class Master": true,
    "Class Quest": false,
    "E Quest": false,
    "Main Quest": false,
    "Sub Quest": false,
    "T Quest": false
})

export const mapState = writable({
    currentMarkerId: null,
    currentMapId: "Cty001"
})




// Database stores

export const initialFilters = {
    minLevel: 1,
    maxLevel: 100,
    minAR: 1,
    maxAR: 30,
    categories: [
        {
            typename: "items",
            text: {
                ja_JP: "アイテム",
                en_US: "Item",
            },
            checked: true,
        },
        {
            typename: "weapons",
            text: {
                ja_JP: "武器",
                en_US: "Weapon",
            },
            checked: true,
        },
        {
            typename: "imagine",
            text: {
                ja_JP: "イマジン",
                en_US: "Echo",
            },
            checked: true,
        },
        {
            typename: "enemies",
            text: {
                ja_JP: "エネミー",
                en_US: "Enemy",
            },
            checked: true,
        },
        {
            typename: "skills",
            text: {
                ja_JP: "スキル",
                en_US: "Skill",
            },
            checked: true,
        },
        {
            typename: "tokens",
            text: {
                ja_JP: "トークン",
                en_US: "Token",
            },
            checked: true,
        },
        {
            typename: "maps",
            text: {
                ja_JP: "マップ",
                en_US: "Map",
            },
            checked: true,
        },
        {
            typename: "liquidMemories",
            text: {
                ja_JP: "リキッドメモリ",
                en_US: "Liquid Memory",
            },
            checked: true,
        },
        {
            typename: "costumes",
            text: {
                ja_JP: "コスチューム",
                en_US: "Costume",
            },
            checked: true,
        },
        {
            typename: "gestures",
            text: {
                ja_JP: "ジェスチャー",
                en_US: "Gesture",
            },
            checked: true,
        },
        {
            typename: "stampSets",
            text: {
                ja_JP: "スタンプセット",
                en_US: "Stamp Set",
            },
            checked: true,
        },
    ]
}

export const nStore = writable(cloneDeep(initialFilters))
export const filterCategoryTypes = derived(
    nStore,
    ($nStore) => $nStore.categories.reduce((acc, curr) => {
        if (curr.checked) {
            acc.push(curr.typename);
            return acc;
        }
        return acc;
    }, [])
)