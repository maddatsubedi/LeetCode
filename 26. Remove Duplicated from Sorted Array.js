/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let count = 0;
    let pointer = 0;
    for (let i = 1; i < nums.length; i++) {
        pointer++;
        if (nums[pointer] === nums[pointer-1]) {
            nums.push(nums[pointer]);
            nums.splice(pointer, 1);
            pointer--;
            count++;
        }
    }
    return nums.length - count;
};

const nums = [1, 1, 1, 1, 2, 3];

console.log(removeDuplicates(nums));
console.log(nums);