/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/permutations/

给定一个没有重复数字的序列，返回其所有可能的全排列。
示例:
    输入: [1,2,3]
    输出:
    [
        [1,2,3],
        [1,3,2],
        [2,1,3],
        [2,3,1],
        [3,1,2],
        [3,2,1]
    ]

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	let len = nums.length;
	if (len < 2) {
		return [nums];
	}
	let store = [];
	let dfs = (index, cache) => {
		if (index < len) {
			for (let i = 0; i <= index; i++) {
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
