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
        if (!root) return root;
        if (root.left) this.invertTree(root.left);
        if (root.right) this.invertTree(root.right);
        const tmp = root.left;
        root.left = root.right;
        root.right = tmp;
        return root;
    }

    // invert(node) {
    //     if (!node) return;
    //     this.invert(node.left);
    //     this.invert(node.right);
    //     const tmp = node.left;
    //     node.left = node.right;
    //     node.right = tmp;
    // }
}
