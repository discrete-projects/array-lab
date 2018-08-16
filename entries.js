'use strict'

/*
 *
 * The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array. It can be used to create an array of arrays.
 *
 */

let arrayChar = ['a', 'b', 'c']

const entriesFunc = arr => {
  let parentArr = []
  let iterators = arr.entries()
  for (let i = 0; i < arr.length; i++) {
    parentArr.push(iterators.next().value)
  }
  return parentArr
}

console.log(entriesFunc(arrayChar))
