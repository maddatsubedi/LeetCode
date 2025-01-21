/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {

    const map = {};

    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    const sortedChars = Object.keys(map).sort((a, b) => map[b] - map[a]);

    let result = "";
    for (let char of sortedChars) {
        result += char.repeat(map[char]);
    }

    return result;
};

// Note: aabbbccccddeee

const s1 = "tree"; // Output: eert
const s2 = "cccaaa"; // Output: cccaaa
const s3 = "Aabb"; // Output: Aabb

console.log(frequencySort(s1));