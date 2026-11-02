/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    sumNumbers(root) {
        const sum = 0 // initilize ans
        const path = ''
        function dfs(node){
            if(!node.left && !node.right) {
                sum += Number(path)
                path -= node.val
                return
            } 
            path = path + node.val
            dfs(node.left)
            path-= node.val
            dfs(node.right)
        }
        dfs(root)
        return sum
    }
}
