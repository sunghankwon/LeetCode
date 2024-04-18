/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  let nodeMap = new Map();

  while (head !== null) {
    if (nodeMap.has(head)) {
      return true;
    } else {
      nodeMap.set(head, true);
    }
    head = head.next;
  }

  return false;
};