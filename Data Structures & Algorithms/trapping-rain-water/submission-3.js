class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0 ; 
        let r = height.length - 1 ; 
        let leftMax = height[l];
        let rightMax = height[r];
        let res = 0 ;
        while(l < r){
            /**
             * 对于位置 l 来说 
             * 左边最高是leftMax 
             * 右边至少有一个 height[r] 挡着
             * 而且当前height[r] 比 height[l]高
             */
            if(leftMax < rightMax){
                l++;
                leftMax = Math.max(leftMax,height[l]);
                res += leftMax - height[l];
            }else{
                r--;
                rightMax = Math.max(rightMax, height[r]);
                res += rightMax - height[r];
            }
        }
        return res;
    }
}
