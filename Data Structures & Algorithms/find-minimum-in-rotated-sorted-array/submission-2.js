class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = nums[0];
        let l = 0, r = nums.length - 1;
        if (nums.length === 2) return Math.min(...nums);

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
