


let val = "Hello world!";


function myToUpperCase(str) {
  let s = str.split("")
  let newstr = ""
  for (let i = 0; i < s.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      newstr += String.fromCharCode(str.charCodeAt(i) - 32)
    } else {
      newstr += s[i]
    }
  }
  return newstr
}
