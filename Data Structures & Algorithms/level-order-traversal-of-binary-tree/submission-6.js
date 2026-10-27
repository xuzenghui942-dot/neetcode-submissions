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
        let res = [] // res : number[[]]
        if(!root) return res // empty ans
        const q = new Queue() // keep trace of diff laryer node
        q.push(root) // first in first out
        while(!q.isEmpty()){ // 当q不为空 q === empty 最后一层都便利完了
            let level = [] // 临时记录当前layer
            for(let i = q.size() ; i > 0 ; i--){
                let node = q.pop()
                if(node !== null){
                    level.push(node.val)
                    q.push(node.left)
                    q.push(node.right)
                }
            }
            res.push(level)
        }
        return res
    }
}
