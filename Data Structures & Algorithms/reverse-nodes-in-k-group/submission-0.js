/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0,head)
        let groupPrev = dummy
        // dummy是额外添加的辅助节点 它的 next 指向原来的head
        while(true){
            const kth = this.getKth(groupPrev,k)
            if(!kth) break // 节点不足 结束 reverseKGroup
            const groupNext = kth.next // 记住下一组的起点
            let prev = kth.next // 第一个反转后接它
            let curr = groupPrev.next
            while(curr !== groupNext){
                const tmp = curr.next
                curr.next = prev
                prev = curr 
                curr = tmp 
            }
            const tmp = groupPrev.next // 原来的头节点 现在是组尾
            groupPrev.next = kth // dummy 指向新的组头
            groupPrev = tmp
        }
        return dummy.next
    }
    // getKth
    getKth(curr,k){
        while(curr && k > 0){
            curr = curr.next 
            k-- 
        }
        return curr
    }
}
