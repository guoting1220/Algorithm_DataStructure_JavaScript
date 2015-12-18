/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root===null) return true;
    return mirror(root.left, root.right);
};

var mirror =  function(p, q){
    if(p===null && q===null) return true;
    if(p===null || q===null) return false;
    return (mirror(p.left, q.right) && mirror(p.right, q.left) && p.val===q.val);
}