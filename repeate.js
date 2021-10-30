function myRepeat(str, repeatTime) {
  let s = ""
  for (let i = 0; i < repeatTime; i++) {
    s += str

  }
  return s
}

console.log(myRepeat('0adsa', 10))