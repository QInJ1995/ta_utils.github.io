'use strict'

// 核心
const TaUtils = require('./ctor')

// 对象相关的方法
const assign = require('./assign')
const objectEach = require('./objectEach')
const lastObjectEach = require('./lastObjectEach')
const objectMap = require('./objectMap')
const merge = require('./merge')

// 数组相关的方法
const map = require('./map')
const some = require('./some')
const every = require('./every')
const includeArrays = require('./includeArrays')
const arrayEach = require('./arrayEach')
const lastArrayEach = require('./lastArrayEach')
const uniq = require('./uniq')
const union = require('./union')
const toArray = require('./toArray')
const sortBy = require('./sortBy')
const orderBy = require('./orderBy')
const shuffle = require('./shuffle')
const sample = require('./sample')
const slice = require('./slice')
const filter = require('./filter')
const findKey = require('./findKey')
const includes = require('./includes')
const find = require('./find')
const findLast = require('./findLast')
const reduce = require('./reduce')
const copyWithin = require('./copyWithin')
const chunk = require('./chunk')
const zip = require('./zip')
const unzip = require('./unzip')
const zipObject = require('./zipObject')
const flatten = require('./flatten')
const pluck = require('./pluck')
const invoke = require('./invoke')
const toArrayTree = require('./toArrayTree')
const toTreeArray = require('./toTreeArray')
const findTree = require('./findTree')
const eachTree = require('./eachTree')
const mapTree = require('./mapTree')
const filterTree = require('./filterTree')
const searchTree = require('./searchTree')
const arrayIndexOf = require('./arrayIndexOf')
const arrayLastIndexOf = require('./arrayLastIndexOf')
const difference = require('./difference').default

// 基础方法
const hasOwnProp = require('./hasOwnProp')
const isArray = require('./isArray')
const isNull = require('./isNull')
const isNumberNaN = require('./isNaN')
const isUndefined = require('./isUndefined')
const isFunction = require('./isFunction')
const isObject = require('./isObject')
const isString = require('./isString')
const isPlainObject = require('./isPlainObject')
const isLeapYear = require('./isLeapYear')
const isDate = require('./isDate')
const eqNull = require('./eqNull')
const each = require('./each')
const indexOf = require('./indexOf')
const lastIndexOf = require('./lastIndexOf')
const keys = require('./keys')
const values = require('./values')
const clone = require('./clone')
const cloneDeep = require('./cloneDeep')
const getSize = require('./getSize')
const lastEach = require('./lastEach')
const remove = require('./remove')
const clear = require('./clear')
const isNumberFinite = require('./isFinite')
const isFloat = require('./isFloat')
const isInteger = require('./isInteger')
const isBoolean = require('./isBoolean')
const isNumber = require('./isNumber')
const isRegExp = require('./isRegExp')
const isError = require('./isError')
const isTypeError = require('./isTypeError')
const isEmpty = require('./isEmpty')
const isEmptyValue = require('./isEmptyValue')
const isSymbol = require('./isSymbol')
const isArguments = require('./isArguments')
const isElement = require('./isElement')
const isDocument = require('./isDocument')
const isWindow = require('./isWindow')
const isFormData = require('./isFormData')
const isMap = require('./isMap')
const isWeakMap = require('./isWeakMap')
const isSet = require('./isSet')
const isWeakSet = require('./isWeakSet')
const isMatch = require('./isMatch')
const isEqual = require('./isEqual')
const isEqualWith = require('./isEqualWith')
const getType = require('./getType')
const uniqueId = require('./uniqueId')
const findIndexOf = require('./findIndexOf')
const findLastIndexOf = require('./findLastIndexOf')
const toStringJSON = require('./toStringJSON')
const toJSONString = require('./toJSONString')
const entries = require('./entries')
const pick = require('./pick')
const omit = require('./omit')
const first = require('./first')
const last = require('./last')
const has = require('./has')
const get = require('./get')
const set = require('./set')
const groupBy = require('./groupBy')
const countBy = require('./countBy')
const range = require('./range')
const destructuring = require('./destructuring')

// 数值相关方法
const random = require('./random')
const max = require('./max')
const min = require('./min')
const commafy = require('./commafy')
const round = require('./round')
const ceil = require('./ceil')
const floor = require('./floor')
const toFixed = require('./toFixed')
const toInteger = require('./toInteger')
const toNumber = require('./toNumber')
const toNumberString = require('./toNumberString')
const add = require('./add')
const subtract = require('./subtract')
const multiply = require('./multiply')
const divide = require('./divide')
const sum = require('./sum')
const mean = require('./mean')

// 日期相关的方法
const getWhatYear = require('./getWhatYear')
const getWhatMonth = require('./getWhatMonth')
const getWhatDay = require('./getWhatDay')
const toStringDate = require('./toStringDate')
const toDateString = require('./toDateString')
const now = require('./now')
const timestamp = require('./timestamp')
const isValidDate = require('./isValidDate')
const isDateSame = require('./isDateSame')
const getWhatWeek = require('./getWhatWeek')
const getYearDay = require('./getYearDay')
const getYearWeek = require('./getYearWeek')
const getMonthWeek = require('./getMonthWeek')
const getDayOfYear = require('./getDayOfYear')
const getDayOfMonth = require('./getDayOfMonth')
const getDateDiff = require('./getDateDiff')

