/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const newArr = [...nums1, ...nums2].sort((a, b) => a-b);
    const len = newArr.length
    if (len % 2 !== 0) {
        return newArr[Math.floor(len / 2)];
    }

    const fm = Math.floor(len/2)-1
    const sm = Math.floor(len/2)

    return (newArr[fm] + newArr[sm]) /2;

};