class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length - 1;
        let min = Math.min(nums[l], nums[r]);

        while(l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            if (min < nums[mid]) {
                l = mid + 1;
            } else {
                min = nums[mid];
                r = mid - 1;
            }
        }

        return min;
    }
}
