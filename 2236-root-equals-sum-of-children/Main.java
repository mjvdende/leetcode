public class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    TreeNode root = new TreeNode(10);
    root.left = new TreeNode(4);
    root.right = new TreeNode(6);
    System.out.println(root.left.val);
  }
}

// Definition for a binary tree node.
 class TreeNode {
   int val;
   TreeNode left;
   TreeNode right;
   TreeNode() {}
   TreeNode(int val) { this.val = val; }
   TreeNode(int val, TreeNode left, TreeNode right) {
     this.val = val;
     this.left = left;
     this.right = right;
  }
}