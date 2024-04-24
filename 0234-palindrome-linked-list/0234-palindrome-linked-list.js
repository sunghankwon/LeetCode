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
  let list = "";
  
  while(head !== null) {
    list += head.val;
    head = head.next;
  }

  return list === list.split("").reverse().join("");
};