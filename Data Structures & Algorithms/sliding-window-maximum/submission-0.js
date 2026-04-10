class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const max = [];
        let imax = -1;
        let l = 0, r = k - 1;

        while(r < nums.length) {
            const lastMax = max[max.length - 1];
            if (nums[r] > lastMax) {
                max.push(nums[r]);
                imax = r;
                l++;
                r++;
                continue;
            }

            if (imax < l) {
                const res = this.findMax(nums, l, r, lastMax);
                imax = res.index;
                max.push(res.max);
            } else {
                max.push(lastMax);
            }
            l++;
            r++;
        }

        return max;
    }

    findMax(nums, l, r, prevMax) {
        let max = nums[r];
        let imax = r;
        for (let i = r; i >= l; i--) {
            if (nums[i] === prevMax) {
                return { index: i, max: nums[i] };
            }
            if (max < nums[i]) {
                max = nums[i];
                imax = i;
            }
        }

        return { index: imax, max };
    }
}
