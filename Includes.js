
function myIncludes(val, tocheck) {
  /*   //shortway
  
    let found=val.match(new RegExp(`${tocheck}`,'g'))
  
    if(!found){
      return tocheck.length?false:true
    }
    return true */
  let str = val.split("")
  let valCheck = tocheck.split("")

  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < str.length; j++) {
      let counter = 0
      if (valCheck[i] == str[j]) {
        let l = j
        for (let m = i; m < valCheck.length; m++) {
          if (valCheck[m] == str[l]) {
            counter++
          }
          l++
        }
        return counter == valCheck.length
      }
    }
  }

  return tocheck.length ? false : true
}

