/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/zigzag-conversion/

将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
L   C   I   R
E T O E S I I G
E   D   H   N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
请你实现这个将字符串进行指定行数变换的函数：
string convert(string s, int numRows);
示例 1:
    输入: s = "LEETCODEISHIRING", numRows = 3
    输出: "LCIRETOESIIGEDHN"
示例 2:
    输入: s = "LEETCODEISHIRING", numRows = 4
    输出: "LDREOEIIECIHNTSG"
    解释:
    L     D     R
    E   O E   I I
    E C   I H   N
    T     S     G

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	let res = '';
	let len = s.length;
	if (len < 2 || numRows < 2 || len <= numRows) return s;
	let f = 2 * (numRows - 1);
	for (let i = 0; i < numRows; i++) {
		let bit = f - 2 * i;
		let flag = true;
		for (let j = i; j < len; ) {
			res += flag ? (bit !== 0 ? s[j] : '') : bit !== f ? s[j] : '';
			j += flag ? bit : f - bit;
			flag = !flag;
		}
	}
	return res;
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	let sLen = s.length;
	if (numRows < 2 || sLen < 2 || sLen <= numRows) {
		return s;
	}
	let fLen = numRows * 2 - 2;
	let outS = '';
	for (let i = 0, len = fLen / 2 + 1; i < len; i++) {
		if (i == 0 || i == len - 1) {
			let j = i;
			while (j < sLen) {
				outS += s[j];
				j += fLen;
			}
		} else {
			let j1 = i,
				j2 = fLen - i;
			while (j1 < sLen && j2 < sLen) {
				outS += s[j1];
				outS += s[j2];
				j1 += fLen;
				j2 += fLen;
			}
			while (j1 < sLen) {
				outS += s[j1];
				j1 += fLen;
			}
		}
	}
	return outS;
};
