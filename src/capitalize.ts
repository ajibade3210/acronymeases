/**
 * checks if argument recieved is an odd number
 * @param {string} input
 * @returns {string}
 * @example
 * capitalizeString("november") // NOVEMBER
 * capitalizeString("monday") // MONDAY
 * */

export const capitalizeString = (input: string): string => {
  if (!input) return "";
  return input.toUpperCase();
};
