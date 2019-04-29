/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/combination-sum/

给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
candidates 中的数字可以无限制重复被选取。
说明：
    所有数字（包括 target）都是正整数。
    解集不能包含重复的组合。 
示例 1:
    输入: candidates = [2,3,6,7], target = 7,
    所求解集为:
    [
        [7],
        [2,2,3]
    ]
示例 2:
    输入: candidates = [2,3,5], target = 8,
    所求解集为:
    [
        [2,2,2,2],
        [2,3,3],
        [3,5]
    ]

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	let ans = [];
	let res;
	let dfs = (candidates, target, index, sum) => {
		if (sum === target) {
			let tmp = res.map(item => {
				return item;
			});
			ans.push(tmp);
			return;
		}
		for (let i = index, len = candidates.length; i < len; i++) {
			if (sum + candidates[i] > target) break;
			res.push(candidates[i]);
			dfs(candidates, target, i, sum + candidates[i]);
            res.pop();
		}
	};
	candidates.sort((a, b) => {
		return a - b;
	});
	for (let i = 0, len = candidates.length; i < len; i++) {
        res = [candidates[i]];
		dfs(candidates, target, i, candidates[i]);
    }
    return ans;
};
