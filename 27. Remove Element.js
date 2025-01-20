/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {

    let count = 0;
    let altCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            count++;
            nums.push(nums[i]);
            nums.splice(i, 1);
            i--;
        }
        if (altCount >= nums.length -1 ) {
            break;
        }
        altCount++;
    }
    return nums.length - count;
};

const nums = [0,1,2,2,3,0,4,2];
const val = 2;

console.log(removeElement(nums, val));
console.log(nums);