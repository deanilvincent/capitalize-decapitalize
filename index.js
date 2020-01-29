module.exports = {
  letterCase: (letterCase, value) => {
    const { validateParams } = require("./utils");

    validateParams(letterCase, value);

    const upperCaseFirstLetter = str =>
      str.replace(/\b[a-z]/g, char => {
        return char.toUpperCase();
      });

    const lowerCaseFirstLetter = str =>
      str.replace(/\b[A-Z]/g, char => {
        return char.toLowerCase();
      });

    if (letterCase === "c") {
      value = upperCaseFirstLetter(value);
    }

    if (letterCase === "d") {
      value = lowerCaseFirstLetter(value);
    }

    if (letterCase === "uc") {
      value = value.toUpperCase();
    }

    if (letterCase === "lc") {
      value = value.toLowerCase();
    }

    return value;
  }
};
