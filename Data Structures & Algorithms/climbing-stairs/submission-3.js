class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // top -> bottom dp
        const cache = new Int32Array(n).fill(-1)
        function dfs(i){
            if(i>=n) return i == n // return will auto trun into number
            if(cache[i]!==-1) return cache[i]
            return cache[i] = dfs(i+1) + dfs(i+2)
        }
        return dfs(0)
    }
}
