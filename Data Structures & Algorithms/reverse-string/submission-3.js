class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    /**
     * 一头一个指针
     * 同时向中间逼近
     * 每次处理一对元素
     * 标准的 "左右对撞型双指针"
     */
    reverseString(s) {
       let left = 0 ; 
       let right = s.length - 1; 
       while(left < right){
        [s[left] , s[right]] = [s[right] , s[left]];
        left ++ ; 
        right -- ;
       }
    }
}
/**
 * 这题要求原地反转字符数组，所以我用左右双指针。
left 从头开始，right 从尾开始，每次交换两个位置的字符，
交换后 left++, right--，直到 left >= right。
这样每个字符最多被交换一次，时间复杂度 O(n)，额外空间 O(1)。
 */
