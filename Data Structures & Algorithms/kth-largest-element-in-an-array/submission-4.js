class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const target = nums.length - k 
        function quickSelect(l,r){
            const pivot = nums[r] // random quickSelect
            let p = l 
            for(let i = l ; i < r ; i++){// for loop
                if(nums[i] <= pivot){
                    [nums[i],nums[p]] = [nums[p],nums[i]]
                    p++
                }
            }
            [nums[p],nums[r]] = [nums[r],nums[p]]
            if( p === target) return nums[p]
            if(p>target) return quickSelect(l,p-1)
            return quickSelect(p+1,r)
        }
        return quickSelect(0,nums.length -1)
    }
}
