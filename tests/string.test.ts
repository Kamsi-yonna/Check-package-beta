// // const { randomStr } = require("./randomStr");
// import {
//   capitalize,
//   toUpperCase,
//   toLowerCase,
//   trim,
//   removeUnderscores,
//   replaceAll,
//   randomStr,
//   initials,
//   initials,
//   toFullUrl,
// } from "../src/string";

// //* tests for random string
// describe("Random String function", () => {
//   test("should generate a random string with default options", () => {
//     const result = randomStr();
//     expect(result).toHaveLength(12); // Check if the length of the generated string is 12
//     expect(typeof result).toBe("string"); // Check if the result is a string
//   });

//   test("should generate a random string with custom options", () => {
//     const options = {
//       alphabet: false,
//       number: true,
//       length: 8,
//       special: true,
//       specialChars: "!@#$%",
//       case: "upper",
//     };
//     const result = randomStr(options);
//     expect(result).toHaveLength(8); // Check if the length of the generated string is 8
//     expect(typeof result).toBe("string"); // Check if the result is a string
//   });

//   test("should generate a random string with only numbers", () => {
//     const options = {
//       alphabet: false,
//       number: true,
//       length: 10,
//       special: false,
//       specialChars: "",
//       case: "any",
//     };
//     const result = randomStr(options);
//     expect(result).toMatch(/^[0-9]+$/); // Check if the result contains only numbers
//     expect(result).toHaveLength(10); // Check if the length of the generated string is 10
//   });
// });

import * as stringFunctions from "../src/string";

//* tests for capitalize function
describe("Capitalize function", () => {
  test("should capitalize the first letter of a string", () => {
    const result = stringFunctions.capitalize("hello world");
    expect(result).toBe("Hello world");
  });

  test("should capitalize the first letter of a single-character string", () => {
    const result = stringFunctions.capitalize("a");
    expect(result).toBe("A");
  });

  test("should not modify the case of the rest of the string", () => {
    const result = stringFunctions.capitalize("HeLLO wORLd");
    expect(result).toBe("HeLLO wORLd");
  });
});

//* tests for toUpperCase function
describe("toUpperCase function", () => {
  test("should convert a string to uppercase", () => {
    const result = stringFunctions.toUpperCase("hello world");
    expect(result).toBe("HELLO WORLD");
  });

  test("should preserve the case of a string that is already uppercase", () => {
    const result = stringFunctions.toUpperCase("HELLO WORLD");
    expect(result).toBe("HELLO WORLD");
  });
});

//* tests for lower case function
describe("toLowerCase function", () => {
  test("should convert a string to lowercase", () => {
    const result = stringFunctions.toLowerCase("Hello World");
    expect(result).toBe("hello world");
  });

  test("should preserve the case of a string that is already lowercase", () => {
    const result = stringFunctions.toLowerCase("hello world");
    expect(result).toBe("hello world");
  });

  test("should handle mixed case strings correctly", () => {
    const result = stringFunctions.toLowerCase("HeLLo WoRLd");
    expect(result).toBe("hello world");
  });
});

//* tests for trim function
describe("trim function", () => {
  test("should remove leading and trailing whitespace from a string", () => {
    const result = stringFunctions.trim("   Hello World   ");
    expect(result).toBe("Hello World");
  });

  test("should handle strings with only leading whitespace", () => {
    const result = stringFunctions.trim("   Hello World");
    expect(result).toBe("Hello World");
  });

  test("should handle strings with only trailing whitespace", () => {
    const result = stringFunctions.trim("Hello World   ");
    expect(result).toBe("Hello World");
  });

  test("should handle strings with only whitespace", () => {
    const result = stringFunctions.trim("   ");
    expect(result).toBe("");
  });
});

