export function scrollStop(refresh = 100) {
    let isScrolling;
    return (callback) => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(callback, refresh);
    };
}
export function scrollSpeed(refresh = 200) {
    let lastScrollPosition = undefined;
    let isScrollingFast;
    return (speed, callback) => (scrollPosition) => {
        if (!lastScrollPosition) {
            lastScrollPosition = scrollPosition;
        }
        else {
            if (Math.abs(scrollPosition - lastScrollPosition) > speed) {
                callback.fast();
                if (isScrollingFast !== undefined) {
                    clearTimeout(isScrollingFast);
                    isScrollingFast = undefined;
                }
                isScrollingFast = setTimeout(() => {
                    callback.slow();
                    isScrollingFast = undefined;
                }, refresh);
            }
            else {
                if (isScrollingFast === undefined) {
                    callback.slow();
                }
            }
            lastScrollPosition = scrollPosition;
        }
    };
}
export const round = {
    ceil: (x, multiple) => Math.ceil(x / multiple) * multiple,
    floor: (x, multiple) => ~~(x / multiple) * multiple,
};
export const getGridIndices = (itemCount, itemHeight, height, columnCount, overScanColumn, scrollPosition) => {
    const indices = [];
    const startIndexTemp = round.floor((scrollPosition / itemHeight) * columnCount, columnCount);
    const startIndexOverScan = startIndexTemp > overScanColumn ? startIndexTemp - overScanColumn : 0;
    const startIndex = startIndexTemp > 0 && startIndexOverScan >= 0 ? startIndexOverScan : startIndexTemp;
    const endIndexTemp = Math.min(itemCount, round.ceil(((scrollPosition + height) / itemHeight) * columnCount, columnCount));
    const endIndexOverScan = endIndexTemp + overScanColumn;
    const endIndex = endIndexOverScan < itemCount ? endIndexOverScan : itemCount;
    for (let i = startIndex; i < endIndex; i++)
        indices.push(i);
    return indices;
};
export const getListIndices = (itemCount, itemSize, size, overScan, scrollPosition) => {
    const indices = [];
    const startIndexTemp = ~~(scrollPosition / itemSize);
    const startIndexOverScan = startIndexTemp > overScan ? startIndexTemp - overScan : 0;
    const startIndex = startIndexOverScan >= 0 ? startIndexOverScan : startIndexTemp;
    const endIndexTemp = Math.min(itemCount, ~~((scrollPosition + size) / itemSize));
    const endIndexOverScan = endIndexTemp + overScan;
    const endIndex = endIndexOverScan < itemCount ? endIndexOverScan : itemCount;
    for (let i = startIndex; i < endIndex; i++)
        indices.push(i);
    return indices;
};
export const getRowIndex = (index, columnCount) => ~~(index / columnCount);
