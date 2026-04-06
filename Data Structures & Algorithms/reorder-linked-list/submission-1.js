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
        if (!head) return head;
        let slow = head;
        let fast = head.next;
        while(fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let head2 = slow.next;
        slow.next = null;
        let prev = null;
        let cur2 = head2;
        let next2;
        while(cur2 !== null) {
            next2 = cur2.next;
            cur2.next = prev;
            prev = cur2;
            cur2 = next2;
        }
        head2 = prev;

        let cur = head;
        cur2 = head2;
        while(cur !== null && cur2 !== null) {
            next2 = cur2.next;
            cur2.next = cur.next;
            cur.next = cur2;

            cur = cur.next.next;
            cur2 = next2;
        }

    }

}