// 字符串相关的方法
const padEnd = require('./padEnd')
const padStart = require('./padStart')
const repeat = require('./repeat')
const trim = require('./trim')
const trimRight = require('./trimRight')
const trimLeft = require('./trimLeft')
const escape = require('./escape')
const unescape = require('./unescape')
const camelCase = require('./camelCase')
const pascalCase = require('./pascalCase')
const kebabCase = require('./kebabCase')
const startsWith = require('./startsWith')
const endsWith = require('./endsWith')
const template = require('./template')
const toFormatString = require('./toFormatString')
const toValueString = require('./toValueString')
const checkPass=require("./checkPass")

// 函数相关的方法
const noop = require('./noop')
const property = require('./property')
const bind = require('./bind')
const once = require('./once')
const after = require('./after')
const before = require('./before')
const throttle = require('./throttle')
const debounce = require('./debounce')
const delay = require('./delay')

// 地址相关的方法
const { unserialize } = require('./unserialize')
const { getNowPageParam } = require('./getNowPageParam')
const { serialize } = require('./serialize')
const { objectToUrlParam } = require('./objectToUrlParam')
const parseUrl = require('./parseUrl')

// 浏览器相关的方法
const getBaseURL = require('./getBaseURL')
const locat = require('./locat')
const cookie = require('./cookie')
const browse = require('./browse')

const {
  stringToMoment,
  stringArrayToMomentArray,
  momentToString,
  momentArrayToStringArray,
  getMoment,
  dateToMoment,
  dateToString,
  momentToDate,
  isTime,
  isDateString,
  isDateTime,
  getCurDate,
  getCurDateMonth,
  getCurDateFullTime,
  getCurQuarter,
  getCurIssue,
  getCurDateYear,
  StringToDate,
  dateDiff,
  getCurDateTime,
  isMoment,
} = require('./moment')
// webstorage
const {
  createWebStorage,
  init,
} = require('./webStorages')
const createWebStorage = require('./createWebStorage').createWebStorage
const getStorage = require('./getStorage').getStorage
// sorter
const sorter = require('./sorter')
const {
  sortWithNumber,
  sortWithLetter,
  sortWithCharacter,
} = sorter
const sortArrayByCharacter = require('./sortWithCharacter').sortArrayByCharacter
const { default: pinyin } = require('./pinyin')
// lodop
const lodop = require('./getLodop')
// idcard
const idCard = require('./validate2ndIdCard')
const {
  validate2ndIdCard,
} = idCard
const hkIdVerify = require('./hkIdVerify').hkIdVerify
const macauIdCard = require('./macauIdCard').macauIdCard
// dom
const {
  getWidth,
  getStyle,
  getHeight,
} = require('./element')
// data
const {
  default: data,
  moneyFormat,
  cnMoneyFormat,
  floatAdd,
} = require('./data')
const {
  format,
  formatWithReq,
  formatWithIndex,
} = data
// cookies
const {
  getToken,
  getCookie,
  setCookie,
} = require('./cookies')
// browser
const {
  isIE,
  notSupported,
  isIE9,
  isIE10,
  isIE11,
  isChrome,
  isFireFox,
  isSafari,
  clientSystem,
  clientScreenSize,
  clientBrowser,
} = require('./browser')

const encryption = require('./encryption').default
const crypto = require('./crypto').default
const copyText = require('./clipboard').copyText

const uuid = require('./uuid').default

