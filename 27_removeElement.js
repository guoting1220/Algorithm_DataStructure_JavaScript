/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(!nums||nums.length===0) return 0;
    var i = 0;
    while(i<nums.length){
        if(nums[i]===val) nums.splice(i,1);
        else i++;  // need else !!!!!!!!!!
    }
    return nums.length;
};