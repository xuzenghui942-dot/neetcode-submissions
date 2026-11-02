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
        let sum = 0 // initilize ans
        let path = ''
        function dfs(node){
            if(!node) return
            path = path + node.val
            if(!node.left && !node.rigth){
                sum+= Number(path)
            }else{
                dfs(node.left)
                dfs(node.right)
            }
            path.slice(0,-1)
        }
        dfs(root)
        return sum
    }
}
