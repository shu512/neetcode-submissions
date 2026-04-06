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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let cur = head;
        const dummy = new ListNode();
        let prevBatch = dummy;

        while(true) {
            const res = this.getNextBatch(cur, k);
            if (!res) return dummy.next;
            res.startBatch.next = this.reverseBatch(res.startBatch, res.nextBatch, prevBatch);
            cur = res.nextBatch;
            prevBatch = res.startBatch;
        }
    }

    getNextBatch(head, k) {
        let cur = head;
        let count = 0;
        let startBatch = head;
        while(cur && count < k) {
            cur = cur.next;
            count++;
        }
        if (count !== k) return null;

        return { startBatch, nextBatch: cur };
    }

    reverseBatch(startBatch, nextBatch, prevBatch) {
        let cur = startBatch;
        let prev = null;
        while(cur !== nextBatch) {
            const next = cur.next;

            cur.next = prev;
            prev = cur;
            cur = next;
        }

        if (prevBatch) prevBatch.next = prev;
        return nextBatch;
    }
}
