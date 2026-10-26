class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const charSet:Set<string> = new Set()
        let l = 0 
        let res = 0
        for(let r = 0 ; r<s.length ; r++){
            while(charSet.has(s[r])){
                charSet.delete(s[l]); // 删掉重复的先进set的
                l++
            }
            charSet.add(s[r])
            res = Math.max(res,r-l+1)
        } 
        return res
    }
}
