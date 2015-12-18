/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var result = 0;
    var cur = [root];
    var curCopy = cur;
    while(cur.length!==0){
        result++;
        curCopy = cur;
        cur = [];
    }
};