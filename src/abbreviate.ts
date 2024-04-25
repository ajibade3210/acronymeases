/**
 * Abbreviates names by taking the first letter of each name
 * @param {string} names - The names to be abbreviated
 * @param {number} numToAbbreviate - The number of names to abbreviate (default is 0, meaning abbreviate all)
 * @returns {string} - The abbreviated names
 * @example
 * abbreviate("november") // N
 * abbreviate("monday") // M
 */

export const abbreviate = (names: string, numToLeave: number = 0): string => {
  const cleanedNames = names
    .replace(/\s+/g, " ")
    .replace(/[^\w\s]/g, "")
    .trim();
  const sys = names.replace(/[^\w\s]/g, "");
  if (cleanedNames === "") {
    const isSymbol = /^[^\w\s]+$/.test(names);
    isSymbol && console.info("contains only symbols");
    return "";
  }

  const nameArray: string[] = cleanedNames.split(" ");

  const isKnownCompany: boolean = /(PLC|LTD|INC|SON|SONS)$/i.test(
    nameArray[nameArray.length - 1]
  );

  let suffix: string | undefined;
  if (isKnownCompany) {
    suffix = nameArray.pop();
  }

  if (numToLeave > nameArray.length) {
    numToLeave = nameArray.length;
  }

  const abbreviatedNames: string[] = nameArray.map(
    (name: string, index: number) => {
      return index >= numToLeave
        ? name[0].toUpperCase() + ""
        : name.charAt(0).toUpperCase() + name.slice(1);
    }
  );

  let result = "";
  let i = 0;
  for (; i < abbreviatedNames.length - 1; i++) {
    if (abbreviatedNames[i].length === 1) {
      result += abbreviatedNames[i];
    } else {
      result += abbreviatedNames[i] + " ";
    }
  }
  result += abbreviatedNames[i];

  if (isKnownCompany && suffix) {
    result += " " + suffix;
  }

  return result;
};
