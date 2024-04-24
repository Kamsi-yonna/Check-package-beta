/**
 * Converts the first letter of a string to uppercase
 * @param str The input string
 * @returns The input string with the first letter capitalized
 */

export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Converts a string to uppercase
 * @param str The input string
 * @returns The string in uppercase
 */

export const toUpperCase = (str: string) => str.toUpperCase();

/**
 * Converts a string to lowercase
 * @param str The input string
 * @returns The string in lowercase
 */

export const toLowerCase = (str: string) => str.toLowerCase();

/**
 * Removes whitespace from the beginning and end of a string.
 * @param str - The input string containing leading and trailing whitespace.
 * @returns The input string with leading and trailing whitespace removed.
 */

export const trim = (str: string): string => str.trim();

/**
 * Truncates a given string to a specified length and adds an ellipsis at the end.
 * @param str The input string.
 * @param length The maximum length of the output string.
 * @returns The truncated string with an ellipsis added at the end.
 */

export const truncate = (str: string, length: number): string =>
  str.length > length ? `${str.substring(0, length - 1)}...` : str;

/**
 * Removes underscore(s) from a string
 * @param str The input string containing underscore(s)
 * @returns The input string with underscores replaced by spaces.
 */

export const removeUnderscores = (str: string): string =>
  str.replace(/_/g, " ");

/**
 * Replaces all occurrences of a string in given input.
 * @param str - The input string in which replacements will be made.
 * @param search - The string to search for.
 * @param replace - The string to replace with.
 * @returns The input string with all occurrences of the search string replaced by the replace string.
 */

export const replaceAll = (
  str: string,
  search: string,
  replace: string
): string => str.split(search).join(replace);

/**
 * Generates initials from a given string.
 * @param str The input string containing names.
 * @returns The initials generated from the input string.
 */

export const initials = (str: string): string => {
  const names = str ? str.trim().split(/\s+/) : [];

  if (names.length > 0) {
    const initials = names.map((name) => name[0].toUpperCase()).join(".");
    return initials;
  }

  return "";
};

/**
 * Generates a random string based on the given options.
 * @param options - The options for generating the random string.
 * @returns A random string.
 */

const defaultOptions = {
  alphabet: true,
  number: true,
  length: 12,
  special: true,
  specialChars: "~`!@#$%^&*()_-+={}[]:;?/>.<,",
  case: "any", //any, upper & lower
};

/**
 * Generates a random string based on the given options.
 * @param options - The options for generating the random string.
 * @returns A random string.
 */

export const randomStr = (
  options: Partial<typeof defaultOptions> = defaultOptions
): string => {
  const possibleAlphas = options.alphabet
    ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    : "";
  const possibleNumbers = options.number ? "0123456789" : "";
  const possbileSpecials = options.special ? options.specialChars : "";
  // const possible = possibleAlphas + possibleNumbers + possbileSpecials;
  const possible = `${possibleAlphas}${possibleNumbers}${possbileSpecials}`;
  let result = "";
  for (let i = 0; i < options.length!; i++)
    result += possible.charAt(Math.floor(Math.random() * possible.length));

  return result;
};

/**
 * Generates a Universally Unique Identifier (UUID).
 * @returns {string} - The generated UUID.
 */

export const generateUuid = (): string => {
  const hexDigits = "0123456789abcdef";
  let uuid = "";

  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) uuid += "-";
    else if (i === 14) uuid += "4";
    else if (i === 19) uuid += hexDigits.charAt((Math.random() * 4) | 8);
    else uuid += hexDigits.charAt(Math.random() * 16);
  }

  return uuid;
};
