/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/permutations-ii/

给定一个可包含重复数字的序列，返回所有不重复的全排列。
示例:
    输入: [1,1,2]
    输出:
    [
        [1,1,2],
        [1,2,1],
        [2,1,1]
    ]

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
	let len = nums.length;
	if (len < 2) {
		return [nums];
	}
	let store = [];
	let dfs = (index, cache) => {
		if (index < len) {
			let idx = cache.indexOf(nums[index]);
			let end = idx > -1 ? idx : index;
			for (let i = 0; i <= end; i++) {
				let cacheNew = [...cache];
				cacheNew.splice(i, 0, nums[index]);
				dfs(index + 1, cacheNew);
			}
		} else {
			store.push(cache);
		}
	};
	dfs(0, []);
	return store;
};
