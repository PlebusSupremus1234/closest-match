export const distance = (a: string, b: string) => {
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
};