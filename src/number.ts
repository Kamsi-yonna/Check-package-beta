/**
 * Format a number to a fixed precision
 * @param num The number to be formatted
 * @param precision The number of decimal places to round to
 * @returns The formatted number as a string
 */

export const toFixed = (num: number, precision: number) =>
  (+`${Math.round(+`${num}e${precision}`)}e${-precision}`).toFixed(precision);

/**
 * Parse a number string or number and return its float, integer, and sign
 * @param num The input number or number string to be parsed
 * @returns An object with the following properties:
 *   - float: The absolute value of the parsed float
 *   - int: The absolute value of the parsed integer
 *   - sign: The sign of the number as a string ("-" or "")
 */

export const parseNumber = (num: string | number) => ({
  float: Math.abs(Number.parseFloat(num.toString())),
  int: Math.abs(Number.parseInt(num.toString())),
  sign: Math.sign(Number(num.toString())) < 0 ? "-" : "",
});

/**
 * Parse a formatted string and extract its sign, base, decimals, and unit
 * @param {string | number} str - The input string or number to be parsed (default: "0")
 * @returns {object} An object with the following properties:
 *   - sign: The sign of the number ("+" or "-")
 *   - base: The base number part of the string
 *   - decimals: The number of decimal places in the string
 *   - unit: The unit or additional characters in the string
 */

export const parseFormat = (str: string | number = "0") => {
  const regex = /^([+-]?)(\d+(?:,\d{3})*)?(\.\d+)?([a-zA-Z\s]*)/;
  const match = String(str).match(regex);

  if (!match) {
    return {
      sign: "",
      base: "",
      decimals: 0,
      unit: "",
    };
  }

  const [, sign, base, decimals, unit] = match;
  const decimalCount = decimals ? decimals.length - 1 : 0;

  return {
    sign: sign || "",
    base: base ? base.replace(/,/g, "") : "",
    decimals: decimalCount,
    unit: unit || "",
  };
};

/**
 * Add a unit to a number based on the provided configuration
 * @param {number} num - The number to be formatted
 * @param {Record<string, any>} config - The configuration object with the following properties:
 *   - decimals: The number of decimal places to display
 *   - unit: The unit to be added, with "a" representing the SI prefix
 * @returns {string} The formatted number with the unit
 */

export const addUnit = (num: number, config: Record<string, any>) => {
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
  ];

  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (Math.abs(num) >= si[i].value) break;
  }

  const numToFixed = Math.abs(num / si[i].value)
    .toFixed(config.decimals)
    .replace(rx, "$1");

  return (
    (num < 0 ? "-" : "") + numToFixed + config.unit.replace("a", si[i].symbol)
  );
};

/**
 * Add thousands and decimal separators to a number string based on the provided configuration
 * @param {string} num - The input number string to be formatted
 * @param {string} base - The base format for adding separators ("", "0,0")
 * @param {string} thousandsSeparator - The character to use as the thousands separator
 * @param {string} decimalSeparator - The character to use as the decimal separator
 * @returns {string} The formatted number string with separators added
 */

export const addSeparators = (
  num: string,
  base: string,
  thousandsSeparator: string,
  decimalSeparator: string
) => {
  const regex = /(\d+)(\d{3})/;
  const string = num.toString();
  const x = string.split(".");
  let x1 = x[0];
  const x2 = x.length > 1 ? decimalSeparator + x[1] : "";

  switch (base) {
    case "":
      x1 = "";
      break;
    case "0,0":
      while (regex.test(x1))
        x1 = x1.replace(regex, `$1${thousandsSeparator}$2`);

      break;
  }

  return x1 + x2;
};

/**
 * 123456 => '123,456'
 *
 * @params {string, number} options
 * @params {string} format
 * @params {object} options
 *
 */

export const formatNumber = (
  value: string | number,
  format: string = "0",
  options: Record<string, any> = {}
) => {
  if (!value) return value;

  const config = parseFormat(format);
  const number = parseNumber(value);
  const thousandsSeparator = options.thousandsSeparator || ",";
  const decimalSeparator = options.decimalSeparator || ".";

  config.sign = config.sign || number.sign;

  if (config.unit) {
    const numberWithUnit = addUnit(number.float, config);
    return config.sign + numberWithUnit;
  }

  const rounded = toFixed(number.float, config.decimals);
  const parts = rounded.split(".");
  let output = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);

  if (parts.length > 1) {
    // Round the decimal part to the specified number of decimal places
    const roundedDecimal =
      Math.round(parseFloat("0." + parts[1]) * Math.pow(10, config.decimals)) /
      Math.pow(10, config.decimals);
    // Convert the rounded decimal back to string
    const roundedDecimalString = roundedDecimal
      .toFixed(config.decimals)
      .slice(2);
    output +=
      decimalSeparator + roundedDecimalString.padEnd(config.decimals, "0");
  } else if (config.decimals > 0) {
    // If there are no decimal parts but decimal places are specified, add them with custom decimal separator
    output += decimalSeparator + "0".repeat(config.decimals);
  }

  return config.sign + output;
};

/**
 * @returns {number} Returns zero or provided min instead of NAN or just return number
 */

export const ensureNumber = (value: any, min: number | null = null): number => {
  value = Number.isNaN(value) ? 0 : value;
  if (min) value = Math.max(min, value);

  return value;
};

/**
 * @param {string} value
 * @returns {any} Returns a default value set for when a value is zero or NAN.
 */

export const numberEmptyState = (
  value: string | number,
  format: any = "---"
): any => (value === "0" || value === "NaN" ? format : value);
