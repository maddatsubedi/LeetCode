/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const og = init;
    return {
        increment : function() {
            return ++init;
        },
        decrement : function() {
            return --init;
        },
        reset : function() {
            return init = og;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */