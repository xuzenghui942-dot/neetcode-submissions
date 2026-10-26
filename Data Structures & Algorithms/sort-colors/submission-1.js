class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    // 荷兰国旗 三指针发
    sortColors(nums) {
        // 初始化三个指针
        let i = 0 ; 
        let l = 0 ;
        let r = nums.length -1 ;
        while ( i<= r){
            if(nums[i] === 0 ){
                [nums[l],nums[i]] = [nums[i],nums[l]];
                l++; // 左边是0
            } else if (nums[i] === 2 ){
                [nums[i],nums[r]] = [nums[r],nums[i]];
                r-- ;
                i-- ;// 右边是 r
            }
            i++ ;  // i一直在往前走
        }
    }
}
