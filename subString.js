


let val = "Hello world!";


function mysubString(str, starts, end) {
  let s = str.split("")
  let newStr = ""
  let len
  if (end < starts) {
    let swap = starts
    starts = end
    end = swap
  }

  starts = starts < 0 ? 0 : starts
  end = end < 0 ? 0 : end
  if (end > s.length - 1) {
    len = s.length
  } else {
    len = end
  }

  for (starts; starts < len; starts++) {
    newStr += s[starts]
  }

  return newStr

}


console.log(mysubString("Mozilla", 0, 2))
