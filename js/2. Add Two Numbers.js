/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let nodel1 = l1;
  let nodel2 = l2;
  let overflow = 0;
  let dummy = new ListNode(); // Create a dummy node to represent the start of the result linked list

  let currentNode = dummy; // Use a currentNode pointer to traverse and build the result linked list

  while (nodel1 || nodel2 || overflow) {
    let val1 = nodel1 ? nodel1.val : 0;
    let val2 = nodel2 ? nodel2.val : 0;

    let tempSum = val1 + val2 + overflow;
    if (tempSum >= 10) {
      overflow = Math.floor(tempSum / 10);
      tempSum %= 10;
    } else {
      overflow = 0;
    }

    currentNode.next = new ListNode(tempSum); // Create a new node for the current sum and link it
    currentNode = currentNode.next; // Move the currentNode pointer forward

    if (nodel1) {
      nodel1 = nodel1.next;
    }
    if (nodel2) {
      nodel2 = nodel2.next;
    }
  }

  return dummy.next; // Return the starting node of the actual result linked list, skipping the dummy node
};

/*
// List 1
let listNode1 = new ListNode(2);
let listNode2 = new ListNode(4);
let listNode3 = new ListNode(3);
listNode1.next = listNode2;
listNode2.next = listNode3;
let head1 = listNode1;

//List 2
let list2Node1 = new ListNode(5);
let list2Node2 = new ListNode(6);
let list2Node3 = new ListNode(4);
list2Node1.next = list2Node2;
list2Node2.next = list2Node3;
let head2 = list2Node1;

console.log(addTwoNumbers(head1, head2));
*/