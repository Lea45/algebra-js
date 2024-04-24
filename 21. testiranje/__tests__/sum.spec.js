const sum = require("../script");

test("1+2 is equal to 3", () => {
  expect(sum(1, 2)).toEqual(3);
});
