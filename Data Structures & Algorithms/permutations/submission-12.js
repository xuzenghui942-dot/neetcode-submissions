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
            //  1:判断结束条件
            if(nums.length === path.length){
                res.push([...path])
                return 
            }
            //2:遍历选择
            for(let i = 0 ; i < nums.length; i++){
                if(used[i]) continue // 跳过已经使用的 1 节点往下就不能选1
                //3:处理节点
                path.push(nums[i])
                used[i] = true
                //4:递归
                dfs()
                //5:撤销处理(回溯题专属)
                path.pop()
                used[i] = false
            }
        }
        dfs()
        return res
    }
}
