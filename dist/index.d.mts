/**
 * checks if argument recieved is an odd number
 * @param {string} input
 * @returns {string}
 * @example
 * capitalise("november") // NOVEMBER
 * capitalise("monday") // MONDAY
 * */
declare const capitalise: (input: string) => string;

/**
 * Abbreviates names by taking the first letter of each name
 * @param {string} names - The names to be abbreviated
 * @param {number} numToAbbreviate - The number of names to abbreviate (default is 0, meaning abbreviate all)
 * @returns {string} - The abbreviated names
 * @example
 * abbreviate("november") // N
 * abbreviate("monday") // M
 */
declare const abbreviate: (names: string, numToLeave?: number) => string;

/**
 * Adds an ellipsis to sentences that exceed a specified maximum length
 * @param {string} sentence - The sentence to be shortened
 * @param {number} maxLength - The maximum length of the sentence before adding an ellipsis
 * @returns {string} - The shortened sentence with an ellipsis if necessary
 * @example
 * addEllipsis("This is a very long string that needs to be shortened", 30) // Returns: "This is a very long string ..."
 */
declare const addEllipsis: (sentence: string, maxLength: number) => string;

/**
 * Converts a sentence to title case by capitalizing the first letter of each word
 * @param {string} sentence - The sentence to be converted to title case
 * @returns {string} - The sentence in title case
 * @example
 * toTitleCase("hello world") // Returns: "Hello World"
 * toTitleCase("a fox jumped over the lazy dog") // Returns: "A Fox Jumped Over The Lazy Dog"
 */
declare const toTitleCase: (sentence: string) => string;

export { abbreviate, addEllipsis, capitalise, toTitleCase };
