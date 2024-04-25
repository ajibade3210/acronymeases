/**
 * checks if argument recieved is an odd number
 * @param {string} input
 * @returns {string}
 * @example
 * capitalise("november") // NOVEMBER
 * capitalise("monday") // MONDAY
 * */

export const capitalise = (input: string): string => {
  const cleanedNames = input
    .replace(/\s+/g, " ")
    .replace(/[^\w\s]/g, "")
    .trim();
  if (cleanedNames === "") {
    const isSymbol = /^[^\w\s]+$/.test(input);
    isSymbol && console.info("contains only symbols");
    return "";
  }

  if (!input) return "";
  return input.toUpperCase();
};
