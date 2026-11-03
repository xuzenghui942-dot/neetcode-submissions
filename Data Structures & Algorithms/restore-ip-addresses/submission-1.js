class Solution {
    /**
     * @param {string} s
     * @return {string[]}
     */
    restoreIpAddresses(s) {
        const res = []
        // 4 段最多 4 X 3 = 12 
        if(s.length > 12) return res 
        // TODO:回溯
        function dfs(i,dots,curIP){
            // 终止条件 4个点 分完了
            if(dots === 4 && i === s.length) {
                res.push(curIP.slice(0,-1)) // 去掉最后一个点
                return
            }
            if(dots > 4) return // 12位 前三个点太密集 用了超过4个点
            for(let j = i ; j < Math.min(i+3 , s.length) ; j++){
                const part = s.slice(i,j+1) // slice不包含结束下标
                if(Number(part) < 256 && (i === j || s[i] !== '0')){
                    dfs(j+1 , dots+1 , curIP + part + '.')
                }
            }
        }
        dfs(0,0,'')
        return res 
    }
}
