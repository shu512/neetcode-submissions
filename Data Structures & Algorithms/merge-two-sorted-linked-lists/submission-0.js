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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let head;
        let cur1 = list1;
        let cur2 = list2;

        if (!list1) return list2;
        if (!list2) return list1;

        if (list1.val > list2.val) {
            head = cur2;
            cur2 = cur2.next;
        } else {
            head = cur1;
            cur1 = cur1.next;
        }
        let cur = head;

        while(cur1 && cur2) {
            if (cur1.val < cur2.val) {
                cur.next = cur1;
                cur1 = cur1.next;
            }
            else {
                cur.next = cur2;
                cur2 = cur2.next;
            }

            cur = cur.next;
        }

        if (!cur1) cur.next = cur2;
        else cur.next = cur1;
        return head;
    }
}
