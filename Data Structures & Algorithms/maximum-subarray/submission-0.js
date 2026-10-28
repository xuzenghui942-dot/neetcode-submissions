class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let n = nums.length , res = nums[0]
        for(let i = 0 ; i < n ; i++){
            let cur = 0 
            for(let j = i ; j < n ; j++){
                cur +=nums[j]
                res = Math.mac(res,cur)
            }
        }
        return res
    }
}
