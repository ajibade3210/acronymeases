// src/capitalize.ts
var capitalise = (input) => {
  const cleanedNames = input.replace(/\s+/g, " ").replace(/[^\w\s]/g, "").trim();
  if (cleanedNames === "") {
    const isSymbol = /^[^\w\s]+$/.test(input);
    isSymbol && console.info("contains only symbols");
    return "";
  }
  if (!input)
    return "";
  return input.toUpperCase();
};

// src/abbreviate.ts
var abbreviate = (names, numToLeave = 0) => {
  const cleanedNames = names.replace(/\s+/g, " ").replace(/[^\w\s]/g, "").trim();
  const sys = names.replace(/[^\w\s]/g, "");
  if (cleanedNames === "") {
    const isSymbol = /^[^\w\s]+$/.test(names);
    isSymbol && console.info("contains only symbols");
    return "";
  }
  const nameArray = cleanedNames.split(" ");
  const isKnownCompany = /(PLC|LTD|INC|SON|SONS)$/i.test(
    nameArray[nameArray.length - 1]
  );
  let suffix;
  if (isKnownCompany) {
    suffix = nameArray.pop();
  }
  if (numToLeave > nameArray.length) {
    numToLeave = nameArray.length;
  }
  const abbreviatedNames = nameArray.map(
    (name, index) => {
      return index >= numToLeave ? name[0].toUpperCase() + "" : name.charAt(0).toUpperCase() + name.slice(1);
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

// src/ellipsis.ts
var addEllipsis = (sentence, maxLength) => {
  const cleanedNames = sentence.replace(/\s+/g, " ").replace(/[^\w\s]/g, "").trim();
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

// src/toTitleCase.ts
var toTitleCase = (sentence) => {
  return sentence.toLowerCase().replace(/\b\w/g, (char) => {
    return char.toUpperCase();
  });
};
export {
  abbreviate,
  addEllipsis,
  capitalise,
  toTitleCase
};
