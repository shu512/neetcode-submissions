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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        if (!root) return [];
        const res = [];
        const queue = [root];

        while(queue.length > 0) {
            const n = queue.length;
            const stack = [];
            for (let i = 0; i < n; i++) {
                const node = queue.shift();
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
                stack.push(node);
            }

            res.push(stack.pop().val);
        }



        return res;
    }
}
