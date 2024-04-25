import { toTitleCase } from "../src/index"; // Replace 'yourFile' with the correct path to your file

describe("toTitleCase", () => {
  it("should convert a sentence to title case", () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
    expect(toTitleCase("a fox jumped over the lazy dog")).toBe(
      "A Fox Jumped Over The Lazy Dog"
    );
  });

//   it("should handle empty input", () => {
//     expect(toTitleCase("")).toBe("");
//   });

//   it("should handle input with only whitespace", () => {
//     expect(toTitleCase("   ")).toBe("");
//   });

//   it("should handle input with mixed case", () => {
//     expect(toTitleCase("HeLLo WoRLd")).toBe("Hello World");
//   });

//   it("should handle input with numbers", () => {
//     expect(toTitleCase("123 abc")).toBe("123 Abc");
//   });

//   it("should handle input with special characters", () => {
//     expect(toTitleCase("@#$%^&*")).toBe("@#$%^&*");
//   });
});
