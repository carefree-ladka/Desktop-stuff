class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert = (value) => {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    } else this.#recursivelyBuild(this.root, newNode);
  };

  #recursivelyBuild = (node, newNode) => {
    
  };
}

const bst = new BinarySearchTree();

[1, 2, 3, 4, 5, 6, 8].forEach((x) => bst.insert(x));

console.log(JSON.stringify(bst, null, 2));
