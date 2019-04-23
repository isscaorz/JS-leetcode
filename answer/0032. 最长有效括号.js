/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/longest-valid-parentheses/

给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
示例 1:
    输入: "(()"
    输出: 2
    解释: 最长有效括号子串为 "()"
示例 2:
    输入: ")()())"
    输出: 4
    解释: 最长有效括号子串为 "()()"

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
	let len = s.length;
	if (len < 2) return 0;
	let maxLen = 0;
	let start = 0;
	let sArr = [];
	for (let i = 0; i < len; i++) {
		if (s[i] == '(') {
			sArr.push(i);
		} else {
			if (sArr.length == 0) {
				start = i + 1;
			} else {
				sArr.pop();
				if (sArr.length == 0) {
					maxLen = Math.max(maxLen, i - start + 1);
				} else {
					maxLen = Math.max(maxLen, i - sArr[sArr.length - 1]);
				}
			}
		}
	}
	return maxLen;
};
