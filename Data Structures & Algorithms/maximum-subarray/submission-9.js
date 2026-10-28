class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        const memo = Array(nums.length)
            .fill(null)
            .map(() => [null, null]);

        const dfs = (i, flag) => {
            if (i === nums.length - 1) return flag ? Math.max(0, nums[i]) : nums[i];
            if (memo[i][+flag] !== null) return memo[i][+flag];
            memo[i][+flag] = flag
                ? Math.max(0, nums[i] + dfs(i + 1, true))
                : Math.max(dfs(i + 1, false), nums[i] + dfs(i + 1, true));
            return memo[i][+flag];
        };
        return dfs(0, false);
    }
}