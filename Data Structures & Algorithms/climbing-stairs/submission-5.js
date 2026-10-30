class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let one = 1 , two = 1 
        for(let i = 0 ;i < n-1 ; i++){
            let tmp = one 
            one = one + two 
            two = tmp
        }
        return one
    }
}
// class Solution {
//     /**
//      * @param {number} n
//      * @return {number}
//      */
//     climbStairs(n) {
//         // if( n<= 2) return n 
//         // let dp = new Array(n+1).fill(0)
//         // dp[1] = 1 
//         // dp[2] = 2
//         // for(let i = 3 ; i<= n ; i++){
//         //     dp[i] = dp[i-1] + dp[i-2] // i-1 -> = 1 i-2 -> i = 1 
//         //     // dp[1] = dp[i-1] + dp[i-2]
//         // }
//         // return dp[n]
//     }
// }
// class Solution {
//     /**
//      * @param {number} n
//      * @return {number}
//      */
//     climbStairs(n) {
//         // top -> bottom dp
//         const cache = new Int32Array(n).fill(-1)
//         function dfs(i){
//             if(i>=n) return i == n // return will auto trun into number
//             if(cache[i]!==-1) return cache[i]
//             return cache[i] = dfs(i+1) + dfs(i+2)
//         }
//         return dfs(0)
//     }
// }
