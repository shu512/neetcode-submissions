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
    maxDepth(node, depth = 1) {
        if (!node) return depth - 1;
        let lDepth = -1, rDepth = -1;
        if (node.left) lDepth = this.maxDepth(node.left, depth + 1);
        if (node.right) rDepth = this.maxDepth(node.right, depth + 1);

        return Math.max(lDepth, rDepth, depth);
    }
}
