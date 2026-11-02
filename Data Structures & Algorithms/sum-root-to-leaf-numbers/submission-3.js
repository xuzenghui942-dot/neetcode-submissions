class Solution {
    sumNumbers(root) {
        let sum = 0
        let path = ''

        function dfs(node) {
            if (!node) return

            path += node.val // 做选择

            if (!node.left && !node.right) {
                sum += Number(path)
            } else {
                dfs(node.left)
                dfs(node.right)
            }

            path = path.slice(0, -1) // 回溯
        }

        dfs(root)
        return sum
    }
}