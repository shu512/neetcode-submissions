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
        const res = [];
        const queue = [root];

        while(queue.length > 0) {
            const n = queue.length;
            let theRighest = null;
            for (let i = 0; i < n; i++) {
                const node = queue.shift();
                if (!node) continue;
                queue.push(node.left);
                queue.push(node.right);
                theRighest = node;
            }

            if (theRighest) res.push(theRighest.val);
        }

        return res;
    }
}
