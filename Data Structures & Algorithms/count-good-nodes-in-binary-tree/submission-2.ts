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
    goodNodes(node: TreeNode | null, maxValue = node.val): number {
        if (!node) return 0;

        const cur = node.val >= maxValue ? 1 : 0;
        if (node.val > maxValue) maxValue = node.val;

        const left = this.goodNodes(node.left, maxValue);
        const right = this.goodNodes(node.right, maxValue);

        return cur + left + right;
    }
}
