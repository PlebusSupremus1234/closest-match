import { distance } from "../index"

test('Distance Tests', () => {
    expect(distance("hlelo", "hello")).toBe(2);
    expect(distance("", "hello")).toBe(5);
    expect(distance("testtesttesttest", "testtesttest")).toBe(4);
    expect(distance("dag", "doge")).toBe(2);
});