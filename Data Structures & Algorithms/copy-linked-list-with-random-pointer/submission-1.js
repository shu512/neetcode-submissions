// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let head2 = null;
        const store = new Map();

        let cur = head;
        while (cur !== null) {
            const newNode = new Node(cur.val);
            if (!head2) head2 = newNode;
            store.set(cur, newNode)

            cur = cur.next;
        }

        cur = head;
        while (cur !== null) {
            const copy = store.get(cur);
            if (cur.next) copy.next = store.get(cur.next)
            if (cur.random) copy.random = store.get(cur.random);
            cur = cur.next;
        }

        return head2;
    }
}
