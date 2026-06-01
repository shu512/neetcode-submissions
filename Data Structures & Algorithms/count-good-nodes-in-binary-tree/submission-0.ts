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
    goodNodes(root: TreeNode | null): number {
        return this.qwe(root, -1000);
    }

    qwe(node: TreeNode | null, maxValue: number): number {
        if (!node) return 0;

        const cur = node.val >= maxValue ? 1 : 0;
        if (node.val > maxValue) maxValue = node.val;

        const left = this.qwe(node.left, maxValue);
        const right = this.qwe(node.right, maxValue);

        return cur + left + right;
    }
}
