import fizzbuzz from "./FizzBuzz";

describe("FizzBuzz", () => {
  it("genera FizzBuzz para 1", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });
});
