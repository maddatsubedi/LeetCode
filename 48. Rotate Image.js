/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

    const arr = matrix.map(row => [...row]);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = arr[matrix[i].length - j - 1][i];
        }
    }
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Notes || i = matrix[i].length - j - 1 | 2 -> 3 - 2 - 1 = 0

// Notes || 0, 2 : 0, 0 | 1, 2 : 0, 1 | 2, 2 : 0, 2 | [i, j] : [matrix[i].length - j - 1, i] // 90 deg anticlockwise

// Notes || 0, 0 : 0, 2 | 0, 1 : 1, 2 | 0, 2 : 2, 2 | [i, j] : [j, matrix[i].length - i -1]
// Notes || 1, 0 : 0, 1 | 1, 1 : 1, 1 | 1, 2 : 2, 1 | [i, j] : [j, matrix[i].length - i -1]
// Notes || 2, 0 : 0, 0 | 2, 1 : 1, 0 | 2, 2 : 2, 0 | [i, j] : [j, matrix[i].length - i -1]

// Output
/*
[
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]
*/

rotate(matrix);
console.log(matrix);