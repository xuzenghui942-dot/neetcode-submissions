class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0 ; 
        let r = s.length -1 ; 
        while(l < r) {
            if(s[l] === s[r]){
                l++;
                r--;
            }else{
                return this.isPal(s,l+1,r) || this.isPal(s,l,r-1);
                // 去左边看 是不是回文 (第一次遇到之后删左边的情况) 去右边
                // 看 右边是不是回文(第一次遇到之后删右边的情况) 
            }
        }
        return true;
    }
    isPal(s,l,r){
        while(l<r){
            if(s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
