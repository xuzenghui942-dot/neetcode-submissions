class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const dp = []
        for(const x of nums){
            let l = 0 , r = dp.length
            while(l<r){
                const mid = (l+r) >> 1 
                if(dp[mid] < x){
                    l = mid+1
                }else{
                    r = mid
                }
            }
            dp[l] = x 
        }
         return dp.length;
    }
}
