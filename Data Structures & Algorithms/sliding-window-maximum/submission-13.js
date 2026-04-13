class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const deq = [];
        let r = 0;
        const res = [];

        while(r < k - 1) {
            this.add(deq, nums[r]);
            r++;
        }
        this.add(deq, nums[r]);

        while(r < nums.length) {
            const toPush = nums[r - k + 1] === deq[0] ? deq.shift() : deq[0];
            res.push(toPush);
            r++;

            this.add(deq, nums[r]);
        }

        return res;
    }

    add(deq, num) {
        if (num === undefined) return;

        while(deq[deq.length - 1] < num) {
            deq.pop();
        }
        deq.push(num);
    }
}
