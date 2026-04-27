// type StoreValue = {
//     timestamp: number;
//     value: string;
// };

class TimeMap {
    // Map<string, Array<StoreValue>>
    keyStore;

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.get(key)) {
            this.keyStore.set(key, []);
        }
        const obj = {
            timestamp,
            value,
        };
        this.keyStore.get(key).push(obj);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore.get(key)
        if (!arr) return '';
        return this._bSearch(arr, timestamp);
    }

    _bSearch(arr, timestamp) {
        let mostValue = '';
        let l = 0, r = arr.length - 1;
        while(l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            const cur = arr[mid];
            if (cur.timestamp <= timestamp) {
                l = mid + 1;
                mostValue = cur.value;
            } else {
                r = mid - 1;
            }
        }

        return mostValue;
    }
}
