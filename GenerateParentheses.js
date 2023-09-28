function generateParentheses(N) {
  const result = [];
  const backtrack = (currentString, openCount, closeCount) => {
    if (currentString.length === 2 * N) {
      result.push(currentString);
      return;
    }
    if (openCount < N) {
      backtrack(currentString + "(", openCount + 1, closeCount);
    }
    if (closeCount < openCount) {
      backtrack(currentString + ")", openCount, closeCount + 1);
    }
  };
  backtrack("", 0, 0);
  return result;
}

console.log(generateParentheses(3)); //[ '((()))', '(()())', '(())()', '()(())', '()()()' ]
/* 
Time Complexity: O(C(N)) : N-->4^N/(N^(3/2))   It's called the Catalan Number
Space Complexity: O(N+C(N))
*/