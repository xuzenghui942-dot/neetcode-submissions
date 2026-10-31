class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const res = []
        const m = matrix.length // matrix height
        const n = matrix[0].length // matrix width
        function dfs(top, bottom , left , right){
            //end condition
            if(top>bottom || left > right) return
            // for loop
            for(let j = left ; j <= right ; j++){
                res.push(matrix[top][j]) // top line from left 2 right
            }
            for(let i =top+1 ; i <=bottom ; i++){
                res.push(matrix[i][right])
            }
            if(top < bottom) {
                for(let j = right -1 ; j>=left ; j--){
                    res.push(matrix[bottom][j])
                }
            }
            if(left < right){
                for(let i = bottom - 1 ; i > top ; i--){
                    res.push(matrix[i][left])
                }
            }
            dfs(top+1,bottom-1,left+1,right-1)
        }
        dfs(0,m-1,0,n-1)
        return res
    }
}
