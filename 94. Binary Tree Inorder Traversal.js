/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root) return [];
    var n = root;
    var stack = [];
    var result = [];
    while(n!==null || stack.length!==0){
        if(n===null){
            n = stack.pop();
            result.push(n.val);
            n = n.right;
        }
        else{
            stack.push(n);
            n = n.left;
        }
    }
    return result;
};