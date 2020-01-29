exports.validateParams = (letterCase, value) => {
  if (!letterCase) {
    console.error("Letter case param is empty");
    return undefined;
  }

  if (!value) {
    console.error("Value param option is empty");
    return undefined;
  }

  letterCase = letterCase.toLowerCase();

  if (
    letterCase !== "c" &&
    letterCase !== "d" &&
    letterCase !== "uc" &&
    letterCase !== "lc"
  ) {
    console.error(
      "Letter case param not found. Available options: C, D, UC, LC"
    );
    return undefined;
  }
};
