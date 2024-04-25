/**
 * Converts a sentence to title case by capitalizing the first letter of each word
 * @param {string} sentence - The sentence to be converted to title case
 * @returns {string} - The sentence in title case
 * @example
 * toTitleCase("hello world") // Returns: "Hello World"
 * toTitleCase("a fox jumped over the lazy dog") // Returns: "A Fox Jumped Over The Lazy Dog"
 */

export const toTitleCase = (sentence: string): string => {
  return sentence.toLowerCase().replace(/\b\w/g, (char: string) => {
    return char.toUpperCase();
  });
};
