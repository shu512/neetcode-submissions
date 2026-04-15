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
            if (target < nums[mid]) r = mid - 1;
            if (target > nums[mid]) l = mid + 1;
        }

        return -1;
    }


    searchRec(nums, target, l = 0, r = nums.length - 1) {
        const mid = l + Math.floor((r - l) / 2);
        if (nums[mid] === target) return mid;
        if (l >= r) return -1;
        if (target < nums[mid]) return this.searchRec(nums, target, l, mid - 1);
        if (target > nums[mid]) return this.searchRec(nums, target, mid + 1, r);
    }
}

