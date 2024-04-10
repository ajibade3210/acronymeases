import { capitalizeString } from "../src/index";

test("should return capitalize format of the string passed", () => {
  expect(capitalizeString("monday")).toBe("MONDAY");
});

test("should return capitalize format of the string passed", () => {
  expect(capitalizeString("november")).toBe("NOVEMBER");
});

test("should return empty string if no string passed", () => {
  expect(capitalizeString("")).toBe("");
});
