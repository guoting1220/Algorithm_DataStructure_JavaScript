 /*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    var fakeHead = new ListNode(Math.MIN_VALUE);
    var n = fakeHead;
    while(l1 || l2){
        if(!l2 || (l1 && l1.val<=l2.val)){  //!!!!!!
            n.next = l1;
            l1 = l1.next;
            n = n.next;
        }
        else if(!l1 || (l2 && l1.val>l2.val)){
            n.next = l2;
            l2 = l2.next;
            n = n.next;
        }
    }
    return fakeHead.next;
};