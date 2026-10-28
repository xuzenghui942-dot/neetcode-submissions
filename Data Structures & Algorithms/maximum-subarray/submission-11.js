class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        const n = nums.length // get nums length
        const dp = new Array(n).fill(null).map(()=> [0,0])
        // init dp[ 0 -> n-1 ][0,0]
        dp[n-1][1] = nums[n-1]
        dp[n-1][0] = nums[n-1]
        for(let i = n-2 ; i>=0 ; i++){
            dp[i][1] = Math.max(nums[i],nums[i]+dp[i+1][1])
            dp[i][0] = Math.max(dp[i][1],dp[i+1][0])
        }
        return dp[0][0]
    }
}
