class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        if(n === 0 ) {
            return 0 ; 
        }
        let preMax = new Array(n).fill(0);
        let sufMax = new Array(n).fill(0);
        preMax[0] = height[0];
        for(let i = 1 ; i < n ;i++){
            preMax[i] = Math.max  (preMax[i-1],height[i]);
        }
        sufMax[n-1] = height[n-1];
        for(let i = n - 2 ; i >=0 ; i--){
            sufMax[i] = Math.max(sufMax[i+1],height[i]);
        }
        let res = 0 ;
        for(let i = 0 ; i< n ; i++){
            res += Math.min(preMax[i],sufMax[i]) - height[i];
        }
        return res;
    }
}