//* test for truncate function
describe("truncate function", () => {
  test("should truncate a string to the specified length with an ellipsis", () => {
    const result = stringFunctions.truncate("Hello, world!", 5);
    expect(result).toBe("Hell...");
  });

  test("should return the original string if it is shorter than the specified length", () => {
    const result = stringFunctions.truncate("Hi", 5);
    expect(result).toBe("Hi");
  });

  test("should handle strings with a length equal to the specified length", () => {
    const result = stringFunctions.truncate("Hello", 5);
    expect(result).toBe("Hello");
  });

  test("should handle strings with a length much longer than the specified length", () => {
    const result = stringFunctions.truncate(
      "This is a very long string that should be truncated with an ellipsis",
      20
    );
    expect(result).toBe("This is a very long...");
  });
});

//* tests for removeUnderscores function
describe("removeUnderscores function", () => {
  test("should remove underscores and replace them with spaces", () => {
    const result = stringFunctions.removeUnderscores("hello_world");
    expect(result).toBe("hello world");
  });

  test("should handle strings with multiple underscores", () => {
    const result = stringFunctions.removeUnderscores(
      "hello_world_of_javascript"
    );
    expect(result).toBe("hello world of javascript");
  });

  test("should handle strings starting and ending with underscores", () => {
    const result = stringFunctions.removeUnderscores("_helloworld_");
    expect(result).toBe(" helloworld ");
  });
});

//* tests for replaceAll function
describe("replaceAll function", () => {
  test("should replace all occurrences of a string in a given input", () => {
    const result = stringFunctions.replaceAll(
      "hello world",
      "world",
      "javascript"
    );
    expect(result).toBe("hello javascript");
  });

  test("should handle multiple occurrences of the search string", () => {
    const result = stringFunctions.replaceAll(
      "hello world, hello world",
      "world",
      "javascript"
    );
    expect(result).toBe("hello javascript, hello javascript");
  });
});

//* tests for initials function
describe("initials function", () => {
  test("should generate initials from a full name", () => {
    const result = stringFunctions.initials("John Doe");
    expect(result).toBe("J.D");
  });

  test("should handle a single name", () => {
    const result = stringFunctions.initials("Alice");
    expect(result).toBe("A");
  });

  test("should handle empty input", () => {
    const result = stringFunctions.initials("");
    expect(result).toBe("");
  });

  test("should handle multiple names with spaces", () => {
    const result = stringFunctions.initials("John Jacob Jingleheimer Schmidt");
    expect(result).toBe("J.J.J.S");
  });

  test("should handle names with middle initials", () => {
    const result = stringFunctions.initials("John A. Doe");
    expect(result).toBe("J.A.D");
  });

  test("should handle names with special characters", () => {
    const result = stringFunctions.initials("Mary-Ann Johnson");
    expect(result).toBe("M.J");
  });
});

//* tests for random string function
describe("Random String function", () => {
  test("should generate a random string with default options", () => {
    const result = stringFunctions.randomStr();
    expect(result).toHaveLength(12);
    expect(typeof result).toBe("string");
  });

  test("should generate a random string with custom options", () => {
    const options = {
      alphabet: false,
      number: true,
      length: 8,
      special: true,
      specialChars: "!@#$%",
      case: "upper",
    };
    const result = stringFunctions.randomStr(options);
    expect(result).toHaveLength(8);
    expect(typeof result).toBe("string");
  });

  test("should generate a random string with only numbers", () => {
    const options = {
      alphabet: false,
      number: true,
      length: 10,
      special: false,
      specialChars: "",
      case: "any",
    };
    const result = stringFunctions.randomStr(options);
    expect(result).toMatch(/^[0-9]+$/);
    expect(result).toHaveLength(10);
  });
});

//* tests for generateUuid function
describe("generateUuid", () => {
  it("should generate a UUID with the correct format", () => {
    const uuid = stringFunctions.generateUuid();
    expect(uuid).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
    );
  });

  it("should generate a different UUID on each call", () => {
    const uuid1 = stringFunctions.generateUuid();
    const uuid2 = stringFunctions.generateUuid();
    expect(uuid1).not.toEqual(uuid2);
  });
});
