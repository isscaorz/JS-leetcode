/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/next-permutation/

实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
必须原地修改，只允许使用额外常数空间。
以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
    1,2,3 → 1,3,2
    3,2,1 → 1,2,3
    1,1,5 → 1,5,1

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
	let len = nums.length;
	let flag = false;
	let pos;
	for (let i = len - 2; i >= 0; i--) {
		if (nums[i] < nums[i + 1]) {
			flag = true;
			pos = i;
			break;
		}
	}
	if (!flag) {
		nums.sort((a, b) => {
			return a - b;
		});
	} else {
		for (let i = len - 1; ; i--) {
			if (nums[i] > nums[pos]) {
				let tmp = nums[i];
				nums[i] = nums[pos];
				nums[pos] = tmp;
				break;
			}
		}
		let tmp = nums.slice(pos + 1).sort((a, b) => {
			return a - b;
		});
		nums.length = pos + 1;
		Array.prototype.push.apply(nums, tmp);
	}
};
