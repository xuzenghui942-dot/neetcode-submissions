class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const minHeap = new MinPriorityQueue() // 创建最小堆
        for(let num of nums){
            minHeap.push(num) // push(num)
            if(minHeap.size() > k){
                minHeap.pop()
            }
        }
        return minHeap.front()
    }
}
// class Solution {
//     /**
//      * @param {number[]} nums
//      * @param {number} k
//      * @return {number}
//      */
//     findKthLargest(nums, k) {
//         nums.sort((a,b)=> a-b)
//         return nums[nums.length-k]
//     }
// }
