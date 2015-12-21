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
var levelOrder = function(root) {
    if(root===null) return [];
    var levelNodes = [root];
    var levelNodesCopy;
    var levelVal = [];
    var result = [];
    while(levelNodes.length!==0){  //!!!!!!!!!!
        levelNodesCopy = levelNodes;
        levelNodes = [];
        for(var i=0; i<levelNodesCopy.length; i++){
            levelVal.push(levelNodesCopy[i].val);
            if(levelNodesCopy[i].left!==null) levelNodes.push(levelNodesCopy[i].left);
            if(levelNodesCopy[i].right!==null) levelNodes.push(levelNodesCopy[i].right);
        }
        result.push(levelVal);
        levelVal = [];
    }
    return result;
};