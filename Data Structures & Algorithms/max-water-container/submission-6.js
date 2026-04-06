class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxC = 0;
        let l = 0;
        let r = heights.length - 1;

        while(l < r) {
            let vol = (r - l) * this.min(heights[l], heights[r]);
            maxC = this.max(vol, maxC);

            console.log(heights[l], heights[r])
            if (heights[l] < heights[r]) l++;
            else r--;
        }

        return maxC;
    }

    min(l, r) {
        return l < r ? l : r;
    }

    max(l, r) {
        return l > r ? l : r;
    }
}
