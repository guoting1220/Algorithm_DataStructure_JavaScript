/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root===null) return [];
    var cur = [root];
    var copyCur = [];
    var result = [];
    root.val = root.val.toString();
    while(cur.length!==0){
        copyCur = cur;
        cur = [];
        for(var i=0; i<copyCur.length; i++){
            if(copyCur[i].left!==null){
                copyCur[i].left.val = copyCur[i].val + "->" + copyCur[i].left.val;
                cur.push(copyCur[i].left);
            }
            if(copyCur[i].right!==null){
                copyCur[i].right.val = copyCur[i].val + "->" + copyCur[i].right.val;
                cur.push(copyCur[i].right);
            }
            if(copyCur[i].right===null && copyCur[i].left===null)
                result.push(copyCur[i].val);
        }
    }
    return result;
};