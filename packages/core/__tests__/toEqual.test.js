import fun from "../lib/toEqual";

test("对象赋值", () => {
  const data = { a: 1 };
  expect(fun()).toEqual(data);
});
