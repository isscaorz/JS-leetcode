/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/merge-k-sorted-lists/

合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
示例:
    输入:
    [
    1->4->5,
    1->3->4,
    2->6
    ]
    输出: 1->1->2->3->4->4->5->6

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
	if (lists.length == 0) {
		return null;
	}
	let mergeList = (l1, l2) => {
		let outNode = new ListNode(0);
		let a = outNode;
		while (l1 && l2) {
			if (l1.val < l2.val) {
				a.next = l1;
				a = a.next;
				l1 = l1.next;
			} else {
				a.next = l2;
				a = a.next;
				l2 = l2.next;
			}
		}
		if (l1) {
			a.next = l1;
		}
		if (l2) {
			a.next = l2;
		}
		return outNode.next;
	};
	while (lists.length > 1) {
		let arr = [];
		let len = lists.length;
		for (let i = 1; i < len; i += 2) {
			arr.push(mergeList(lists[i - 1], lists[i]));
		}
		len % 2 && arr.push(lists[len - 1]);
		lists = arr;
	}
	return lists[0];
};
