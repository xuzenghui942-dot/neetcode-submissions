class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = new Array(amount+1).fill(amount+1)
        dp[0] = 0 // amount = 5 dp = [0, 6, 6, 6, 6, 6]
        for(let i = 1 ; i <= amount ; i++){
            for(let j = 0 ; j < coins.length ; j++){
                if(coins[j] <= i) { // 硬币面值不能超过当前金额
                    dp[i] = Math.min(dp[i] , 1 + dp[i-coins[j]])
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount]
    }
}
