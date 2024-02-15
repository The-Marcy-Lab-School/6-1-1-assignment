# Trees

In this assignment, you will be implementing a `BinaryTree` class and then writing a few classic interview problems related to trees. Try to solve them all recursively!

The final problem is a challenge problem and is optional.

## Short Response Questions

Do them first!

## Coding Exercises

1. **Implement a Binary Tree:** Implement a binary tree class using nodes and references. Instances should have the following methods available to them:
   - `getRootValue`
   - `setRootValue`
   - `insertLeft`
   - `insertRight`
   - `getLeftChildValue`
   - `getRightChildValue`

2. **Univalued Binary Tree:** A binary tree is univalued if every node in the tree has the same value. Write a function `isUnivalTree`, that takes a Tree as a parameter and returns true if and only if the given tree is univalued.

3. **Invert a Binary Tree:** Invert a binary tree.

    Input:
      ```
           4
         /   \
        2     7
       / \   / \
      1   3 6   9
      ```

      Output:
      ```

           4
         /   \
        7     2
       / \   / \
      9   6 3   1
      ```

      **Trivia:**
      This problem was inspired by this original tweet by Max Howell:

      > Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.

4. **Challenge Problem: Second Minimum Node:** Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property `root.val = min(root.left.val, root.right.val)` always holds.

Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

If no such second minimum value exists, output `-1` instead.

  Example 1:
  ```
  Input:
       2
      / \
     2   5
        / \
       5   7
  ```

  Output: 5
  Explanation: The smallest value is 2, the second smallest value is 5.


  Example 2:
  ```
  Input:
       2
      / \
     2   2
  ```
  Output: -1
  Explanation: The smallest value is 2, but there isn't any second smallest value.
  
  Example 3:
  ```
  Input:
        2
      /   \
     2     2
    / \   / \
   2   3 2   4 
  ```
  Output: 3
  Explanation: The smallest value is 2, the second smallest value is 3.
