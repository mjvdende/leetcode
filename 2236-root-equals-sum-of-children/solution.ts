
// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function checkTree(root: TreeNode | null): boolean {
  const leftx = root['left'].val
  const rightx = root['right'].val
  const result = leftx + rightx
  if (root['val'] === result) {
    return true
  } return false
}

console.log(checkTree(new TreeNode(10, new TreeNode(5), new TreeNode(15)))) // false
console.log(checkTree(new TreeNode(5, new TreeNode(2), new TreeNode(3)))) // true