class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = []
        const path = [] 
        const used = new Array(nums.length).fill(false)
        function dfs(){
            if(nums.length === path.length){
                res.push([...path])
                return 
            }
            for(let i = 0 ; i < nums.length; i++){
                if(used[i]) continue // 跳过已经使用的 1 节点往下就不能选1
                path.push(nums[i])
                used[i] = true
                dfs()
                path.pop()
                used[i] = false
            }
        }
        dfs()
        return res
    }
}
