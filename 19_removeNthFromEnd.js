/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head || n===0) return null;
    var fakeHead = new ListNode(0);
    fakeHead.next = head;
    var p = fakeHead;
    var q = fakeHead;
    for(var i=0;i<n+1;i++){
        p = p.next;
    }
    while(p){
        p = p.next;
        q = q.next;
    }
    q.next = q.next.next;
    return fakeHead.next;
};