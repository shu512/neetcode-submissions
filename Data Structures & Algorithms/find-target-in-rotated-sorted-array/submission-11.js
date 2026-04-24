class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;
        while(l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            if (nums[mid] === target) return mid;

            if (nums[mid] >= nums[l]) {
                // monotonic. l = the least, mid = the most
                if (target >= nums[l] && target <= nums[mid]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            } else {
                // non-monotonic l = the most, mid = the least
                if (target <= nums[mid] || target >= nums[l]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }

        return -1;
    }
}
