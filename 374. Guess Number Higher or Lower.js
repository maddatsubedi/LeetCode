/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    if (guess(n) !== 0) {
        let num = n;
        let low = 0;
        let high = num;

        while (guess(num) !== 0) {

            const prev = num;

            const newGuess = guess(num);

            if (newGuess === -1) {
                num = Math.round((num + low) / 2);
                high = prev;
            } else if (newGuess === 1) {
                num = Math.round((num + high) / 2);
                low = prev;
            }

        }

        return num;
    } else {
        return n;
    }
};