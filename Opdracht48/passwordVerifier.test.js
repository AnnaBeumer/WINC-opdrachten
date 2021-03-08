const {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached,
} = require("./passwordVerifier.js");

test("Is not Null", function () {
  expect(isNotNull()).toBe(true);
  expect(isNotNull(null)).toBe(true);

});

test("Is shorter then 9 characters", function () {
  expect(hasRightLength("password")).toBe(true);
  expect(hasRightLength("passworddd")).toBe(false);
});

test("Has 1 or more uppercase character", function () {
  expect(hasUpperCaseCharacter("Password")).toBe(true);
  expect(hasUpperCaseCharacter("password")).toBe(false);
});

test("Has 1 or more lowercase character", function () {
  expect(hasLowerCaseCharacter("Password")).toBe(true);
  expect(hasLowerCaseCharacter("PASSWORD")).toBe(false);
});

test("Has 1 or more digits", function () {
  expect(hasDigit("Password1")).toBe(true);
  expect(hasDigit("Password")).toBe(false);
});

test("Has at least 3 true conditions", function () {
  expect(minimumConditionsReached([true, true, true, false])).toBe(true);
  expect(minimumConditionsReached([true, false, true, false])).toBe(false);
});

test("Verified password", function () {
  expect(verifyPassword("Password1")).toBe(true);
  expect(verifyPassword("passworddd1")).toBe(true);
  expect(verifyPassword("passworddd")).toBe(false);
  expect(verifyPassword("password")).toBe(true);
  expect(verifyPassword("PASSWORD")).toBe(false);
  expect(verifyPassword("Password")).toBe(true);
  expect(verifyPassword("a1")).toBe(true);
});
