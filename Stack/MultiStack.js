//N Stacks in an array

class MultiStack {
  constructor(stackSize) {
    this.stacks = [];
    this.stackSize = stackSize;
  }

  push = (stackIndex, value) => {
    if (!this.stacks[stackIndex]) {
      this.stacks[stackIndex] = [];
    }
    if (this.stacks[stackIndex].length >= this.stackSize) {
      this.stacks.push([]);
      this.stackSize = this.stacks.length - 1;
    }
    this.stacks[stackIndex].push(value);
  };

  pop = (stackIndex) => {
    if (!this.stacks[stackIndex] || this.stacks[stackIndex].length === 0) {
      return -1;
    }
    return this.stacks[stackIndex].pop();
  };

  peek = (stackIndex) => {
    if (!this.stacks[stackIndex] || this.stacks[stackIndex].length === 0) {
      return -1;
    }
    this.stacks[stackIndex][this.stacks[stackIndex].length - 1];
  };

  isEmpty = (stackIndex) => {
    return !this.stacks[stackIndex] || this.stacks[stackIndex].length === 0;
  };
}

const ms = new MultiStack();
ms.push(0, 1);
ms.push(0, 2);
ms.push(0, 1);
ms.push(1, 3);
ms.push(2, 4);
console.log(ms.stacks); //[ [ 1, 2, 1 ], [ 3 ], [ 4 ] ]
ms.pop(0);
console.log(ms.stacks); //[ [ 1, 2 ], [ 3 ], [ 4 ] ]
