/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for(var i=0; i<nums.length; i++){
        map[nums[i]] = i;
    }
    for(var i=0;i<nums.length; i++){
        if(map[target-nums[i]]) return [i+1,map[target-nums[i]]+1];
    }
};