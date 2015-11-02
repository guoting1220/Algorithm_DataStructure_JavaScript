/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    var fakeHead = new ListNode(0);
    fakeHead.next = head;
    var pre = fakeHead;
    var p1 = head;
    var p2 = null;
    var p3 = null;
    while(p1 && p1.next){
        p2 = p1.next;
        p3 = p2.next;
        pre.next = p2;
        p2.next = p1;
        p1.next = p3;
        pre = p1;
        p1 = p3;
    }
    return fakeHead.next;
};