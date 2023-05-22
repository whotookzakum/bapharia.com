import { writable } from "svelte/store";

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