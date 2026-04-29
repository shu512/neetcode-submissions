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
        return this.dfs(root);
    }

    dfs(node) {
        if (!node) return 0;

        return 1+ Math.max(
            this.dfs(node.left),
            this.dfs(node.right)
        );
    }

    bfs(root) {
        if (!root) return 0;
        
        let depth = 0;
        const queue = [root];

        while(queue.length) {
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
        const stack = [[root, 1]];
        let res = 0;

        while(stack.length) {
            const [node, depth] = stack.pop();
            if (!node) continue;

            stack.push([node.left, depth + 1]);
            stack.push([node.right, depth + 1]);
            res = Math.max(res, depth);
        }

        return res;
    }
}
