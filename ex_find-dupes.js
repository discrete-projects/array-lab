// ADD CODE HERE
const groupBy = (arr, cb) => {
  const obj = {}

  arr.sort().filter((el, i) => {
    let wholeCurr = cb(el)
    let pre = arr[i - 1]
    if (wholeCurr === cb(pre)) {
      obj[wholeCurr] = [arr[i - 1], el]
    } else {
      obj[wholeCurr] = [el]
    }
  })
  return obj
}

// Uncomment these to check your work!
// var decimals = [1.3, 2.1, 2.4]
var decimals = [1, 3, 2, 5, 4]

var floored = function (num) { return Math.floor(num) }
console.log(groupBy(decimals, floored)) // should log: { 1: [1.3], 2: [2.1, 2.4] }
