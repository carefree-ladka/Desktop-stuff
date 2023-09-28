const arr = ["A", "B", "C"];

const permutations = (arr = []) => {
  const result = [];
  backtrack([], arr);
  function backtrack(permutation = [], arr = []) {
    if (permutation.length === arr.length) {
      result.push([...permutation]);
      return;
    }
    arr.forEach((item) => {
      if (!permutation.includes(item)) {
        permutation.push(item);
        backtrack(permutation, arr);
        permutation.pop();
      }
    });
  }
  return result;
};

console.log(permutations(arr));
