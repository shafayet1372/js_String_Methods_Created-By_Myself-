

function mySearch(str, searchval) {
  let s = str.split("")
  let checkval = searchval.split("")
  for (let i = 0; i < checkval.length; i++) {
    let counter = 0
    for (let j = 0; j < s.length; j++) {
      if (checkval[i] == s[j]) {
        let start = j
        let len = start + checkval.length
        let m = 0
        
        for (start; start < len; start++) {
          if (s[start] == checkval[m++]) {
            counter++
          } else {
            break
          }
        }
        if (counter == checkval.length) {
          return j
        }
      }
    }
  }
  return -1
}