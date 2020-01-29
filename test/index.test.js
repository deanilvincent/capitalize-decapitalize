const assert = require("chai").assert;

const app = require("../index");

const { validateParams } = require("../utils");

describe("Index file test", () => {
  it("Should return capitalize every first letter of the word if letter case option is C", () => {
    assert.equal(app.letterCase("c", "just saying"), "Just Saying");
  });

  it("Should return decapitalize every first letter of the word if letter case option is D", () => {
    assert.equal(app.letterCase("d", "Just Saying"), "just saying");
  });

  it("Should return uppercase all word if letter case option is UC", () => {
    assert.equal(app.letterCase("uc", "just saying"), "JUST SAYING");
  });

  it("Should return lowercase all word if letter case option is LC", () => {
    assert.equal(app.letterCase("lc", "JUST SAYING"), "just saying");
  });

  it("Should return type of string", ()=>{
      assert.typeOf(app.letterCase("uc", "just saying"), 'string')
  })
});

describe("Util index file test", () => {
  it("Should return undefined if lettercase is empty", () => {
    assert.equal(validateParams("", "hello"), undefined);
  });

  it("Should return undefined if value is empty", () => {
    assert.equal(validateParams("lc", ""), undefined);
  });

  it("Should return undefined if params are empty", () => {
    assert.equal(validateParams(), undefined);
  });

  it("Should return undefined if lettercase is not found in the given options", () => {
    assert.equal(validateParams("l", "Hello"), undefined);
  });
});
