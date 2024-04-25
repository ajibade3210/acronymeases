import { abbreviate } from "../src/index"; // Replace 'yourFile' with the correct path to your file

describe("abbreviate", () => {
  it("should abbreviate names correctly", () => {
    expect(abbreviate("november")).toBe("N");
    expect(abbreviate("monday")).toBe("M");
  });

  it("should abbreviate names with a specified number of letters to leave", () => {
    expect(abbreviate("openai", 4)).toBe("Openai");
    expect(abbreviate("openai", 5)).toBe("Openai");
  });

  it("should abbreviate names with known company suffixes", () => {
    expect(abbreviate("johnson PLC")).toBe("J PLC");
    expect(abbreviate("smith INC", 1)).toBe("Smith INC");
  });

  it("should handle empty input", () => {
    expect(abbreviate("")).toBe("");
  });

  it("should handle input with only whitespace", () => {
    expect(abbreviate("   ")).toBe("");
  });

  it("should handle input with multiple spaces between names", () => {
    expect(abbreviate("hello   world")).toBe("HW");
  });

  it("should handle input with punctuation marks", () => {
    expect(abbreviate("hello, world!")).toBe("HW");
  });

  it("should handle input with numbers", () => {
    expect(abbreviate("123 abc")).toBe("1A");
  });

  it("should handle input with special characters", () => {
    expect(abbreviate("@#$%^&*")).toBe("");
  });
});
