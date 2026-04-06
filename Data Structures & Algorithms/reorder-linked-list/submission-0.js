/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let cur = head;
        let last = head;

        while(cur !== null) {
            last = this.getLast(cur);
            if (!last) break;

            last.next = cur.next;
            cur.next = last;

            cur = cur.next.next;
        }
    }

    getLast(node) {
        if (!node || !node.next) return null;

        let prev = node;
        let cur = node.next;
        while(cur.next !== null) {
            prev = cur;
            cur = cur.next;
        }
        prev.next = null;

        return cur;
    }
}
