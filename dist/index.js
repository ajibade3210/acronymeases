"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  abbreviate: () => abbreviate,
  addEllipsis: () => addEllipsis,
  capitalise: () => capitalise,
  toTitleCase: () => toTitleCase
});
module.exports = __toCommonJS(src_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  abbreviate,
  addEllipsis,
  capitalise,
  toTitleCase
});
