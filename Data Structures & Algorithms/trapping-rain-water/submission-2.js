class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        const minArr = this.getMinArr(heights);
        let res = 0;
        for (let i = 0; i < heights.length; i++) {
            let t = minArr[i] - heights[i];
            if (t > 0) res += t;
        }

        return res;
    }

    getMinArr(heights) {
        const maxL = Array.from({length: heights.length});
        const maxR = Array.from({length: heights.length});
        const minArr = Array.from({length: heights.length});

        let max = 0;
        for (let i = 0; i < heights.length; i++) {
            maxL[i] = max;
            if (max < heights[i]) max = heights[i];
        }

        max = 0;
        for (let i = heights.length - 1; i >= 0; i--) {
            maxR[i] = max;
            if (max < heights[i]) max = heights[i];
        }

        for (let i = 0; i < heights.length; i++) {
            minArr[i] = maxL[i] < maxR[i] ? maxL[i] : maxR[i];
        }

        console.log(maxL)
        console.log(maxR)
        console.log(minArr)

        return minArr;
    }
}
