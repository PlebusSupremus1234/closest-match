import { closestMatch } from "../index"

test('Closest Match Tests', () => {
    expect(closestMatch("dag", ["dog", "pumpkin"])).toBe("dog");
    expect(closestMatch("hmm", [])).toBe(null);
    expect(closestMatch("hello", ["jello", "hi", "bello", "mellow"], true)).toStrictEqual(["jello", "bello"]);
});