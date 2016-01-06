/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return helper(nums, 0, nums.length-1);
};

var helper = function(nums, start, end){
    if(start>end) return null;
    //if(start===end) return new TreeNode(nums[start]);
  
        var mid = Math.floor((start+end)/2);
        var root = new TreeNode(nums[mid]);
        root.left = helper(nums,start, mid-1);
        root.right = helper(nums,mid+1, end);
        return root;
}