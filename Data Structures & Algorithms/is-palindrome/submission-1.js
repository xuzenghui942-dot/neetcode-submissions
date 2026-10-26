class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0 ; 
        let r = s.length -1 ;
        while(l<r){
            while(l<r && !this.alphaNum(s[l])){
                l++; // 左边遇到空格
            }
            while(r>l && !this.alphaNum(s[r])){
                r--;
            }
            if(s[l].toLowerCase() !== s[r].toLowerCase()){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
    alphaNum(c) { // 遇到空格就跳过
        return (c>='A' && c<="Z") || (c>="a" && c<="z") || (c>="0" && c<="9"); 
    }
}
