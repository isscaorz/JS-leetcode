/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/powx-n/

实现 pow(x, n) ，即计算 x 的 n 次幂函数。
示例 1:
    输入: 2.00000, 10
    输出: 1024.00000
示例 2:
    输入: 2.10000, 3
    输出: 9.26100
示例 3:
    输入: 2.00000, -2
    输出: 0.25000
    解释: 2^(-2) = 1/2^(2) = 1/4 = 0.25
说明:
    -100.0 < x < 100.0
    n 是 32 位有符号整数，其数值范围是 [−2^31, 2^31 − 1] 。

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
	return Math.pow(x, n);
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
	if (n < 0) {
		x = 1 / x;
		n = -n;
	}
	let ans = 1;
	let now = x;
	while (n > 0) {
		if (n % 2 == 1) {
			ans = ans * now;
		}
		now = now * now;
		n = Math.floor(n / 2);
	}
	return ans;
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
	if (n < 0) {
		x = 1 / x;
		n = -n;
	}
	let dfs = (x, n) => {
		if (n == 0) {
			return 1;
		}
		let nN = Math.floor(n / 2);
		let half = dfs(x, nN);
		if (n % 2 == 0) {
			return half * half;
		} else {
			return half * half * x;
		}
	};
	return dfs(x, n);
};
