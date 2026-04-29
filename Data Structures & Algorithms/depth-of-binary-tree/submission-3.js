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
    maxDepth(root) {
        return this.bfs(root);
    }

    dfs(node, depth = 1) {
        if (!node) return depth - 1;

        let lDepth = -1, rDepth = -1;
        if (node.left) lDepth = this.dfs(node.left, depth + 1);
        if (node.right) rDepth = this.dfs(node.right, depth + 1);

        return Math.max(lDepth, rDepth, depth);
    }

    bfs(root) {
        if (!root) return 0;
        
        let depth = 0;
        const queue = [root];

        while(queue.length > 0) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                const node = queue.shift();
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            depth++;
        }

        return depth;
    }

    iterativeDfs(root) {

    }
}
