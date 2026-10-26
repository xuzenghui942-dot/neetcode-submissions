class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let last = m + n -1 // the last pointer
        let p1 = m - 1 , p2 = n - 1 
        while(p1>=0 && p2>=0){
            if(nums1[p1] > nums2[p2]){
                nums1[last] = nums1[p1]
                last--
                p1--
            }else{
                nums1[last] = nums2[p2]
                last--
                p2--
            }
        }
        while(p2>=0){
            nums1[last]=nums2[p2]
            last--
            p2--
        }
    }
}
