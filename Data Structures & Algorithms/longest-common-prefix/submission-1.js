class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // if(!strs.length) return "";
        // // 边界处理 如果数组为空 直接返回空字符串
        // let res = "";
        // for(let i = 0 ; i< strs[0].length;i++){
        //     // 遍历每一个字符串
        //     // 取得第i个字谜
        //     for(let s of strs){
        //         // s 取得剩下的字符串
        //         if(i === s.length || s[i] !== strs[0][i]){
        //          // 如果有一个字符串的第i个字母匹配不上 说明以及是最长的了
        //             return res;
        //         }
        //     }
        //     res += s[0][i];
        // }
        // return res;
        let prefix = strs[0];
        for(let i = 0 ; i< strs.length;i++){
            let j = 0 ;
            while( j< Math.min(prefix.length,strs[i].length)){
                if(prefix[j] !== strs[i][j]){
                    break;
                }
                j++;
            }
            prefix = prefix.slice(0,j);
        }
        return prefix;
    }
}
