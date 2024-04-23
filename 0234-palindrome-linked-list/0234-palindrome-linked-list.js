/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
  const list = [];
  
  while(head !== null) {
    list.push(head.val);
    head = head.next;
  }

  return list.join("") === list.reverse().join("");
};