/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result=[];
    nums.sort(function(a,b){return a-b; });  //!!!!!!!!!!!!!!!sort the numbers!!!
    var left = 0;
    var right = 0;
    for(var i=0; i<nums.length-2; i++){
        if(i===0 || nums[i]!==nums[i-1]){  //avoid duplicate, the first element is distinct
            left = i+1;
            right = nums.length-1;
            while(left<right){
                if(nums[left]+nums[right]===-nums[i]) {
                    result.push([nums[i], nums[left],nums[right]]);
                    left++;
                    right--;
                    while(left<=nums.length-1 && nums[left]===nums[left-1]) left++;
                }
                else if(nums[left]+nums[right]<-nums[i]) left++;
                else if(nums[left]+nums[right]>-nums[i]) right--;
            }
        }
    }
    return result;
}