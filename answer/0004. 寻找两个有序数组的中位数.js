/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
你可以假设 nums1 和 nums2 不会同时为空。
示例 1:
    nums1 = [1, 3]
    nums2 = [2]
    则中位数是 2.0
示例 2:
    nums1 = [1, 2]
    nums2 = [3, 4]
    则中位数是 (2 + 3)/2 = 2.5

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	let len = nums1.length + nums2.length;
	let isOdd = len % 2;
	let midIndex = (len >> 1) + 1;
	let count = 0;
	let tmp;
	while (nums1.length && nums2.length) {
		count++;
		if (count == midIndex) {
			let cur = nums1[0] < nums2[0] ? nums1.shift() : nums2.shift();
			return isOdd ? cur : (tmp + cur) / 2;
		} else {
			tmp = nums1[0] < nums2[0] ? nums1.shift() : nums2.shift();
		}
	}
	while (nums1.length) {
		count++;
		if (count == midIndex) {
			let cur = nums1.shift();
			return isOdd ? cur : (tmp + cur) / 2;
		} else {
			tmp = nums1.shift();
		}
	}
	while (nums2.length) {
		count++;
		if (count == midIndex) {
			let cur = nums2.shift();
			return isOdd ? cur : (tmp + cur) / 2;
		} else {
			tmp = nums2.shift();
		}
	}
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	let m = nums1.length;
	let n = nums2.length;
	if (m > n) {
		[m, n, nums1, nums2] = [n, m, nums2, nums1];
	}
	if (n == 0) {
		throw new Error(`不能都为空数组`);
	}
	let iMin = 0,
		iMax = m,
		halfLen = Math.floor((m + n + 1) / 2);
	while (iMin <= iMax) {
		let i = Math.floor((iMin + iMax) / 2);
		let j = halfLen - i;
		if (i < iMax && nums2[j - 1] > nums1[i]) {
			iMin = i + 1; // i is too small
		} else if (i > iMin && nums1[i - 1] > nums2[j]) {
			iMax = i - 1; // i is too big
		} else {
			let maxLeft = 0;
			if (i == 0) {
				maxLeft = nums2[j - 1];
			} else if (j == 0) {
				maxLeft = nums1[i - 1];
			} else {
				maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
			}
			if ((m + n) % 2 == 1) {
				return maxLeft;
			}
			let minRight = 0;
			if (i == m) {
				minRight = nums2[j];
			} else if (j == n) {
				minRight = nums1[i];
			} else {
				minRight = Math.min(nums2[j], nums1[i]);
			}
			return (maxLeft + minRight) / 2.0;
		}
	}
};
