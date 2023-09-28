// LC : 139

function wordBreak(s, wordDict) {
  const N = s.length;
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}
