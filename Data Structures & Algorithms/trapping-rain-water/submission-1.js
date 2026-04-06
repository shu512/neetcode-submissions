class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        const middleIndex = this.findMax(heights, 0, heights.length);
        let res = 0;

        let r = middleIndex;
        while(r != 0) {
            const l = this.findMax(heights, 0, r);
            res += this.sumWater(heights, l, r);

            r = l;
        }

        let l = middleIndex;
        while (l != heights.length - 1) {
            const r = this.findMax(heights, l + 1, heights.length);
            res += this.sumWater(heights, l, r);

            l = r;
        }
        return res;
    }

    sumWater(heights, l, r) {
        let summ = 0;
        const h = this.min(heights[l], heights[r]);
        for (let i = l + 1; i < r; i++) {
            summ += h - heights[i];
        }
        return summ;
    }

    min(a, b) {
        return a < b ? a : b;
    }

    findMax(heights, l, r) {
        let max = -1, imax = -1;
        for (let i = l; i < r; i++) {
            if (heights[i] > max) {
                max = heights[i];
                imax = i;
            }
        }

        return imax;
    }
}
