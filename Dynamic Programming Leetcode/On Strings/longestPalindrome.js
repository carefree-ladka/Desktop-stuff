//LC : 5

const expandAroundCorner = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.substring(left + 1, right);
};
const getLongSub = (temp, res) => (temp.length > res.length ? temp : res);

function longestPalindrome(s = "") {
  let res = "";
  if (s === null || s.length === 0)
    for (let i = 0; i < s.length; i++) {
      const one = expandAroundCorner(s, i, i);
      const two = expandAroundCorner(s, i, i + 1);
      res = getLongSub(one, getLongSub(two, res));
    }
  return res;
}
