import { writable, readable, derived } from "svelte/store";
import cloneDeep from "lodash/cloneDeep"

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

export const iStore = readable({
    minLevel: 1,
    maxLevel: 100,
    minAR: 1,
    maxAR: 30,
});


// export const nStore = derived(
//     iStore, 
//     ($iStore) => $iStore
// );

export const initialFilters = {
    minLevel: 1,
    maxLevel: 100,
    minAR: 1,
    maxAR: 30,
    categories: [
        {
            typename: "Item",
            text: {
                ja_JP: "アイテム",
                en_US: "Item",
            },
            checked: true,
        },
        {
            typename: "Weapon",
            text: {
                ja_JP: "武器",
                en_US: "Weapon",
            },
            checked: true,
        },
        {
            typename: "Imagine",
            text: {
                ja_JP: "イマジン",
                en_US: "Echo",
            },
            checked: true,
        },
        {
            typename: "Enemy",
            text: {
                ja_JP: "エネミー",
                en_US: "Enemy",
            },
            checked: true,
        },
        {
            typename: "Skill",
            text: {
                ja_JP: "スキル",
                en_US: "Skill",
            },
            checked: true,
        },
        {
            typename: "Token",
            text: {
                ja_JP: "トークン",
                en_US: "Token",
            },
            checked: true,
        },
        {
            typename: "GameMap",
            text: {
                ja_JP: "マップ",
                en_US: "Map",
            },
            checked: true,
        },
        {
            typename: "LiquidMemory",
            text: {
                ja_JP: "リキッドメモリ",
                en_US: "Liquid Memory",
            },
            checked: true,
        },
        {
            typename: "Costume",
            text: {
                ja_JP: "コスチューム",
                en_US: "Costume",
            },
            checked: true,
        },
        {
            typename: "Gesture",
            text: {
                ja_JP: "ジェスチャー",
                en_US: "Gesture",
            },
            checked: true,
        },
        {
            typename: "StampSet",
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