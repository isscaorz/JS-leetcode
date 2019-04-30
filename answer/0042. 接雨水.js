/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/trapping-rain-water/

给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
   5      
   4          
   3                      |#|
   2          |#||o||o||o||#||#||o||#|  
   1  __|#||o||#||#||o||#||#||#||#||#||#|_______

上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（o部分表示雨水）。 
示例:
输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	let len = height.length;
	let maxLeft = [];
	let maxRight = [];
	let max = 0;
	for (let i = 0; i < len; i++) {
		maxLeft[i] = max;
		max = Math.max(max, height[i]);
	}
	max = 0;
	for (let i = len; i--; ) {
		maxRight[i] = max;
		max = Math.max(max, height[i]);
	}
	let sum = 0;
	for (let i = 0; i < len; i++) {
		let min = Math.min(maxLeft[i], maxRight[i]);
		if (min > height[i]) {
			sum += min - height[i];
		}
	}
	return sum;
};
