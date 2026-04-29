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
     * @return {TreeNode}
     */
    invertTree(root) {
        this.invert(root);
        return root;
    }

    invert(node) {
        if (!node) return;
        const tmp = node.left;
        node.left = node.right;
        node.right = tmp;
        this.invert(node.left);
        this.invert(node.right);
    }
}
