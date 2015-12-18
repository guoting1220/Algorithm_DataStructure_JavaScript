/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var result = [];
    if(root===null) return result;
    var eachlevelVal = []; 
    var eachlevelNode = [root]; 
    var eachlevelNodeCopy = [];
    while(eachlevelNode.length!==0){
        eachlevelNodeCopy = eachlevelNode;
        eachlevelNode = [];
        for(var i=0; i<eachlevelNodeCopy.length; i++){
            eachlevelVal.push(eachlevelNodeCopy[i].val);
            if(eachlevelNodeCopy[i].left) eachlevelNode.push(eachlevelNodeCopy[i].left);
            if(eachlevelNodeCopy[i].right) eachlevelNode.push(eachlevelNodeCopy[i].right);
        }
        result.unshift(eachlevelVal);
        eachlevelVal = [];
    }
    return result;
};