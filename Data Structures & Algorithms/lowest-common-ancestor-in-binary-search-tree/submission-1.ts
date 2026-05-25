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
        const pFound = this.findNode(node, p);
        const qFound = this.findNode(node, q);

        return pFound && qFound;
    }

    findNode(
        node: TreeNode | null,
        seek: TreeNode | null,
    ) {
        if (!node) return false;
    
        if (node.val === seek.val) return true;

        return this.findNode(node.left, seek) || this.findNode(node.right, seek);
    }
}
