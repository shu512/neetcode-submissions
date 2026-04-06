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
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head) return false;

        let cur = head;
        let cur2 = head.next; 
        let count = 0;
        let COUNT_LIMIT = 5000;
        while(count < COUNT_LIMIT && cur != cur2 && cur2 != null && cur2.next != null) {
            cur = cur.next;
            cur2 = cur2.next.next;

            count++;
        }

        return cur === cur2;
    }
}
