//recursion
var minDepth = function(root) {
    if(root===null) return 0;
 // if root.left==null || root.right==null, can not return 1, because need down to a leaf, root is not a  leaf
 //   if(root.left===null && root.right===null) return 1;
    if(root.left===null) return minDepth(root.right)+1;
    if(root.right===null) return minDepth(root.left)+1;
    return Math.min(minDepth(root.left),minDepth(root.right))+1;
};

//iteration
var minDepth = function(root) {
    if(root===null) return 0;
    var cur = [root];
    var curCopy;
    var h = 0;
    while(cur.length!==0){
        h++;
        curCopy = cur;
        cur = [];
        for(var i=0; i<curCopy.length; i++){
            if(curCopy[i].left===null && curCopy[i].right===null) return h;
            if(curCopy[i].left!==null) cur.push(curCopy[i].left);
            if(curCopy[i].right!==null) cur.push(curCopy[i].right);
        }
    }
};
