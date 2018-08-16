const groupBy = (arr, cb) => {
  const obj = {}

  arr.sort().filter((el, i) => {
    let wholeCurr = Math.floor(el)
    let pre = arr[i - 1]
    if (wholeCurr === Math.floor(pre)) {
      obj[wholeCurr] = [arr[i - 1], el]
    } else {
      obj[wholeCurr] = [el]
    }
  })
  return obj
}

var decimals = [1.3, 7.8, 2.4, 2.5, 5.4, 2.1, 7.9]
var floored = function (num) { return Math.floor(num) }
console.log(groupBy(decimals, floored)) // should log: { 1: [1.3], 2: [2.1, 2.4] }
