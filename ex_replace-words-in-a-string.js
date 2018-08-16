// ADD CODE HERE
const censor = () => {
  let pairs = []
  const inner = (arr1, arr2) => {
    if (arr2) {
      let pair = [arr1, arr2]
      pairs.push(pair)
    }

    if (!arr2) {
      for (let i = 0; i < pairs.length; i++) {
        let target = pairs[i][0]
        let replace = pairs[i][1]
        if (arr1.includes(target)) {
          arr1 = arr1.replace(target, replace)
        }
      }
      return arr1
    }
  }
  return inner
}

// Uncomment these to check your work!
const changeScene = censor()
changeScene('dogs', 'cats')
changeScene('quick', 'slow')
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')) // should log: 'The slow, brown fox jumps over the lazy cats.'
