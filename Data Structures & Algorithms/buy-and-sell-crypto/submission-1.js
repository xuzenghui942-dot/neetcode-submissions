class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxPrice = 0 
        let minBuy = prices[0]
        for(const num of prices){
            maxPrice = Math.max(num-minBuy,maxPrice)
            minBuy = Math.min(num,minBuy)
        }
        return maxPrice
    }
}
