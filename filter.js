'use strict'

/*
 *
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 *
 */

let numArr = [5, 55, 4, 2, 324, 9]

const filterFunc = arr => {
  return arr.filter(el => el > 6)
}

const filterFunc2 = (arr, cb) => {
  return arr.filter(cb)
}

const greaterThan25 = curr => {
  if (curr > 25) return curr
}

console.log('func 1', filterFunc(numArr))
console.log('func 2', filterFunc2(numArr, greaterThan25))
