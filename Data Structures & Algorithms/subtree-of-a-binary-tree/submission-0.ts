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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (!subRoot) return true;
        if (!root) return false;

        if (root.val === subRoot.val) {
            if (this.compare(root, subRoot)) return true;
        }

        if (this.isSubtree(root.left, subRoot)) return true;
        if (this.isSubtree(root.right, subRoot)) return true;

        return false;
    }

    compare(node: TreeNode | null, subNode: TreeNode | null): boolean {
        if (!node && !subNode) return true;
        if (!node || !subNode) return false;

        if (node.val !== subNode.val) return false;
        const left = this.compare(node.left, subNode.left);
        const right = this.compare(node.right, subNode.right);

        return left && right;
    }
}
