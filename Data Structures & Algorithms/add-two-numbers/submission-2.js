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
        let cur1 = l1;
        let cur2 = l2;
        let l3 = null;
        let cur3 = null;
        let fromPrev = 0;

        while(cur1 && cur2) {
            const sum = Number(cur1.val) + Number(cur2.val) + fromPrev;
            let val;
            if (sum > 9) {
                val = Number(sum.toString()[1]);
                fromPrev = 1;
            }
            else {
                val = sum;
                fromPrev = 0;
            }
            const newNode = new ListNode(val);
            if (!l3) l3 = newNode;
            if (cur3) cur3.next = newNode;

            cur1 = cur1.next;
            cur2 = cur2.next;
            if (cur3) cur3 = cur3.next;
            else cur3 = l3;
        }

        let curLeft = cur1 || cur2;
        while(curLeft) {
            const sum = Number(curLeft.val) + fromPrev;
            let val;
            if (sum > 9) {
                val = Number(sum.toString()[1]);
                fromPrev = 1;
            }
            else {
                val = sum;
                fromPrev = 0;
            }
            const newNode = new ListNode(val);
            cur3.next = newNode;

            curLeft = curLeft.next;
            cur3 = cur3.next;
        }

        if (fromPrev) {
            const newNode = new ListNode(fromPrev);
            cur3.next = newNode;
        }

        return l3;
    }
}
