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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [] 
        function dfs(node,depth){
            if(!node) return
            if(!res[depth]){
                res[depth] = [] // 第某层初始化
            }
            res[depth].push(node.val)
            for(let n of [node.left,node.right]){
                dfs(n,depth+1)
            }
        }
        dfs(root,0)
        return res
    }
}
