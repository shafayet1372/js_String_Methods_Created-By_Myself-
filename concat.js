
function myConcat() {
  let str = ""
  for (let i = 0; i < arguments.length; i++) {
    str += arguments[i]
  }
  return str
}


console.log(myConcat('hello', ' world!', ' sds sdsd '))