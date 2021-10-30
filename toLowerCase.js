


let val = "Hello world!";


function myToLowerCase(str) {
  let s = str.split("")
  let newstr = ""
  for (let i = 0; i < s.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      newstr += String.fromCharCode(str.charCodeAt(i) + 32)
    } else {
      newstr += s[i]
    }
  }
  return newstr
}


console.log(myToLowerCase(val))
