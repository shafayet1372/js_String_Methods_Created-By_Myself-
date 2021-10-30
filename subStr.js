


let val = "Hello world!";


function mysubStr(str, starts, end) {
  let s = str.split("")
  let newStr = ""
  if (arguments.length == 2) {

    if (Math.abs(starts) > s.length) {
      return str
    }
    if (starts < 0) {
      starts = s.length - Math.abs(starts)
    } else {
      starts = 0
    }

    for (starts; starts < s.length; starts++) {
      if (starts >= starts) {
        newStr += s[starts]
      }
    }
    return newStr
  } else if (arguments.length == 3) {
    if ((starts >= 0 && end >= 0)) {
      let len=starts+end
     
      if (end >= str.length) {
        len = str.length
      }
      for (starts; starts < len; starts++) {
        newStr += s[starts]
      }
      return newStr
    }
  }
  return newStr

}