/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/

给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
你的算法时间复杂度必须是 O(log n) 级别。
如果数组中不存在目标值，返回 [-1, -1]。
示例 1:
    输入: nums = [5,7,7,8,8,10], target = 8
    输出: [3,4]
示例 2:
    输入: nums = [5,7,7,8,8,10], target = 6
    输出: [-1,-1]

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
	let len = nums.length;
	let left = -1;
	let right = -1;
	let numsL = 0;
	let numsR = len - 1;
	while (numsL <= numsR) {
		let mid = Math.floor((numsL + numsR) / 2);
		if (nums[mid] < target) {
			numsL = mid + 1;
		} else {
			numsR = mid - 1;
		}
		if (nums[numsL] == target) {
			left = numsL;
			break;
		}
	}
	numsL = 0;
	numsR = len - 1;
	while (numsL <= numsR) {
		let mid = Math.ceil((numsL + numsR) / 2);
		if (nums[mid] > target) {
			numsR = mid - 1;
		} else {
			numsL = mid + 1;
		}
		if (nums[numsR] == target) {
			right = numsR;
			break;
		}
	}
	return [left, right];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
	let idx = [];
	nums.forEach(function(item, index, array) {
		if (item === target) idx.push(index);
	});
	if (!idx.length) return [-1, -1];
	return [idx[0], idx[idx.length - 1]];
};
