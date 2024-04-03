/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  let newList = new ListNode(0);
  let newListHead = newList;
  
  while (l1 !== null && l2 !== null) {
    if (l2 === null || l1.val < l2.val) {
      newList.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      newList.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    newList = newList.next;
  }
  
  newList.next = l1 === null ? l2 : l1;
  
  return newListHead.next;
};