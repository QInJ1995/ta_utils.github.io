/* eslint-disable */
let formatRegExp = /%[sdj%]/g

export var warning = function warning () {}

// don't print warning message when in production env or node runtime
if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning = function warning (type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string'
      })) {
        console.warn(type, errors)
      }
    }
  }
}

export function format () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }

  let i = 1
  let f = args[0]
  let len = args.length
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1))
  }
  if (typeof f === 'string') {
    let str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%'
      }
      if (i >= len) {
        return x
      }
      switch (x) {
        case '%s':
          return String(args[i++])
        case '%d':
          return Number(args[i++])
        case '%j':
          try {
            return JSON.stringify(args[i++])
          } catch (_) {
            return '[Circular]'
          }
          break
        default:
          return x
      }
    })
    for (let arg = args[i]; i < len; arg = args[++i]) {
      str += ' ' + arg
    }
    return str
  }
  return f
}

export { isEmptyValue } from '../isEmptyValue'

export function isEmptyObject (obj) {
  return Object.keys(obj).length === 0
}

function asyncParallelArray (arr, func, callback) {
  let results = []
  let total = 0
  let arrLength = arr.length

  function count (errors) {
    results.push.apply(results, errors)
    total++
    if (total === arrLength) {
      callback(results)
    }
  }

  arr.forEach(function (a) {
    func(a, count)
  })
}

function asyncSerialArray (arr, func, callback) {
  let index = 0
  let arrLength = arr.length

  function next (errors) {
    if (errors && errors.length) {
      callback(errors)
      return
    }
    let original = index
    index = index + 1
    if (original < arrLength) {
      func(arr[original], next)
    } else {
      callback([])
    }
  }

  next([])
}

function flattenObjArr (objArr) {
  let ret = []
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k])
  })
  return ret
}

export function asyncMap (objArr, option, func, callback) {
  if (option.first) {
    let flattenArr = flattenObjArr(objArr)
    return asyncSerialArray(flattenArr, func, callback)
  }
  let firstFields = option.firstFields || []
  if (firstFields === true) {
    firstFields = Object.keys(objArr)
  }
  let objArrKeys = Object.keys(objArr)
  let objArrLength = objArrKeys.length
  let total = 0
  let results = []
  let next = function next (errors) {
    results.push.apply(results, errors)
    total++
    if (total === objArrLength) {
      callback(results)
    }
  }
  objArrKeys.forEach(function (key) {
    let arr = objArr[key]
    if (firstFields.indexOf(key) !== -1) {
      asyncSerialArray(arr, func, next)
    } else {
      asyncParallelArray(arr, func, next)
    }
  })
}

export function complementError (rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField
      return oe
    }
    return {
      message: oe,
      field: oe.field || rule.fullField,
    }
  }
}

import merge from '../merge'
export const deepMerge = merge
