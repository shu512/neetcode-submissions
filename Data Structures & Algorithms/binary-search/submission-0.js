class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        return this.bsearch(nums, target, 0, nums.length - 1);
    }

    bsearch(nums, target, l, r) {
        const mid = l + Math.floor((r - l) / 2);
        if (nums[mid] === target) return mid;
        console.log(l, r, mid);
        if (l >= r) return -1;
        if (target < nums[mid]) return this.bsearch(nums, target, l, mid - 1);
        if (target > nums[mid]) return this.bsearch(nums, target, mid + 1, r);
    }
}

