

let val = "Hello world!";


function mySlice(val, start, end) {
  let result = ""
  let s = val.split("")
  if (!arguments.length) {
    return s
  } else if (arguments.length == 2) {
    if (start < 0 && end) {
      start = s.length - Math.abs(start)
    } else if (start < 0) {
      start = 0
    }
    for (start; start < s.length; start++) {
      result += s[start]
    }


  } else if (arguments.length == 3) {

    if (start >= 0 && end < 0) {
      end = s.length - Math.abs(end)

    }
    for (start; start < end; start++) {
      if (s[start]) {
        result += s[start]
      }
    }

  }

  return result

}


console.log(mySlice(val, 0, -2))
console.log(mySlice(val, 0, 5))