class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let minK = -1;
        let l = 1, r = 1000000000;

        while(l <= r) {
            const middle = l + Math.floor((r - l) / 2);
            if (this.ok(piles, h, middle)) {
                minK = middle;
                r = middle - 1;
            } else {
                l = middle + 1;
            }
        }

        return minK;
    }

    ok(piles, h, k) {
        let sumH = piles.reduce((sum, p) => sum + Math.ceil(p / k), 0);
        return sumH <= h;
    }
}
