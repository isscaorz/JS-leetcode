/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/generate-parentheses/

给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
例如，给出 n = 3，生成结果为：
    [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
    ]

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	let output = [];
	let core = (list, str, countL, countR, n) => {
		if (str.length == n * 2) {
			list.push(str);
			return;
		}
		countL < n && core(list, str + '(', countL + 1, countR, n);
		countR < countL && core(list, str + ')', countL, countR + 1, n);
	};
	core(output, '', 0, 0, n);
	return output;
};
