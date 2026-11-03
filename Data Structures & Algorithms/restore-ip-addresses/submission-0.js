class Solution {
    /**
     * @param {string} s
     * @return {string[]}
     */
    restoreIpAddresses(s) {
        const res = []
        if(s.length > 12) return res // 超过12位就不可能组成合法ip
        const backtrack = (i,dots,curIP) => {
            if(dots === 4 && i === s.length){
                res.push(curIP.slice(0,-1)) // 去掉尾部多余的点
                return
            }
            if(dots > 4 ) return // 超过4个点 就不肯呢个合法
            for(let  j = i ; j < Math.min(i+3 , s.length) ; j++){
                const part = s.slice(i,j+1) 
                if(Number(part) < 256 && (i === j || s[i] !== '0')){
                    backtrack(j+1,dots+1,curIP+ part+'.')
                }
            }
        }
    backtrack(0,0,'')
    return res
    }
}
