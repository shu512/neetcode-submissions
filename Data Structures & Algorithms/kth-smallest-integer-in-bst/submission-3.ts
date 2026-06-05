/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        const res = this.find(root, k);

        return res[0];
        
    }

    find(node: TreeNode | null, k: number, cur: number = 0) {
        if (!node) return [0, false];

        if (node.left) {
            const res = this.find(node.left, k, cur)
            if (res[1]) return [res[0], true];
            cur = res[0];
        };

        // current node
        cur++;
        if (cur === k) return [node.val, true];

        if (node.right) {
            const res = this.find(node.right, k, cur)
            if (res[1]) return [res[0], true];
            cur = res[0];
        };

        // console.log(node.val, cur)

        return [cur, false];
    }
}
