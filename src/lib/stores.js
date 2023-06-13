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
    "Main Quest": true,
    "Sub Quest": false,
    "T Quest": false,
    "Training Dummy": true,
    "Chef": true,
    "Raid Entrance": true,
    "Camp": true,
    "Dungeon Entrance": true,
    "Elite Monster": true
})

export const mapState = writable({
    currentMarkerId: null,
    currentMapId: "Cty001"
})

export const mapSearchQuery = writable("")
export const mapListShowZones = writable(false)
export const mapControls = writable({
    showMapList: false,
    showMarkers: false,
    showHotkeys: false
})



// Database stores

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
            checked: false,
        },
        {
            typename: "Weapon",
            text: {
                ja_JP: "武器",
                en_US: "Weapon",
            },
            checked: false,
        },
        {
            typename: "Imagine",
            text: {
                ja_JP: "イマジン",
                en_US: "Echo",
            },
            checked: false,
        },
        {
            typename: "Enemy",
            text: {
                ja_JP: "エネミー",
                en_US: "Enemy",
            },
            checked: false,
        },
        {
            typename: "Skill",
            text: {
                ja_JP: "スキル",
                en_US: "Skill",
            },
            checked: false,
        },
        {
            typename: "Token",
            text: {
                ja_JP: "トークン",
                en_US: "Token",
            },
            checked: false,
        },
        {
            typename: "GameMap",
            text: {
                ja_JP: "マップ",
                en_US: "Map",
            },
            checked: false,
        },
        {
            typename: "LiquidMemory",
            text: {
                ja_JP: "リキッドメモリ",
                en_US: "Liquid Memory",
            },
            checked: false,
        },
        {
            typename: "Costume",
            text: {
                ja_JP: "コスチューム",
                en_US: "Costume",
            },
            checked: false,
        },
        {
            typename: "Gesture",
            text: {
                ja_JP: "ジェスチャー",
                en_US: "Gesture",
            },
            checked: false,
        },
        {
            typename: "StampSet",
            text: {
                ja_JP: "スタンプセット",
                en_US: "Stamp Set",
            },
            checked: false,
        },
        {
            typename: "AvatarPart",
            text: {
                ja_JP: "アバター",
                en_US: "Avatar Parts",
            },
            checked: false,
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