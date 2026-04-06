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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        const dummy = new ListNode();
        let cur = dummy;
        while(true) {
            let min = 999999999;
            let imin = -1;
            let flag = false;
            for (let i = 0; i < lists.length; i++) {
                if (lists[i]) flag = true;
                else continue;

                if (lists[i].val < min) {
                    min = lists[i].val;
                    imin = i;
                }
            }
            if (!flag) break;

            cur.next = new ListNode(lists[imin].val);
            cur = cur.next;
            lists[imin] = lists[imin].next;
        }

        return dummy.next;
    }
}
