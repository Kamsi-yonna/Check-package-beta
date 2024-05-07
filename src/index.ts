// import * as stringUtils from "../src/string";
// import * as arrayUtils from "../src/array";
// import * as dateUtils from "../src/date";
// import * as numberUtils from "../src/number";
// import * as objectUtils from "../src/object";

// import { trim } from "../dist";

// export const sampleUtils = {
//   capitalize: stringUtils.capitalize,
//   generateUuid: stringUtils.generateUuid,
//   initials: stringUtils.initials,
//   randomStr: stringUtils.randomStr,
//   removeUnderscores: stringUtils.removeUnderscores,
//   replaceAll: stringUtils.replaceAll,
//   toLowerCase: stringUtils.toLowerCase,
//   toUpperCase: stringUtils.toUpperCase,
//   trim: stringUtils.trim,
//   truncate: stringUtils.truncate,

//   isArr: arrayUtils.isArr,
//   isArrEmpty: arrayUtils.isArrEmpty,
//   pushOrUpdate: arrayUtils.pushOrUpdate,
//   pushUniqueValue: arrayUtils.pushUniqueValue,

//   formatDate: dateUtils.formatDate,
//   fromNow: dateUtils.fromNow,
//   toNow: dateUtils.toNow,

//   addSeparators: numberUtils.addSeparators,
//   addUnit: numberUtils.addUnit,
//   ensureNumber: numberUtils.ensureNumber,
//   formatNumber: numberUtils.formatNumber,
//   numberEmptyState: numberUtils.numberEmptyState,
//   parseFormat: numberUtils.parseFormat,
//   parseNumber: numberUtils.parseNumber,
//   toFixed: numberUtils.toFixed,

//   deepClone: objectUtils.deepClone,
//   hasKeysAndValues: objectUtils.hasKeysAndValues,
//   parseJSON: objectUtils.parseJSON,
//   sortByKeyLength: objectUtils.sortByKeyLength,
//   parseNumValues: objectUtils.parseNumValues,
//   querylize: objectUtils.querylize,
//   removeEmptyKeys: objectUtils.removeEmptyKeys,
//   removeKeys: objectUtils.removeKeys,
//   renameKey: objectUtils.renameKey,
//   renameKeys: objectUtils.renameKeys,
//   reserveKeys: objectUtils.reserveKeys,
//   sanitizeQuery: objectUtils.sanitizeQuery,
// };

export {
  capitalize,
  generateUuid,
  initials,
  randomStr,
  removeUnderscores,
  replaceAll,
  toLowerCase,
  toUpperCase,
  trim,
} from "../src/string";

export { isArr, isArrEmpty, pushOrUpdate, pushUniqueValue } from "../src/array";

export { formatDate, fromNow, toNow } from "../src/date";

export {
  addSeparators,
  addUnit,
  ensureNumber,
  formatNumber,
  numberEmptyState,
  parseFormat,
  parseNumber,
  toFixed,
} from "../src/number";

export {
  deepClone,
  hasKeysAndValues,
  parseJSON,
  sortByKeyLength,
  parseNumValues,
  querylize,
  removeEmptyKeys,
  removeKeys,
  renameKey,
  renameKeys,
  reserveKeys,
  sanitizeQuery,
} from "../src/object";
