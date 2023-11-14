import checkTree from "./solution";
import {TreeNode} from "./TreeNode";

test('should be 6', () => {
  expect(checkTree(new TreeNode(10, new TreeNode(5), new TreeNode(15)))).toBe(false);
  expect(checkTree(new TreeNode(5, new TreeNode(2), new TreeNode(3)))).toBe(true);

});