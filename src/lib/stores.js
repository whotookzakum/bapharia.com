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
export const showMarkersStore = writable(true)