
function myEndsWith(str1, str2) {
  let counter = 0
  let s1 = str1.split("")
  let s2 = str2.split("")
  let l = s2.length - 1
  for (let i = s1.length - 1; i >= 0; i--) {
    if (s1[i] == s2[l]) {
      counter++
    } else {
      return counter == s2.length
    }
    l--
  }

}


console.log(myEndsWith('sadedsfdsfds', ''))
