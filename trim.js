


let val = "   Hello world!   ";


function mytrim(str) {
  let s = str.split("")
  let newStr = ''

  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') {
      s.splice(i, 1)
      i--
    } else {
      break
    }
  }
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == ' ') {
      s.splice(i, 1)

    } else {
      break
    }
  }

  for (let i = 0; i < s.length; i++) {
    newStr += s[i]
  }
  return newStr
}


console.log(mytrim(val))
