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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root: TreeNode | null): string {
        const delim = ',';
        const res = [];
        if (!root) return 'null';
        const q = [root];

        while(q.length) {
            const length = q.length;
            for (let i = 0; i < length; i++) {
                const node = q.shift();
                if (node) {
                    q.push(node.left);
                    q.push(node.right);
                }
                
                res.push(String(node?.val || null));
            }
        }

        return res.join(delim);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        const arr = data.split(',');

        const first = arr.shift();
        if (first === 'null') return null;
        const root = new TreeNode(Number(first));
        const q = [root];

        while(q.length) {
            const node = q.shift();
            const left = arr.shift();
            const right = arr.shift();
            if (left === 'null') {
                node.left = null;
            } else {
                node.left = new TreeNode(Number(left));
                q.push(node.left);
            }
            if (right === 'null') {
                node.right = null;
            } else {
                node.right = new TreeNode(Number(right));
                q.push(node.right);
            }
        }

        return root;
    }
}
