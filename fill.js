'use strict'

/*
 *
 * The fill() method fills all the elements of an array from a start index to an end index with a static value. The end index is not included.
 *
 */

let arraySound = ['b', 3, 3, 'z', 0, 'p']

const fillFunc = (arr) => {
  return arr.fill('e', 1, 5)
}

console.log(fillFunc(arraySound))
