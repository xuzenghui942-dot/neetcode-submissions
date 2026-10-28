class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        const n = nums.length;

        // null 表示这个状态还没计算过
        const memo = Array.from(
            { length: n },
            () => [null, null]
        );

        function dfs(i, flag) {
            if (i === n - 1) {
                return flag
                    ? Math.max(0, nums[i])
                    : nums[i];
            }

            // 把布尔值转换成数组下标
            const state = flag ? 1 : 0;

            // 算过了，直接返回缓存
            if (memo[i][state] !== null) {
                return memo[i][state];
            }

            // 没算过，按原来的递归规则计算并保存
            if (flag) {
                memo[i][state] = Math.max(
                    0,
                    nums[i] + dfs(i + 1, true)
                );
            } else {
                memo[i][state] = Math.max(
                    dfs(i + 1, false),
                    nums[i] + dfs(i + 1, true)
                );
            }

            return memo[i][state];
        }

        return dfs(0, false);
    }
}