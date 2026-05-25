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
     * @param {TreeNode} node
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        node: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {
        if (p.val < node.val && q.val < node.val) return this.lowestCommonAncestor(node.left, p, q);
        if (p.val > node.val && q.val > node.val) return this.lowestCommonAncestor(node.right, p, q);

        return node;
    }
}
