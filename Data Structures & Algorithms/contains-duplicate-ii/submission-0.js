class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        for(let l = 0 ; l < nums.length ; l++){
            for(let r = l+1 ; r < Math.min(nums.length,l+k+1); r++){
                if(nums[l] === nums[r]){
                    return true;
                }
            }
        }
        return false;
    }
}
