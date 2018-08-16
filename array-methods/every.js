'use strict'

/*
 *
 * The every() method tests whether all elements in the array pass the test implemented by the provided function.
 *
 */

let truths = [true, true, true, true]
let untruths = [true, false, true, true]

const everyFunc = (arr, cb) => {
  arr.every(cb)
}

const areTrue = curr => {
  if (curr === true) {
    console.log('Not all true')
  }
}

console.log(everyFunc(untruths, areTrue))
