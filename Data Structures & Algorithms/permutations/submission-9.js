class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
    //     if(nums.length === 0 ) {return [[]]}
    //     let perms = this.permute(nums.slice(1))
    //     let res = []
    //     for(let p of perms){
    //         for(let i = 0 ; i <= p.length ; i++){
    //             let p_copy = p.slice()
    //             p_copy.splice(i,0,nums[0])
    //             res.push(p_copy)
    //         }
    //     }
    //     return res
    // }
    // let perms = [[]]
    // for(let num of nums){
    //     let new_perms = []
    //     for(let p of perms){
    //         for(let i = 0 ; i<= p.length ; i++){
    //             let p_copy = p.slice()
    //             p_copy.splice(i,0,num)
    //             new_perms.push(p_copy)
    //         }
    //     }
    //     perms = new_perms
    // }
    // return perms
    const res = [] // 存放最终结果
    const path = [] // 当前递归路径
    const used = new Array(nums.length).fill(false)
    function dfs(){
        if(path.length === nums.length){
            res.push([...path]) // 浅拷贝这个路径
            return
        }
        for(let i = 0 ; i < nums.length ; i++){
            if(used[i]) continue
            path.push(nums[i])
            used[i] = true

            dfs()

            path.pop()
            used[i]=false
        }
    }
    dfs()
    return res
  }
}