class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        function dfs(i , flag){
            if(i === nums.length - 1) {
                return flag ? Math.max(0,nums[i]) : nums[i]
            }
            if(flag){
                return Math.max(
                    0, // 不接 子数组在 i - 1 结束
                    nums[i] + dfs(i+1,true) // 接上 i 在决定后面接多长
                )
            }
            return Math.max(dfs(i+1,false) , nums[i] + dfs(i+1,true))
        }
        return dfs(0,false)
    }
}
