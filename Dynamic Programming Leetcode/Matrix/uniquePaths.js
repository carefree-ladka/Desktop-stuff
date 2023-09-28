//LC: 62

//https://leetcode.com/problems/unique-paths/solutions/1581998/c-python-5-simple-solutions-w-explanation-optimization-from-brute-force-to-dp-to-math/?envType=study-plan-v2&envId=dynamic-programming

function uniquePaths(m, n, memo = {}) {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 || n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
  return memo[key];
}

/* 
TC :O(M*N)
SC :O(M+N)
*/

/* 
N choose K
C(n,k)=n!/k!*(n-k)!
In this context, total number of movements m+n-2
and one direction movements rows or cols-m-1 or n-1
Time : O(MIN(m,n))
Space: O(1)
 */

var uniquePaths = function (m, n) {
  const totalMoves = m + n - 2;
  const movesInOneDir = m - 1; //or n-1
  const diff = totalMoves - movesInOneDir;
  let result = 1;
  for (let i = 1; i <= movesInOneDir; i++) {
    result *= diff / i + 1;
  }
  return Math.round(result);
};
