const distance = require("./distance")

module.exports = (target, array, showOccurrences = false) => {
    if (!target || !array || !Array.isArray(array)) throw new Error("Please input the correct inputs");
    if (array.length === 0) return null;

    let vals = [];
    let found = [];

    for (let i = 0; i < array.length; i++) vals.push(distance(target, array[i]));
    let min = Math.min(...vals);

    for (let i = 0; i < vals.length; i++) {
        if (vals[i] === min) found.push(array[i]);
    }

    return showOccurrences ? found : found[0];
};