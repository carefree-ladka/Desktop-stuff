/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//time:   O(log(min(m,n)))
//space : constant

var findMedianSortedArrays = function (nums1, nums2) {
  let n = nums1.length;
  let m = nums2.length;
  if (n > m) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let merge_Arr_mid = Math.floor((n + m + 1) / 2);
  let start = 0;
  let end = n;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let leftAsize = mid;
    let leftBsize = merge_Arr_mid - leftAsize;
    let leftA = leftAsize > 0 ? nums1[leftAsize - 1] : Number.MIN_SAFE_INTEGER;
    let leftB = leftBsize > 0 ? nums2[leftBsize - 1] : Number.MIN_SAFE_INTEGER;
    let rightA = leftAsize < n ? nums1[leftAsize] : Number.MAX_SAFE_INTEGER;
    let rightB = leftBsize < m ? nums2[leftBsize] : Number.MAX_SAFE_INTEGER;
    if (leftA <= rightB && leftB <= rightA) {
      if ((n + m) % 2 == 0) {
        return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
      } else {
        return Math.max(leftA, leftB);
      }
    } else if (leftA > rightB) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return 0;
};
