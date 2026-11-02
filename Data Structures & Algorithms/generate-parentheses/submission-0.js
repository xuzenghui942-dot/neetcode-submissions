class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const stack = []
        const res = []
        function dfs(openN , closeN){
            // 终止condition : 左右括号都用完了
            if(openN === n &&  closeN === n ){
                res.push(stack.join("")) // turn to string
                return
            }
            if(openN < n) {
                stack.push("(")
                dfs(openN + 1 , closeN)
                stack.pop() // 回溯 撤销选择
            }
            if(closeN < openN){
                stack.push(")")
                dfs(openN , closeN + 1)
                stack.pop()
            }
        }
        dfs(0,0)
        return res
    }
}