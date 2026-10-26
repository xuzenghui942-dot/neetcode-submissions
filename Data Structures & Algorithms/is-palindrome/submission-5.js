class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    alphaNum(c){
        return(
            (c>="A" && c<="Z") || 
            (c>="a" && c<="z") ||
            (c>="0" && c<="9")
        )
    }
    isPalindrome(s) {
        let l = 0 ; 
        let r = s.length -1  ;
        while( l< r) {
            while(l < r && !this.alphaNum(s[l])) l ++ ;
            while(l < r && !this.alphaNum(s[r])) r -- ;
            // 跳过空格等特殊字符
            if(s[l].toLowerCase() !== s[r].toLowerCase()){
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
    /**
     * 我把是否为字母数字抽象成为了辅助函数 这样主逻辑更清楚
     * 主循环里先让左右指针跳过无效字符 再比较忽略大小写后的字符
     * 如果不相等就返回false 相等就继续向中间收缩
     */
}
