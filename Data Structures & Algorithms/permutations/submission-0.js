class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        if(nums.length === 0 ) return [[]]
        let perms= this.permute(nums.slice(1)) // 一只切下最前面一个
        let res = []
        for(let p of perms){
            for(let i = 0; i<=p.length;i++){
                let p_copy = p.slice()
                p.copy.splice(i,0,nums[0])
                res.push(p_copy)
            }
        }
    return res
    }
}
