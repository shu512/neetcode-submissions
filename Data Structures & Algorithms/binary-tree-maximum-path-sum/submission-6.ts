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
     * @return {number}
     */
    maxPathSum(root: TreeNode | null): number {
        this.res = root.val;
        this.find(root);
        return this.res;
    }

    res = 0;
    find(node: TreeNode | null): number {
        if (!node) return 0;

        let left = this.find(node.left);
        let right = this.find(node.right);
        left = Math.max(left, 0);
        right = Math.max(right, 0);

        this.res = Math.max(this.res, left + right + node.val);

        return Math.max(node.val + left, node.val + right);
    }


}