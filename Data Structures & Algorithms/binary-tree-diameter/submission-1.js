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
    result = 0;

    diameterOfBinaryTree(root) {
        this.dfs(root);
        return this.result;
    }

    dfs(node) {
        if (!node) return 0;
        const leftHeight = this.dfs(node.left);
        const rightHeight = this.dfs(node.right);

        this.result = Math.max(this.result, leftHeight+ rightHeight);

        return 1 + Math.max(leftHeight, rightHeight);
    }
}
