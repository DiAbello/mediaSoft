function toArabic(test) {
  const symbols = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  let arr = test.split('')
  let letters = []
  let result = 0
  arr.forEach((el, index) => {
    if(arr[index + 1]) {
      if(symbols[el] < symbols[arr[index + 1]]) {
        letters.push([symbols[el], symbols[arr[index + 1]]])
      }
    }
    letters.push([symbols[el]])
  })
  console.log(letters);
  letters.forEach((el, index) => {
    if(el.length == 2) {
      result += el[1] - el[0]
      letters.splice(index, 2)
    } else {
      result += el[0]
    }
  })
  return result
}