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
		upperlim = (1 << n) - 1;
	let addSolution = () => {
		let answer = [];
		for (let i = 0; i < n; ++i) {
			let col = queens[i],
				sb = '';
			for (let j = 0; j < col; ++j) {
				sb += '.';
			}
			sb += 'Q';
			for (let j = 0; j < n - col - 1; ++j) {
				sb += '.';
			}
			answer.push(sb);
		}
		answers.push(answer);
	};

	function backtrack(col, ld, rd) {
		if (col === upperlim) {
            console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
			addSolution();
		} else {
			var pos = upperlim & ~(col | ld | rd);
			console.log('---------------------------------------');
			console.log(
				upperlim.toString(2),
				col.toString(2),
				ld.toString(2),
				rd.toString(2),
				pos.toString(2)
			);
			while (pos) {
				var current = pos & (~pos + 1);
				console.log(pos.toString(2), current.toString(2)); //<<-----------------------
				pos -= current;
				console.log(pos.toString(2), Math.log2(current).toString(2));//<<-----------------------
				queens.push(n - 1 - Math.log2(current));
                console.log(queens);//<<-----------------------
                console.log(
                    upperlim.toString(2),
                    (col | current).toString(2),
                    (upperlim & ((ld | current) >> 1)).toString(2),
                    (upperlim & ((rd | current) << 1)).toString(2),
                    pos.toString(2)
                );
				backtrack(
					col | current,
					upperlim & ((ld | current) >> 1),
					upperlim & ((rd | current) << 1)
				);
				queens.pop();
				console.log('queenspop:', queens);//<<-----------------------
			}
		}
	}

	backtrack(0, 0, 0);
	return answers;
};
solveNQueens(4);
// console.log((7 &  ~(0 | 0 | 0)).toString(2))
