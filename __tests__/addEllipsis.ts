import { addEllipsis } from "../src/index"; // Replace 'yourFile' with the correct path to your file

describe("addEllipsis", () => {
  it("should add an ellipsis if the sentence exceeds the maximum length", () => {
    const longSentence =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce luctus odio sed magna aliquam, ac aliquam nisi rutrum. Integer id leo nec nulla porttitor varius. Nam efficitur orci quis felis vestibulum, vel ultricies libero placerat. Phasellus at purus eget libero tempus vehicula. Vestibulum vestibulum nulla sit amet enim commodo, in efficitur velit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in fringilla libero. Quisque vehicula ut quam ut rutrum. Curabitur at erat consequat, ullamcorper quam a, viverra metus. Maecenas a justo sed nisi dapibus malesuada ac et metus. Sed sit amet urna non nunc consectetur eleifend. Donec vehicula luctus enim, quis ultricies odio pharetra at. Nam tincidunt eros quis feugiat condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed consequat, erat ac consectetur pellentesque, sapien libero placerat dolor, sit amet efficitur felis velit nec tellus. Nulla facilisi.";
    expect(addEllipsis(longSentence, 90)).toBe(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce luctus odio sed magna aliquam, ac aliquam nisi rutrum. Integer id leo nec nulla porttitor varius. Nam efficitur orci quis felis vestibulum, vel ultricies libero placerat. Phasellus at purus eget libero tempus vehicula. Vestibulum vestibulum nulla sit amet enim commodo, in efficitur velit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in fringilla libero. Quisque vehicula ut quam ut rutrum. Curabitur at erat consequat, ullamcorper quam a, viverra metus. Maecenas a justo sed nisi dapibus malesuada ac et metus. Sed sit amet urna non nunc consectetur eleifend. Donec vehicula luctus enim, quis ultricies odio pharetra at. Nam tincidunt eros quis feugiat condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed consequat, erat ac consectetur pellentesque, sapien libero placerat dolor, sit amet efficitur felis velit nec tellus. Nulla facilisi...."
    );
  });
  it("should return the original sentence if it does not exceed the maximum length", () => {
    const shortSentence = "Short sentence";
    expect(addEllipsis(shortSentence, 30)).toBe(shortSentence + "...");
  });
  it("should handle empty input", () => {
    expect(addEllipsis("", 10)).toBe("");
  });
  it("should handle input with only whitespace", () => {
    expect(addEllipsis("   ", 10)).toBe("");
  });
  it("should handle input with maximum length less than 3", () => {
    const sentence = "Test";
    expect(addEllipsis(sentence, 2)).toBe("Test...");
  });
  it("should handle input with negative maximum length", () => {
    const longSentence =
      "This is a very long string that needs to be shortened";
    expect(addEllipsis(longSentence, -10)).toBe(
      "This is a very long string that needs to be shortened..."
    );
  });
});
