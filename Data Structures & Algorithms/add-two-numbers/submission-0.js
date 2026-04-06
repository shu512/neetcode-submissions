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
        const sum = this.getNumber(l1) + this.getNumber(l2);
        const sumStr = sum.toString().split('').reverse().join('');

        const newHead = new ListNode(Number(sumStr[0]));
        let prev = newHead;
        let count = 1;
        while(count < sumStr.length) {
            prev.next = new ListNode(Number(sumStr[count]));
            prev = prev.next;
            count++;
        }

        return newHead;
    }

    getNumber(head) {
        let str = '';
        let cur = head;
        while (cur !== null) {
            str += cur.val;
            cur = cur.next;
        }

        return Number(str.split('').reverse().join(''));
    }
}
