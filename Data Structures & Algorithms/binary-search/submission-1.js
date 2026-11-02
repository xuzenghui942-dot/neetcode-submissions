class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    binary_Search(l,r,nums,target){
        if(l>r) return -1
        let m = l + Math.floor((r-l) / 2)
        if(nums[m] === target) return m
        return nums[m] < target ? 
                    this.binary_Search(m+1,r,nums,length) 
                    : this.binary_Search(l,m-1,nums,target)
    }
    search(nums, target) {
        return this.binary_Search(0,nums.length-1,nums,target)
    }
}
