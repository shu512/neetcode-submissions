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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let length = 0;
        let cur = head;
        while(cur !== null) {
            cur = cur.next;
            length++;
        }

        if (length === n) return head.next;

        let count = 1;
        cur = head;
        while(count < length - n) {
            cur = cur.next;
            count++;
        }
        const toDelete = cur.next;
        cur.next = toDelete.next;
        toDelete.next = null;

        return head;
    }
}

