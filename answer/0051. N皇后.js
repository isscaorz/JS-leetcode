/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/n-queens/

n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
      a   b   c   d   e   f   g   h
    —————————————————————————————————
  8 |   |   |   | @ |   |   |   |   | 8
    —————————————————————————————————
  7 |   |   |   |   |   |   | @ |   | 7
    —————————————————————————————————
  6 |   |   | @ |   |   |   |   |   | 6
    —————————————————————————————————
  5 |   |   |   |   |   |   |   | @ | 5
    —————————————————————————————————
  4 |   | @ |   |   |   |   |   |   | 4
    —————————————————————————————————
  3 |   |   |   |   | @ |   |   |   | 3
    ————————————————————————————————— 
  2 | @ |   |   |   |   |   |   |   | 2
    —————————————————————————————————
  1 |   |   |   |   |   | @ |   |   | 1
    —————————————————————————————————
      a   b   c   d   e   f   g   h
上图为 8 皇后问题的一种解法。
给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
示例:
    输入: 4
    输出: [
    [".Q..",  // 解法 1
     "...Q",
     "Q...",
     "..Q."],
    ["..Q.",  // 解法 2
     "Q...",
     "...Q",
     ".Q.."]
    ]
    解释: 4 皇后问题存在两个不同的解法。

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
	let answers = [],
		queens = [],
		upLimit = (1 << n) - 1;
	let addSolution = () => {
		let answer = [];
		for (let i = 0; i < n; ++i) {
			let col = queens[i],
				temp = '';
			for (let j = 0; j < col; ++j) {
				temp += '.';
			}
			temp += 'Q';
			for (let j = 0; j < n - col - 1; ++j) {
				temp += '.';
			}
			answer.push(temp);
		}
		answers.push(answer);
	};
	let backtrack = (row, ld, rd) => {
		if (row === upLimit) {
			addSolution();
		} else {
			var pos = upLimit & ~(row | ld | rd);
			while (pos) {
				var cur = pos & (~pos + 1);
				pos -= cur;
				queens.push(Math.log2(cur));
				backtrack(
					row | cur,
					upLimit & ((ld | cur) << 1),
					upLimit & ((rd | cur) >> 1)
				);
				queens.pop();
			}
		}
	};
	backtrack(0, 0, 0);
	return answers;
};
