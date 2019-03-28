/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/longest-palindromic-substring/

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
示例 1：
    输入: "babad"
    输出: "bab"
    注意: "aba" 也是一个有效答案。
示例 2：
    输入: "cbbd"
    输出: "bb"

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	let len = s.length;
	if (len < 2) {
		return s;
	}
	let start = 0;
	let maxLen = 1;
	let core = (s, l, r) => {
		let len = s.length;
		while (l >= 0 && r < len && s[l] === s[r]) {
			l--;
			r++;
		}
		if (maxLen < r - l - 1) {
			start = l + 1;
			maxLen = r - l - 1;
		}
	};
	for (let i = 0; i < len - 1; i++) {
		core(s, i, i);
		core(s, i, i + 1);
	}
	return s.substr(start, maxLen);
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	let n = s.length;
	let result = '';
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j <= n; j++) {
			let str = s.slice(i, j);
			let f = str
				.split('')
				.reverse()
				.join('');
			if (str == f) {
				result = str.length > result.length ? str : result;
			}
		}
	}
	return result;
};
