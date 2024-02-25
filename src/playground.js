class BinaryTree {
    constructor(data = null, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  
    getRootValue() {
      return this.data; 
    }
  
    setRootValue(value) {
      return this.data = value;
    }
  
    insertLeft(value) {
      this.left // If left exists 
        ? this.left.insertLeft(value) // Call this method on it
        : (this.left = new BinaryTree(value)); // If there is no left, add left 
      return this.left; // Return newly created left node
    }
  
    insertRight(value) {
      this.right // If right exists 
        ? this.right.insertRight(value) // Call this method on it 
        : (this.right = new BinaryTree(value)); // If there is no right, add right 
      return this.right; // Return newly created right node 
    }
  
    getLeftChildValue() {
      return this?.left?.data; // If no left, then data can't exist. Check optionally.
    }
  
    getRightChildValue() {
      return this?.right?.data; // If no right, then data can't exist. Check optionally. 
    }
  }
  
  function printTree(node, prefix = "", isLeft = true) { // Prints the tree in a left -> right manner
    node.right && printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
    console.log(prefix + (isLeft ? "└── " : "┌── ") + node.data);
    node.left && printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
  }
  /*
    Tree Template 
         8
       /   \
      4    11
     / \   / \
    3   5 10  12
    let tree = new BinaryTree(8);
    let left = tree.insertLeft(4);
    let right = tree.insertRight(11);
    left.insertLeft(3);
    left.insertRight(5);
    right.insertLeft(10);
    right.insertRight(12);
    printTree2(tree)
  */
  
  
  
  const isUnivalueTree = root => {
    return univalDfs(root)
  
    function univalDfs(node) {
      if (!node) return true; // If there is no node return true 
      if (node.data !== root.data) return false; // If the data doesn't match root, return false 
      return univalDfs(node.left) && univalDfs(node.right); 
      // Keep recursing as long as both calls return true, if one doesn't it will return false 
    }
  };
  
  
  const invert = root => {
    invertDfs(root)
    return root // Need to return root of inverted tree 
  }
  
  function invertDfs(node) {
    if (!node) return;
    // OR DESTRUCTURE: [node.left, node.right] = [node.right, node.left]
    const left = node.left; // Save left node's data 
    node.left = node.right; // Override left node's data with right node's data 
    node.right = left; // Override right node's data to be the saved left node's data 
    invertDfs(node.left); // Recurse in a left to right manner 
    invertDfs(node.right); // Once can't go left, moves right 
  }
  
  
  const secondMinimumNode = root => {
    let min1 = Infinity, min2 = Infinity; // Keep two minimums, set to highest values. Will be overrided.
    secondMinDfs(root); // Call the dfs function 
    return min2 === Infinity ? -1 : min2 // If min2 is still infinity, can't find sec min node -> return -1
  
    function secondMinDfs(node) {
      if (!node) return; // If node doesn't exist, exit 
      if (node.data < min1) min1 = node.data // If node's data is less then min1 reset min1 to its data
      if (node.data < min2 && node.data !== min1) min2 = node.data // If node's data is less than min2 and isn't the same as min1, reassign it to its data
      secondMinDfs(node.left); // Recursive call going left first
      secondMinDfs(node.right); // Recursive call going right if can't go left  
    }
  }
  
  
  module.exports = {
    BinaryTree,
    isUnivalueTree,
    invert,
    secondMinimumNode,
  };
  