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
        if (!node) return null;

        const left = this.isAncestor(node.left, p, q);
        const right = this.isAncestor(node.right, p, q);
        if (!left && !right) return node;

        return this.lowestCommonAncestor(left ? node.left : node.right, p, q);
    }

    isAncestor(
        node: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {
        const found = this.findNodes(node, p, q);

        return found[0] && found[1];
    }

    findNodes(
        node: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
        pFound = false,
        qFound = false,
    ) {
        if (!node) return [pFound, qFound];
    
        if (node.val === p.val) pFound = true;
        if (node.val === q.val) qFound = true;

        const left = this.findNodes(node.left, p, q, pFound, qFound);
        const right = this.findNodes(node.right, p, q, pFound, qFound);
        return [left[0] || right[0], left[1] || right[1]];
    }
}
