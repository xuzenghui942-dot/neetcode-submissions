class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // 双指针 
        let k =0 ; 
        for(let i = 0 ; i < nums.length ; i++){
            if(nums[i]!==val){
                nums[k++] = nums[i];
            }
        }
        return k;
    }
}
