/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/merge-two-sorted-lists/

将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
示例：
    输入：1->2->4, 1->3->4
    输出：1->1->2->3->4->4

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
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
