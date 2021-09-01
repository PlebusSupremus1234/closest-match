import { distance } from "./distance"

export const closestMatch = (target: string, array: string[], showOccurrences = false) => {
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