import { afterUpdate, beforeUpdate, onDestroy } from "svelte";
export const effect = (cb, before) => {
    let cleanup;
    (before ? beforeUpdate : afterUpdate)(() => {
        if (cleanup)
            cleanup();
        cleanup = cb();
    });
    onDestroy(() => {
        if (cleanup)
            cleanup();
    });
};
export const styleToString = (obj) => {
    return Object.keys(obj).reduce((acc, k) => acc + `${k}:${obj[k]};`, "");
};
export const defaultGetKey = (_data, i) => "_" + i;
