class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxC = 0;

        for(let l = 0; l < heights.length; l++) {
            for(let r = l + 1; r < heights.length; r++) {
                let vol = (r - l) * this.min(heights[l], heights[r]);
                if (vol > maxC) {
                    maxC = vol;
                    console.log(`${maxC}: ${l} & ${r}`);
                }
            }
        }

        return maxC;
    }

    min(l, r) {
        return l < r ? l : r;
    }
}
