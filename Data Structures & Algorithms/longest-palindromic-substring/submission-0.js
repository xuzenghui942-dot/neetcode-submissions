class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resIndex = 0 
        let resLen = 0 // init index and length
        for(let i = 0; i < s.length;i++){
            let l = i , r = i // palindrome is odd string
            while(l>=0 && r<s.length && s.charAt(l) === s.charAt(r)){
                if((r-l+1) > resLen){
                    resIndex = l    // update start index
                    resLen = r-l+1 // update current longestPalindrome 
                }
                l--
                r++ // search from center
            }
            // finish odd length search even
            l = i , r = i+1 
            while(l>=0 && r<s.length && s.charAt(l) === s.charAt(r)){
                if((r-l+1) > resLen){
                    resIndex = l 
                    resLen = r - l + 1 
                }
                l--
                r++
            }
        }
        return s.slice(resIndex , resIndex + resLen)
    }
}
