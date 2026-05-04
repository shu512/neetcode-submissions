class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let a = nums1;
        let b = nums2;
        if (nums2.length < nums1.length) {
            a = nums2;
            b = nums1;
        }

        const length = nums1.length + nums2.length;
        const half = Math.floor(length / 2);

        let l = 0, r = a.length - 1;
        while (true) {
            const aMiddle = Math.floor((r + l) / 2);
            const bMiddle = half - aMiddle - 2;

            const [leftA, rightA] = this.getMiddleNodes(a, aMiddle); 
            const [leftB, rightB] = this.getMiddleNodes(b, bMiddle); 

            console.log(leftA, rightA, leftB, rightB);
            
            if (leftA <= rightB && leftB <= rightA) {
                return length % 2 === 0
                    ? (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2
                    : Math.min(rightA, rightB);
            } else if (leftA > rightB) {
                r = aMiddle - 1
            } else {
                l = aMiddle + 1
            }

        }
    }

    getMiddleNodes(arr, index) {
        let left, right;
        if (index < 0) left = Number.NEGATIVE_INFINITY;
        else left = arr[index];

        if (index + 1 >= arr.length) right = Infinity;
        else right = arr[index + 1];

        return [left, right]
    }

}
