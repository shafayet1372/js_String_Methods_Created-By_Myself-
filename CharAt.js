
function myCharAt(str, index) {
  let char = ''
  let s = str.split("")
  return s[index] || s[index] == 0 ? s[index] : char
}


console.log(myCharAt('hello', 2))