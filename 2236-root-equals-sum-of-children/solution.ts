import { TreeNode } from './TreeNode'

export default function checkTree(root: TreeNode | null): boolean {
  const leftx = root['left'].val
  const rightx = root['right'].val
  const result = leftx + rightx
  if (root['val'] === result) {
    return true
  } return false
}
