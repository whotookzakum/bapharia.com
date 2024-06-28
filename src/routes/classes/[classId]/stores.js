import { writable } from "svelte/store";

export const allStats = writable([
    {
        label: "ATK",
        abbr: "ap",
        checked: true,
    },
    {
        label: "DEF",
        abbr: "dp",
        checked: true,
    },
    {
        label: "Crit Rate",
        abbr: "cr",
        checked: true,
    },
    {
        label: "Crit Dmg",
        abbr: "cp",
        checked: true,
    },
    {
        label: "STR",
        abbr: "str",
        checked: true,
    },
    {
        label: "DEX",
        abbr: "dex",
        checked: true,
    },
    {
        label: "INT",
        abbr: "int",
        checked: true,
    },
    {
        label: "MND",
        abbr: "mnd",
        checked: true,
    },
    {
        label: "Recovery",
        abbr: "rp",
        checked: true,
    },
    {
        label: "HP",
        abbr: "hp",
        checked: false,
    },
    // icl and pcl unknown
]);