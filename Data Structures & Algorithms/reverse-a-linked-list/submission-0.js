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
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) return null;

        let prev = head;
        let cur = head.next;
        if (!cur) return prev;

        let next = head.next.next;
        head.next = null;

        while(cur != null) {
            cur.next = prev;
            prev = cur;
            cur = next;
            if (next) next = next.next;
        }
        const newHead = prev;
        return newHead;
    }
}
