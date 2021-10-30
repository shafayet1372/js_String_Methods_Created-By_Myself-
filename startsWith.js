let val = "Hello world!";


function myStartsWith(str, chekval) {
  let s = str.split("")
  let checkVals = chekval.split("")
  let counter = 0
  for (let i = 0; i < checkVals.length; i++) {
    if (checkVals[i] == s[i]) {
      counter++
    } else {
      break
    }
  }
  return counter == chekval.length
}
