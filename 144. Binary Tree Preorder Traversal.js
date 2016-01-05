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
var preorderTraversal = function(root) {
    if(root===null) return [];
    var stack = [root];
    var result = [];
    var x;
    while(stack.length!==0){
        x = stack.pop();
        result.push(x.val);
        if(x.right) stack.push(x.right);
        if(x.left) stack.push(x.left);
    }
    return result;
};