/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root===null) return root;
    if(root.left===null && root.right===null) return root;
    var cur = [root];
    var curCopt= [];
    var tmp = null;
    while(cur.length!==0){
        curCopy = cur;
        cur = [];
        for(var i=0; i<curCopy.length; i++){
            tmp = curCopy[i].left;
            curCopy[i].left = curCopy[i].right;
            curCopy[i].right = tmp;
            if(curCopy[i].left) cur.push(curCopy[i].left);
            if(curCopy[i].right) cur.push(curCopy[i].right);
        }
    }
    return root;
};