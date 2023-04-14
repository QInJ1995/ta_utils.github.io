// 核心
import TaUtils from './ctor';
// 对象相关的方法
import assign from './assign';
import objectEach from './objectEach';
import lastObjectEach from './lastObjectEach';
import objectMap from './objectMap';
import merge from './merge';
// 数组相关的方法
import map from './map';
import some from './some';
import every from './every';
import includeArrays from './includeArrays';
import arrayEach from './arrayEach';
import lastArrayEach from './lastArrayEach';
import uniq from './uniq';
import uniqBy from './uniqBy';
import union from './union';
import toArray from './toArray';
import sortBy from './sortBy';
import orderBy from './orderBy';
import shuffle from './shuffle';
import sample from './sample';
import slice from './slice';
import filter from './filter';
import findKey from './findKey';
import includes from './includes';
import find from './find';
import findIndex from './findIndex';
import findLast from './findLast';
import reduce from './reduce';
import copyWithin from './copyWithin';
import chunk from './chunk';
import zip from './zip';
import unzip from './unzip';
import zipObject from './zipObject';
import flatten from './flatten';
import pluck from './pluck';
import invoke from './invoke';
import toArrayTree from './toArrayTree';
import toTreeArray from './toTreeArray';
import findTree from './findTree';
import eachTree from './eachTree';
import mapTree from './mapTree';
import filterTree from './filterTree';
import searchTree from './searchTree';
import arrayIndexOf from './arrayIndexOf';
import arrayLastIndexOf from './arrayLastIndexOf';
import difference from './difference';
// 基础方法
import hasOwnProp from './hasOwnProp';
import isArray from './isArray';
import isNull from './isNull';
import isNumberNaN from './isNaN';
import isUndefined from './isUndefined';
import isFunction from './isFunction';
import isObject from './isObject';
import isString from './isString';
import isPlainObject from './isPlainObject';
import isLeapYear from './isLeapYear';
import isDate from './isDate';
import eqNull from './eqNull';
import each from './each';
import indexOf from './indexOf';
import lastIndexOf from './lastIndexOf';
import keys from './keys';
import values from './values';
import clone from './clone';
import cloneDeep from './cloneDeep';
import getSize from './getSize';
import lastEach from './lastEach';
import remove from './remove';
import clear from './clear';
import isNumberFinite from './isFinite';
import isFloat from './isFloat';
import isInteger from './isInteger';
import isBoolean from './isBoolean';
import isNumber from './isNumber';
import isRegExp from './isRegExp';
import isError from './isError';
import isTypeError from './isTypeError';
import isEmpty from './isEmpty';
import { isEmptyValue } from './isEmptyValue';
import isSymbol from './isSymbol';
import isArguments from './isArguments';
import isElement from './isElement';
import isDocument from './isDocument';
import isWindow from './isWindow';
import isFormData from './isFormData';
import isMap from './isMap';
import isWeakMap from './isWeakMap';
import isSet from './isSet';
import isWeakSet from './isWeakSet';
import isMatch from './isMatch';
import isEqual from './isEqual';
import isEqualWith from './isEqualWith';
import getType from './getType';
import uniqueId from './uniqueId';
import findIndexOf from './findIndexOf';
import findLastIndexOf from './findLastIndexOf';
import toStringJSON from './toStringJSON';
import toJSONString from './toJSONString';
import entries from './entries';
import pick from './pick';
import omit from './omit';
import first from './first';
import last from './last';
import has from './has';
import get from './get';
import set from './set';
import groupBy from './groupBy';
import countBy from './countBy';
import range from './range';
import destructuring from './destructuring';
// 数值相关方法
import random from './random';
import max from './max';
import min from './min';
import commafy from './commafy';
import round from './round';
import ceil from './ceil';
import floor from './floor';
import toFixed from './toFixed';
import toInteger from './toInteger';
import toNumber from './toNumber';
import toNumberString from './toNumberString';
import add from './add';
import subtract from './subtract';
import multiply from './multiply';
import divide from './divide';
import sum from './sum';
import mean from './mean';
// 日期相关的方法
import getWhatYear from './getWhatYear';
import getWhatMonth from './getWhatMonth';
import getWhatDay from './getWhatDay';
import toStringDate from './toStringDate';
import toDateString from './toDateString';
import now from './now';
import timestamp from './timestamp';
import isValidDate from './isValidDate';
import isDateSame from './isDateSame';
import getWhatWeek from './getWhatWeek';
import getYearDay from './getYearDay';
import getYearWeek from './getYearWeek';
import getMonthWeek from './getMonthWeek';
import getDayOfYear from './getDayOfYear';
import getDayOfMonth from './getDayOfMonth';
import getDateDiff from './getDateDiff';
// 字符串相关的方法
import padEnd from './padEnd';
import padStart from './padStart';
import repeat from './repeat';
import trim from './trim';
import trimRight from './trimRight';
import trimLeft from './trimLeft';
import escape from './escape';
import unescape from './unescape';
import camelCase from './camelCase';
import { pascalCase } from './pascalCase';
import kebabCase from './kebabCase';
import startsWith from './startsWith';
import endsWith from './endsWith';
import template from './template';
import toFormatString from './toFormatString';
import toValueString from './toValueString';
import checkPass from './checkPass';
// 函数相关的方法
import noop from './noop';
import property from './property';
import bind from './bind';
import once from './once';
import after from './after';
import before from './before';
import throttle from './throttle';
import debounce from './debounce';
import delay from './delay';
// 地址相关的方法
import { unserialize } from './unserialize';
import { getNowPageParam } from './getNowPageParam';
import { serialize } from './serialize';
import { objectToUrlParam } from './objectToUrlParam';
import parseUrl from './parseUrl';
// 浏览器相关的方法
import getBaseURL from './getBaseURL';
import locat from './locat';
import cookie from './cookie';
import browse from './browse';
import { dateDiff, dateToMoment, dateToString, getCurDate, getCurDateFullTime, getCurDateMonth, getCurDateTime, getCurDateYear, getCurIssue, getCurQuarter, getMoment, isDateString, isDateTime, isTime, momentArrayToStringArray, momentToDate, momentToString, stringArrayToMomentArray, StringToDate, stringToMoment, isMoment, } from './moment';
// webstorage
import { createWebStorage, init } from './webStorages';
import { getStorage } from './getStorage';
// sorter
import { sortWithCharacter, sortWithLetter, sortWithNumber } from './sorter';
import pinyin from './pinyin';
// browser
import { copyText } from './clipboard';
import crypto from './crypto';
// import encryption from './encryption'
import { clientBrowser, clientScreenSize, clientSystem, isChrome, isFireFox, isIE, isIE10, isIE11, isIE9, isSafari, isSilversea, notSupported, } from './browser';
import { getCookie, getToken, setCookie } from './cookies';
import { cnMoneyFormat, dataSensitive, floatAdd, moneyFormat } from './data';
import { getHeight, getStyle, getWidth } from './element';
import { macauIdCard } from './macauIdCard';
import { hkIdVerify } from './hkIdVerify';
import { validate2ndIdCard } from './validate2ndIdCard';
import { getLodop } from './getLodop';
import forOf from './forOf';
import partition from './partition';
import lastForOf from './lastForOf';
// uuid
import uuid from './uuid';
import { uuidV4 } from './uuidV4';
import hotKey from './hotKey';
import AsyncValidator from './async-validator';
import validator from './validator';
const { format, formatWithReq, formatWithIndex } = dataSensitive;
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
    isEmptyValue: isEmptyValue,
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
    pascalCase,
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
    isMoment,
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
    // webstorage
    webStorage: {
        init,
    },
    createWebStorage,
    getStorage,
    // sorter
    sortWithNumber,
    sortWithLetter,
    sortWithCharacter,
    // pinyin
    pinyin,
    getLodop,
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
    isSilversea,
    clientSystem,
    clientScreenSize,
    clientBrowser,
    // tool-util
    copyText: copyText,
    // encryption: encryption,
    crypto: crypto,
    uniqBy,
    findIndex,
    forOf,
    partition,
    lastForOf,
    uuid,
    uuidV4,
});
export default TaUtils;
const webStorage = {
    init,
    createWebStorage,
};
const toString = toValueString;
const isFinite = isNumberFinite;
const isNaN = isNumberNaN;
export { 
// object
assign, objectEach, lastObjectEach, objectMap, merge, 
// array
uniq, union, sortBy, orderBy, shuffle, sample, some, every, slice, filter, find, findLast, findKey, includes, arrayIndexOf, arrayLastIndexOf, difference, map, reduce, copyWithin, chunk, zip, unzip, zipObject, flatten, toArray, includeArrays, pluck, invoke, arrayEach, lastArrayEach, toArrayTree, toTreeArray, findTree, eachTree, mapTree, filterTree, searchTree, 
// base
hasOwnProp, eqNull, isNumberNaN, isNumberFinite, isUndefined, isArray, isFloat, isInteger, isFunction, isBoolean, isString, isNumber, isRegExp, isObject, isPlainObject, isDate, isError, isTypeError, isEmpty, isEmptyValue, isNull, isSymbol, isArguments, isElement, isDocument, isWindow, isFormData, isMap, isWeakMap, isSet, isWeakSet, isLeapYear, isMatch, isEqual, isEqualWith, getType, uniqueId, getSize, indexOf, lastIndexOf, findIndexOf, findLastIndexOf, toStringJSON, toJSONString, keys, values, entries, pick, omit, first, last, each, lastEach, has, get, set, groupBy, countBy, clone, cloneDeep, clear, remove, range, destructuring, 
// number
random, min, max, commafy, round, ceil, floor, toFixed, toNumber, toNumberString, toInteger, add, subtract, multiply, divide, sum, mean, 
// date
now, timestamp, isValidDate, isDateSame, toStringDate, toDateString, getWhatYear, getWhatMonth, getWhatWeek, getWhatDay, getYearDay, getYearWeek, getMonthWeek, getDayOfYear, getDayOfMonth, getDateDiff, 
// string
trim, trimLeft, trimRight, escape, unescape, camelCase, pascalCase, kebabCase, repeat, padStart, padEnd, startsWith, endsWith, template, toFormatString, toValueString, checkPass, 
// function
noop, property, bind, once, after, before, throttle, debounce, delay, 
// url
unserialize, getNowPageParam, objectToUrlParam, serialize, parseUrl, 
// web
getBaseURL, locat, browse, cookie, 
// ui-util
// moment.util
// moment.util
stringToMoment, isMoment, stringArrayToMomentArray, momentToString, momentArrayToStringArray, getMoment, dateToMoment, dateToString, momentToDate, isTime, isDateString, isDateTime, getCurDate, getCurDateMonth, getCurDateFullTime, getCurQuarter, getCurIssue, getCurDateYear, StringToDate, dateDiff, getCurDateTime, webStorage, createWebStorage, getStorage, 
// sorter
sortWithNumber, sortWithLetter, sortWithCharacter, 
// pinyin
pinyin, getLodop, validate2ndIdCard, hkIdVerify, macauIdCard, 
// element
getWidth, getStyle, getHeight, 
// data
format, formatWithReq, formatWithIndex, moneyFormat, cnMoneyFormat, floatAdd, 
// cookie
getToken, getCookie, setCookie, 
// browser
isIE, notSupported, isIE9, isIE10, isIE11, isChrome, isFireFox, isSafari, isSilversea, clientSystem, clientScreenSize, clientBrowser, 
// tool-util
copyText, 
// encryption,
crypto, uniqBy, findIndex, toString, partition, isFinite, isNaN, forOf, lastForOf, uuid, uuidV4, hotKey, validator, AsyncValidator, };
