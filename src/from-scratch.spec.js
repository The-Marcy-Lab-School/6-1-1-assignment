const path = require('path');
const ScoreCounter = require('score-tests');
const {
  BinaryTree,
  isUnivalueTree,
  invert,
  secondMinimumNode
} = require('./from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  describe('Binary Tree', () => {
    it('can get its value', () => {
      let tree1 = new BinaryTree(4);
      expect(tree1.getRootValue()).toBe(4);
      let tree2 = new BinaryTree(2);
      expect(tree2.getRootValue()).toBe(2);

      scoreCounter.correct(expect); // DO NOT TOUCH
    })

    it('can set its value', () => {
      let tree = new BinaryTree(4);
      expect(tree.getRootValue()).toBe(4);
      tree.setRootValue(2);
      expect(tree.getRootValue()).toBe(2);

      scoreCounter.correct(expect); // DO NOT TOUCH
    })

    it('can insert a left child and return the created node', () => {
      let tree = new BinaryTree(4);
      let newNode = tree.insertLeft(2);
      expect(newNode instanceof BinaryTree).toBe(true);
      expect(tree.left.getRootValue()).toBe(2);

      scoreCounter.correct(expect); // DO NOT TOUCH
    })

    it('can insert a right child and return the created node', () => {
      let tree = new BinaryTree(4);
      let newNode = tree.insertRight(7);
      expect(newNode instanceof BinaryTree).toBe(true);
      expect(tree.right.getRootValue()).toBe(7);

      scoreCounter.correct(expect); // DO NOT TOUCH
    })

    it('can get the value of its left child', () => {
      let tree = new BinaryTree(4);
      tree.insertLeft(2);
      expect(tree.getLeftChildValue()).toBe(2);

      scoreCounter.correct(expect); // DO NOT TOUCH
    })

    it('can get the value of its right child', () => {
      let tree = new BinaryTree(4);
      tree.insertRight(7);
      expect(tree.getRightChildValue()).toBe(7);

      scoreCounter.correct(expect); // DO NOT TOUCH
    })
  })

  describe('Univalued Binary Tree', () => {
    it("returns true when given a univalued tree", () => {
      let tree = new BinaryTree(4);
      let left = tree.insertLeft(4);
      let right = tree.insertRight(4);
      left.insertLeft(4);
      left.insertRight(4);
      right.insertLeft(4);
      expect(isUnivalueTree(tree)).toBe(true);

      scoreCounter.correct(expect); // DO NOT TOUCH
    })

    it("returns false when given a univalued tree", () => {
      let tree = new BinaryTree(4);
      let left = tree.insertLeft(4);
      left.insertLeft(4);
      left.insertRight(5);
      let right = tree.insertRight(4);
      right.insertLeft(4);
      expect(isUnivalueTree(tree)).toBe(false);

      scoreCounter.correct(expect); // DO NOT TOUCH
    })
  })

  describe('Invert', () => {
    it("inverts a simple balanced binary tree and returns the root", () => {
      let root = new BinaryTree(4);
      root.insertLeft(2)
      root.insertRight(6);

      const invertedRoot = invert(root)
      expect(invertedRoot instanceof BinaryTree).toBe(true);
      expect(invertedRoot.getLeftChildValue()).toEqual(6)
      expect(invertedRoot.getRightChildValue()).toEqual(2)

      scoreCounter.correct(expect); // DO NOT TOUCH
    })

    it("correctly inverts binary tree", () => {
      let tree = new BinaryTree(4);
      let oldLeft = tree.insertLeft(2);
      oldLeft.insertLeft(1);
      oldLeft.insertRight(3);
      let oldRight = tree.insertRight(7);
      oldRight.insertLeft(6);
      // oldRight.insertRight(9);
      invert(tree)
      expect(tree.getRootValue()).toBe(4);
      expect(tree.getLeftChildValue()).toBe(7);
      expect(tree.getRightChildValue()).toBe(2);
      // expect(oldRight.getLeftChildValue()).toBe(9);
      expect(oldRight.getRightChildValue()).toBe(6);
      expect(oldLeft.getLeftChildValue()).toBe(3);
      expect(oldLeft.getRightChildValue()).toBe(1);

      scoreCounter.correct(expect); // DO NOT TOUCH
    })
  })

  // remove the .skip in order to run this test!
  describe.skip('Second Minimum Node', () => {
    it("works for a valid example", () => {
      let tree = new BinaryTree(2);
      let left = tree.insertLeft(2);
      let right = tree.insertRight(5);
      right.insertLeft(5);
      right.insertRight(7);
      expect(secondMinimumNode(tree)).toBe(5);

      scoreCounter.correct(expect); // DO NOT TOUCH

      let tree2 = new BinaryTree(2);
      left = tree2.insertLeft(2);
      right = tree2.insertRight(2);
      left.insertLeft(2);
      left.insertRight(3);
      right.insertLeft(2);
      right.insertRight(4);
      expect(secondMinimumNode(tree2)).toBe(3);

      scoreCounter.correct(expect); // DO NOT TOUCH
    })

    it("works for an invalid example", () => {
      let tree = new BinaryTree(2);
      tree.insertLeft(2);
      tree.insertRight(2);
      expect(secondMinimumNode(tree)).toBe(-1);

      scoreCounter.correct(expect); // DO NOT TOUCH
    })
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});

