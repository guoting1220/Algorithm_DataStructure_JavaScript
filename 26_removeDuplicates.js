/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length===1) return 1;
    var index = 1;
    for(var i=1; i<nums.length; i++){
        if(nums[i]!==nums[index-1]){
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};