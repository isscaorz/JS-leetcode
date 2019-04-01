/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/longest-common-prefix/

编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。
示例 1:
    输入: ["flower","flow","flight"]
    输出: "fl"
示例 2:
    输入: ["dog","racecar","car"]
    输出: ""
    解释: 输入不存在公共前缀。
说明:
所有输入只包含小写字母 a-z 。

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	let len = strs.length;
	if (len == 0) {
		return '';
	}
	if (len == 1) {
		return strs[0];
	}
	let startS = strs[0];
	let minLen = startS.length;
	for (let i = 1; i < len; i++) {
		if (strs[i].length < minLen) {
			startS = strs[i];
			minLen = startS.length;
		}
	}
	let lenL = 1,
		lenR = minLen;
	while (lenL <= lenR) {
		let middle = Math.floor((lenL + lenR) / 2);
		let middleS = startS.substr(0, middle);
		let flag = 1;
		for (let i = 0; i < len; i++) {
			if (strs[i].substr(0, middle) !== middleS) {
				flag = 0;
				break;
			}
		}
		if (flag) {
			lenL = middle + 1;
		} else {
			lenR = middle - 1;
		}
	}
	if (lenR == 0) {
		return '';
	}
	let middle = Math.floor((lenL + lenR) / 2);
	return startS.substr(0, middle);
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix1 = function(strs) {
	if (strs.length == 0) {
		return '';
	}
	let comhead = '';
	let index = 0;
	while (true) {
		let comchar = strs[0][index];
		if (comchar == undefined) {
			return comhead;
		}
		for (let i = 1, len = strs.length; i < len; i++) {
			if (strs[i][index] == undefined) {
				return comhead;
			}
			if (comchar !== strs[i][index]) {
				return comhead;
			}
		}
		index++;
		comhead += comchar;
	}
};
