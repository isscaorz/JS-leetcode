/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/group-anagrams/

给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
示例:
    输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
    输出:
    [
        ["ate","eat","tea"],
        ["nat","tan"],
        ["bat"]
    ]
说明：
    所有输入均为小写字母。
    不考虑答案输出的顺序。

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	let len = strs.length;
	if (len == 0) {
		return [];
	}
	let output = {};
	for (let i = 0; i < len; i++) {
		let outKeyArr = [];
		for (let j = 0, lenj = strs[i].length; j < lenj; j++) {
			let index = strs[i][j].charCodeAt() - 97;
			if (outKeyArr[index]) {
				outKeyArr[index] = outKeyArr[index] + 1;
			} else {
				outKeyArr[index] = 1;
			}
		}
		let outKey = outKeyArr.join('-');
		if (!output[outKey]) {
			output[outKey] = [];
		}
		output[outKey].push(strs[i]);
	}
	let outputArr = [];
	for (let i in output) {
		outputArr.push(output[i]);
	}
	return outputArr;
};
