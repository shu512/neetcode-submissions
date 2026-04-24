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
            console.log(nums[l], nums[r], nums[mid]);
            if (nums[mid] >= nums[l]) {
                // monotonic. l = the least, mid = the most
                if (target >= nums[l] && target <= nums[mid]) {
                    // console.log(1111);
                    r = mid - 1;
                } else {
                    // console.log(2222);
                    l = mid + 1;
                }
            } else {
                // l = the most, mid = the least
                if (target <= nums[mid] || target >= nums[l]) {
                    // console.log(3333);
                    r = mid - 1;
                } else {
                    // console.log(4444);
                    l = mid + 1;
                }
            }
        }

        return -1;
    }
}
