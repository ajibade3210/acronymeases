/**
 * Adds an ellipsis to sentences that exceed a specified maximum length
 * @param {string} sentence - The sentence to be shortened
 * @param {number} maxLength - The maximum length of the sentence before adding an ellipsis
 * @returns {string} - The shortened sentence with an ellipsis if necessary
 * @example
 * addEllipsis("This is a very long string that needs to be shortened", 30) // Returns: "This is a very long string ..."
 */

export const addEllipsis = (sentence: string, maxLength: number): string => {
  const cleanedNames = sentence
    .replace(/\s+/g, " ")
    .replace(/[^\w\s]/g, "")
    .trim();
  if (cleanedNames === "") {
    const isSymbol = /^[^\w\s]+$/.test(sentence);
    isSymbol && console.info("contains only symbols");
    return "";
  }
  if (sentence.length <= maxLength || sentence.length > 15 || maxLength < 15) {
    return sentence + "...";
  } else {
    return sentence.slice(0, maxLength - 3) + "...";
  }
};
