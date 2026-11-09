class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = Array.from({length : m } , ()=>{
            return new Array(n).fill(-1)
        })
        // memo[r][c] 从(r,c)走到终点的路径数 
        function dfs(r,c){
            if(r >= m || c >= n ) return 0 // 越界
            if(r === m - 1 && c === n - 1 )return 1 
            // 找到了一条合法路径
            memo[r][c] = dfs(r+1,c) + dfs(r,c+1)
            // 当前格处罚 = 往下走的路径数 + 往右走的路径数
            return memo[r][c]
        }
        return dfs(0,0)
    }
}
