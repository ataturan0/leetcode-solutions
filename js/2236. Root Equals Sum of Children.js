/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkTree = function(root) {
    if(root.left.val + root.right.val == root.val){
        return true;
    }
    return false;
};

/* Below code can be used for testing.
// Tree Node
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    }
    
    // Test Case 1
    // root = [10, 4, 6]
    let tNode1 = new TreeNode(10);
    let tNode2 = new TreeNode(4);
    let tNode3 = new TreeNode(6);
    
    tNode1.left = tNode2;
    tNode1.right = tNode3;
    
    let root = tNode1;
    console.log(checkTree(root)); 
*/