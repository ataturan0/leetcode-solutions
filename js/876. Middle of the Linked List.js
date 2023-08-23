/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // Initialize a pointer to the next node after the head.
  let nextNode = head.next;
  // Initialize a variable to keep track of the length of the linked list.
  let listLength = 1;

  // Calculate the length of the linked list.
  while (nextNode != null) {
    listLength++;
    nextNode = nextNode.next;
  }
  console.log("listlength/2 => " + listLength / 2);
  let findMiddleOrSecondMiddleNode = head;

  for (let i = 1; i < Math.floor(listLength / 2) + 1; i++) {
    findMiddleOrSecondMiddleNode = findMiddleOrSecondMiddleNode.next;
  }

  // Return the middle or second middle node of the linked list.
  return findMiddleOrSecondMiddleNode;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/*
// Test Case 1
// head = [1, 2, 3, 4, 5]
let listNode1 = new ListNode(1);
let listNode2 = new ListNode(2);
let listNode3 = new ListNode(3);
let listNode4 = new ListNode(4);
let listNode5 = new ListNode(5);
//let listNode6 = new ListNode(6);

listNode1.next = listNode2;
listNode2.next = listNode3;
listNode3.next = listNode4;
listNode4.next = listNode5;
//  listNode5.next = listNode6;

let head = listNode1;
console.log(middleNode(head));
*/
/*
// Test Case 2
// head = [1, 2, 3, 4, 5, 6]
let listNode1 = new ListNode(1);
let listNode2 = new ListNode(2);
let listNode3 = new ListNode(3);
let listNode4 = new ListNode(4);
let listNode5 = new ListNode(5);
let listNode6 = new ListNode(6);

listNode1.next = listNode2;
listNode2.next = listNode3;
listNode3.next = listNode4;
listNode4.next = listNode5;
listNode5.next = listNode6;

let head = listNode1;
console.log(middleNode(head));
*/
