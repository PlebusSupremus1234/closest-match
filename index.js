module.exports = function closest_match(target, array, max = 1) {
    if (!target || !array) throw new Error("Please input the correct inputs");
    if (array.length === 0) return null;
    function distance(a, b) {
        if (a.length === 0) return b.length; 
        if (b.length === 0) return a.length;
        if (a.length > b.length) [a, b] = [b, a];
        let row = [];
        for (let i = 0; i <= a.length; i++) row[i] = i;
        for (let i = 1; i <= b.length; i++) {
            let prev = i;
            for (let j = 1; j <= a.length; j++) {
                let val;
                if (b.charAt(i - 1) === a.charAt(j - 1)) val = row[j - 1];
                else val = Math.min(row[j - 1] + 1, prev + 1, row[j] + 1);
                row[j - 1] = prev;
                prev = val;
            }
            row[a.length] = prev;
        }        
        return row[a.length];
    }
    let vals = [];
    for (let i = 0; i < array.length; i++) vals.push(distance(target, array[i]));
    let found = [];
    for (let i = 0; i < vals.length; i++) {
        if (vals[i] === Math.min(...vals)) found.push(array[i]);
    }
    if (found.length > max) {
        let exact;
        for (let i = 0; i < found.length; i++) {
            if (found[i].toLowerCase() === target.toLowerCase()) exact = found[i];
        }
        found = found.slice(0, max);
        if (!found.includes(exact) && exact) found.splice(0, 1, exact);
    }
    if (max === 1) found = found[0];
    return found;
}