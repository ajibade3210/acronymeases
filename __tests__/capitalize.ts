import { capitalise } from "../src/index"; // Replace 'yourFile' with the correct path to your file

describe("capitalise", () => {
  it("should capitalize strings correctly", () => {
    expect(capitalise("november")).toBe("NOVEMBER");
    expect(capitalise("monday")).toBe("MONDAY");
  });

  it("should handle empty input", () => {
    expect(capitalise("")).toBe("");
  });

  it("should handle input with only whitespace", () => {
    expect(capitalise("   ")).toBe("");
  });

  it("should handle input with mixed case", () => {
    expect(capitalise("HeLLo")).toBe("HELLO");
  });

  it("should handle input with numbers", () => {
    expect(capitalise("123abc")).toBe("123ABC");
  });

  it("should handle input with special characters", () => {
    expect(capitalise("@#$%^&*")).toBe("");
  });
});
