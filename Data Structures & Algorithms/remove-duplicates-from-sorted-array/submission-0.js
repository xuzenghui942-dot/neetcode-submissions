class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let slow = 0 ; 
        let fast = 1 ; 
        while(fast < nums.length){
            if(nums[slow]!==nums[fast]){
                nums[++slow] = nums[fast];
            }
            fast++;
        }
        return slow+1;
    }
}