assign(TaUtils, {
  // object
  assign: assign,
  objectEach: objectEach,
  lastObjectEach: lastObjectEach,
  objectMap: objectMap,
  merge: merge,

  // array
  uniq: uniq,
  union: union,
  sortBy: sortBy,
  orderBy: orderBy,
  shuffle: shuffle,
  sample: sample,
  some: some,
  every: every,
  slice: slice,
  filter: filter,
  find: find,
  findLast: findLast,
  findKey: findKey,
  includes: includes,
  arrayIndexOf: arrayIndexOf,
  arrayLastIndexOf: arrayLastIndexOf,
  difference,
  map: map,
  reduce: reduce,
  copyWithin: copyWithin,
  chunk: chunk,
  zip: zip,
  unzip: unzip,
  zipObject: zipObject,
  flatten: flatten,
  toArray: toArray,
  includeArrays: includeArrays,
  pluck: pluck,
  invoke: invoke,
  arrayEach: arrayEach,
  lastArrayEach: lastArrayEach,
  toArrayTree: toArrayTree,
  toTreeArray: toTreeArray,
  findTree: findTree,
  eachTree: eachTree,
  mapTree: mapTree,
  filterTree: filterTree,
  searchTree: searchTree,

  // base
  hasOwnProp: hasOwnProp,
  eqNull: eqNull,
  isNaN: isNumberNaN,
  isFinite: isNumberFinite,
  isUndefined: isUndefined,
  isArray: isArray,
  isFloat: isFloat,
  isInteger: isInteger,
  isFunction: isFunction,
  isBoolean: isBoolean,
  isString: isString,
  isNumber: isNumber,
  isRegExp: isRegExp,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isDate: isDate,
  isError: isError,
  isTypeError: isTypeError,
  isEmpty: isEmpty,
  isEmptyValue: isEmptyValue.isEmptyValue,
  isNull: isNull,
  isSymbol: isSymbol,
  isArguments: isArguments,
  isElement: isElement,
  isDocument: isDocument,
  isWindow: isWindow,
  isFormData: isFormData,
  isMap: isMap,
  isWeakMap: isWeakMap,
  isSet: isSet,
  isWeakSet: isWeakSet,
  isLeapYear: isLeapYear,
  isMatch: isMatch,
  isEqual: isEqual,
  isEqualWith: isEqualWith,
  getType: getType,
  uniqueId: uniqueId,
  getSize: getSize,
  indexOf: indexOf,
  lastIndexOf: lastIndexOf,
  findIndexOf: findIndexOf,
  findLastIndexOf: findLastIndexOf,
  toStringJSON: toStringJSON,
  toJSONString: toJSONString,
  keys: keys,
  values: values,
  entries: entries,
  pick: pick,
  omit: omit,
  first: first,
  last: last,
  each: each,
  lastEach: lastEach,
  has: has,
  get: get,
  set: set,
  groupBy: groupBy,
  countBy: countBy,
  clone,
  cloneDeep,
  clear: clear,
  remove: remove,
  range: range,
  destructuring: destructuring,

  // number
  random: random,
  min: min,
  max: max,
  commafy: commafy,
  round: round,
  ceil: ceil,
  floor: floor,
  toFixed: toFixed,
  toNumber: toNumber,
  toNumberString: toNumberString,
  toInteger: toInteger,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  sum: sum,
  mean: mean,

  // date
  now: now,
  timestamp: timestamp,
  isValidDate: isValidDate,
  isDateSame: isDateSame,
  toStringDate: toStringDate,
  toDateString: toDateString,
  getWhatYear: getWhatYear,
  getWhatMonth: getWhatMonth,
  getWhatWeek: getWhatWeek,
  getWhatDay: getWhatDay,
  getYearDay: getYearDay,
  getYearWeek: getYearWeek,
  getMonthWeek: getMonthWeek,
  getDayOfYear: getDayOfYear,
  getDayOfMonth: getDayOfMonth,
  getDateDiff: getDateDiff,

  // string
  trim: trim,
  trimLeft: trimLeft,
  trimRight: trimRight,
  escape: escape,
  unescape: unescape,
  camelCase: camelCase,
  pascalCase: pascalCase,
  kebabCase: kebabCase,
  repeat: repeat,
  padStart: padStart,
  padEnd: padEnd,
  startsWith: startsWith,
  endsWith: endsWith,
  template: template,
  toFormatString: toFormatString,
  toString: toValueString,
  toValueString: toValueString,
  checkPass,

  // function
  noop: noop,
  property: property,
  bind: bind,
  once: once,
  after: after,
  before: before,
  throttle: throttle,
  debounce: debounce,
  delay: delay,

  // url
  unserialize,
  getNowPageParam,
  objectToUrlParam,
  serialize,
  parseUrl: parseUrl,

  // web
  getBaseURL: getBaseURL,
  locat: locat,
  browse: browse,
  cookie: cookie,

  // ui-util
  // moment.util
  // moment.util
  stringToMoment,
  stringArrayToMomentArray,
  momentToString,
  momentArrayToStringArray,
  getMoment,
  dateToMoment,
  dateToString,
  momentToDate,
  isTime,
  isDateString,
  isDateTime,
  getCurDate,
  getCurDateMonth,
  getCurDateFullTime,
  getCurQuarter,
  getCurIssue,
  getCurDateYear,
  StringToDate,
  dateDiff,
  getCurDateTime,
  isMoment,
  // webstorage
  webStorage: {
    createWebStorage,
    init,
  },
  createWebStorage,
  getStorage,
  // sorter
  sortWithNumber,
  sortWithLetter,
  sortWithCharacter,
  sortArrayByCharacter,
  // pinyin
  pinyin,
  getLodop: lodop.getLodop,
  validate2ndIdCard,
  hkIdVerify,
  macauIdCard,
  // element
  getWidth,
  getStyle,
  getHeight,
  // data
  format,
  formatWithReq,
  formatWithIndex,
  moneyFormat,
  cnMoneyFormat,
  floatAdd,
  // cookie
  getToken,
  getCookie,
  setCookie,
  // browser
  isIE,
  notSupported,
  isIE9,
  isIE10,
  isIE11,
  isChrome,
  isFireFox,
  isSafari,
  clientSystem,
  clientScreenSize,
  clientBrowser,
  // tool-util
  copyText: copyText,
  encryption: encryption,
  crypto: crypto,
  uuid,
})

module.exports = TaUtils
