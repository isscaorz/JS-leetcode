/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/

给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
示例 1：
    输入：
        s = "barfoothefoobarman",
        words = ["foo","bar"]
    输出：[0,9]
    解释：
    从索引 0 和 9 开始的子串分别是 "barfoor" 和 "foobar" 。
    输出的顺序不重要, [9,0] 也是有效答案。
示例 2：
    输入：
        s = "wordgoodgoodgoodbestword",
        words = ["word","good","best","word"]
    输出：[]

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
	let output = [];
	if (!s.length || !words.length) {
		return output;
	}
	let wl = words[0].length;
	let n = s.length;
	let m = words.length;
	let map = new Map();
	words.forEach(w => {
		map.set(w, (map.get(w) || 0) + 1);
	});
	console.log(map);
	for (let i = 0; i < wl; i++) {
		let temp = new Map();
		let count = 0;
		let lo = i;
		for (let hi = i; hi + wl <= n; hi += wl) {
			let sHi = s.substring(hi, hi + wl);
			if (map.has(sHi)) {
				temp.set(sHi, (temp.get(sHi) || 0) + 1);
                count++;
                while(temp.get(sHi))
			} else {
				temp.clear;
				count = 0;
				lo = hi + wl;
			}
		}
	}
	console.log('output:', output);
	return output;
};
findSubstring('barfoothefoobarman', ['foo', 'bar']);
