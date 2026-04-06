class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = nums[0];
        let slowIndex = 0;
        let fast = slow;
        let fastIndex = 0;



        slowIndex = slow;
        slow = nums[slow];
        fast = nums[fast];
        fastIndex = fast;
        fast = nums[fast];

        while(slowIndex != fastIndex) {
            slowIndex = slow;
            slow = nums[slow];
            fast = nums[fast];
            fastIndex = fast;
            fast = nums[fast];
        }

        let newPointer = nums[0];
        let newIndex = 0;

        while(slowIndex != newIndex) {
            newIndex = newPointer;
            newPointer = nums[newPointer];
            slowIndex = slow;
            slow = nums[slow];
        }

        return slowIndex;
    }
}

