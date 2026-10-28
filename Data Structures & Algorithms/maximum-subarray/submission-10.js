class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        const n = nums.length
        const dp = new Array(n).fill(null).map(()=> [0,0]) // 初始化dp
        dp[n-1][1] = nums[n-1] // 必须以 i 为起点的最大子数组和
        dp[n-1][0] = nums[n-1] // 起点可以在 i 或它后面的最大子数组和
        for(let i = n - 2 ; i >= 0 ; i--){
            dp[i][1] = Math.max(
                nums[i], // 本身最大
                nums[i] + dp[i+1][1] // 后的那个i+1点的最大子数组和大于1
            )
            dp[i][0] = Math.max(
                dp[i][1],
                dp[i+1][0]
            )
        }
        return dp[0][0]
    }
}
