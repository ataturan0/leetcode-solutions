/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  console.log("nums1 input -> " + nums1 + " and value of m is -> " + m);
  console.log("nums1 input -> " + nums2 + " and value of n is -> " + n);
  console.log("nums2 length->" + nums2.length);

  if (
    nums1.length == m + n &&
    nums2.length == n &&
    m >= 0 &&
    n <= 200 &&
    m + n >= 1 &&
    m + n <= 200
  ) {
    //removing n elements from nums1 array
    nums1.splice(nums1.length - n, n);
    console.log("nums1 spliced -> " + nums1);
    //adding nums2's items to the end
    nums1.splice(nums1.length - 1, 0, ...nums2);
    console.log("nums1 and nums2 concatenated -> " + nums1);

    //sorting the array elements in ascending order
    nums1 = nums1.sort((a, b) => a - b);
    console.log("nums1 sorted -> " + nums1);
  }
};
