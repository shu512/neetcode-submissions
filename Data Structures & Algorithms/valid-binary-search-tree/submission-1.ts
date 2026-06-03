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
     * @return {boolean}
     */
    isValidBST(node: TreeNode | null, lBoundary = -10000, rBoundary = 10000): boolean {
        if (!node) return true;

        if (node.val <= lBoundary || node.val >= rBoundary) return false;


        return this.isValidBST(node.left, lBoundary, node.val) && this.isValidBST(node.right, node.val, rBoundary);
    }
}
