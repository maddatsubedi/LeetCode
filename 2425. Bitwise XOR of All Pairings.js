/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
    let xor1 = 0;
    let xor2 = 0;

    for (let num of nums1) {
        xor1 ^= num;
    }

    for (let num of nums2) {
        xor2 ^= num;
    }

    let result = 0;

    if (nums2.length % 2 !== 0) {
        result ^= xor1;
    }

    if (nums1.length % 2 !== 0) {
        result ^= xor2;
    }

    return result;
};