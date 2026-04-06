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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode();
        let prev = dummy;
        let fromPrev = 0;

        while(l1 || l2 || fromPrev) {
            const v1 = l1 ? l1.val : 0;
            const v2 = l2 ? l2.val : 0;
            
            const sum = Number(v1) + Number(v2) + fromPrev;
            fromPrev = Math.trunc(sum / 10);

            prev.next = new ListNode(sum % 10);

            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
            prev = prev.next;
        }

        return dummy.next;
    }
}
