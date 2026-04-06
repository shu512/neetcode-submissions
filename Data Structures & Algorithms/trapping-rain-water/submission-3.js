class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        let l = 0;
        let r = heights.length - 1;
        let maxL = 0;
        let maxR = 0;
        let res = 0;

        let cur = l;
        while (l < r) {
            console.log(l, r);
            console.log(maxL, maxR);
            let t = this.min(maxL, maxR) - heights[cur];
            if (t > 0) {
                res += t;
                console.log(`+ ${t}`);
            }
            console.log('\n--------------------');

            if (maxL < heights[l]) maxL = heights[l];
            if (maxR < heights[r]) maxR = heights[r];

            if (maxR < maxL) {
                r--;
                cur = r;
            } else {
                l++;
                cur = l;
            }
        }

        return res;
    }

    min(a, b) {
        return a < b ? a : b;
    }

}
