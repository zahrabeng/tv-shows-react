import summaryCleaning from "../components/summaryCleaning";

test("function should remove any openeing and closing p tags", () => {
  expect(summaryCleaning("<p>hello world</p>")).toBe("hello world");
  expect(summaryCleaning("<p>123</p>")).toBe("123");
  expect(summaryCleaning("Academy<p> Scholars!")).toBe("Academy Scholars!");
});
