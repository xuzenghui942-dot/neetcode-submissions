class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        function dfs(i,flag){
            if(i === nums.length - 1) { // 
                return flag ? Math.max(0,nums[i]):nums[i]
            }
            if(flag){
                return Math.max(0,nums[i] + dfs(i+1,true))
            }
            return Math.max(
                dfs(i+1,false),
                nums[i] + dfs(i+1,true)
            )
        }
        return dfs(0,false)
    }
}