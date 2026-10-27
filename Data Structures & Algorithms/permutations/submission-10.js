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
            //终止条件
            if(path.length === nums.length){
                res.push([...path]) // 浅拷贝push
                return // 返回
            }
            // 循环便利
            for(let i = 0 ; i < nums.length ; i++){
                if(used[i]) continue
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
