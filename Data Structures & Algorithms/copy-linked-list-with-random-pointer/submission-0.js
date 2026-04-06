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
        let prev2 = null;
        while (cur !== null) {
            console.log(cur);
            const newNode = new Node(cur.val);
            if (prev2) prev2.next = newNode;
            if (!head2) head2 = newNode;
            store.set(cur, newNode)

            cur = cur.next;
            prev2 = newNode;
        }

console.log(222222);
        cur = head;
        while (cur !== null) {
            const copy = store.get(cur);
            if (cur.random)
                copy.random = store.get(cur.random);
            cur = cur.next;
        }

        return head2;
    }
}
