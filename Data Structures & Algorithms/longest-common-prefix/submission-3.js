class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        for(let i = 0 ; i < strs[0].length;i++){
            for(let s of strs){
                if(i === s.length || s[i] !== strs[0][i]){
                    return s.slice(0,i);
                    // 只会触发一次 就是某个字符串在扫描第i个的时候不一样 然后直接返回
                }
            }
        }
        return strs[0];
    }
}
