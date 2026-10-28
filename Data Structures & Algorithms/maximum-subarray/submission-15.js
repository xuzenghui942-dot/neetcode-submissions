class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSub = nums[0], curSum = 0
        for(const num of nums){
            if(curSum < 0){
                curSum = 0
            }
            curSum += num
            maxSub = Math.max(maxSub,curSum)
        }
        return maxSub
    }
}
// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number}
//      */
//     maxSubArray(nums) {
//         // dp[i]:必须以 nums[i] 结尾的最大连续子数组和
//         let dp = [...nums] // 把nums 每个位置填进去
//         for(let i = 1 ; i < nums.length ; i ++){
//             dp[i] = Math.max(nums[i],nums[i]+dp[i-1]) // 只保留dp[i]=nums[i]这个结尾 or 替换成 这个结尾 + 以上个为结尾的最大子数组和
//         }
//         return Math.max(...dp)
//     }
// }



// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number}
//      */
//     maxSubArray(nums) {
//         const n = nums.length // get nums length
//         const dp = new Array(n).fill(null).map(()=> [0,0])
//         // init dp[ 0 -> n-1 ][0,0]
//         dp[n-1][1] = nums[n-1]
//         dp[n-1][0] = nums[n-1]
//         for(let i = n-2 ; i>=0 ; i--){
//             dp[i][1] = Math.max(nums[i],nums[i]+dp[i+1][1])
//             dp[i][0] = Math.max(dp[i][1],dp[i+1][0])
//         }
//         return dp[0][0]
//     }
// }
