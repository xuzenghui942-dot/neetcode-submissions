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
    zigzagLevelOrder(root) {
        // TODO: 在这里写你的解法
  const res = [];
  if (root === null) return res; // empty tree return []
  const queue = [root]; // init queue
  let head = 0;
  let leftToRight = true; //   0 l -> r , 1 r-> l
  while (head < queue.length) {
    const size = queue.length - head; // cur layer nodes
    const level = [];
    for (let i = 0; i < size; i++) {
      const node = queue[head++];
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (!leftToRight) level.reverse();
    res.push(level);
    leftToRight = !leftToRight;
  }
  return res;
    }
}
