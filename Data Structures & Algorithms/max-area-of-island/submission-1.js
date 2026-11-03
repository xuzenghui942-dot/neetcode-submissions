class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length
        const COLS = grid[0].length
        let res = 0 

        const dfs = ( r , c ) => {
            if(r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] !== 1) {
                return 0  // 过界 or 不是陆地了
            }

            grid[r][c] = 2 // 标记 : 这格已经数过了
            return 1
                    + dfs(r+1,c)
                    + dfs(r-1,c)
                    + dfs(r,c+1)
                    + dfs(r,c-1)
        } // s = 自己1格 + 4个邻居各自能数到的格数

        for(let r = 0 ; r < ROWS ; r ++ ){
            for(let c = 0 ; c < COLS ; c ++ ) {
                if(grid[r][c] === 1 ){
                    // 发现了一个没有扫描过的岛屿
                    res = Math.max(res,dfs(r,c))
                }
            }
        }
        return res
    }
}
