

function myReplace(str, searchChar, Replacedchar) {



  /*  //shortway using built In Slice method//
   
   
    let s = str.split("")
     let search = searchChar.split("")
     let reStr = Replacedchar.split("")
     if (!searchChar && Replacedchar) {
       return Replacedchar + str
     }
     for(let i=0;i<1;i++){
     
       for(let j=0;j<s.length;j++){
         let counter = 0
         if(search[i]==s[j]){
           let l = j, m = 0
           for (l; l < j + search.length; l++) {
             if (s[l] == search[m++]) {
               counter++
             } else {
               break
             }
           }     
          if(counter==search.length){
            return [s.slice(0,j).join(""),Replacedchar,s.slice(j+search.length,s.length).join("")].join("")
          }   
         }
        
       }
     }
     return str */
  let s = str.split("")
  let search = searchChar.split("")
  let reStr = Replacedchar.split("")
  if (!searchChar && Replacedchar) {
    return Replacedchar + str
  }
  for (let i = 0; i < 1; i++) {


    for (let j = 0; j < s.length; j++) {
      if (search[i] == s[j]) {
        let l = j, m = 0
        let counter = 0
        for (l; l < j + search.length; l++) {
          if (s[l] == search[m++]) {
            counter++
          } else {
            break
          }
        }

        if (counter == search.length) {

          if (reStr.length == search.length) {

            let start = j

            let l = 0
            for (start; start < j + reStr.length; start++) {
              s[start] = reStr[l++]
            }
          } else if (search.length > reStr.length) {
            let ar = []
            let l = 0, m = 0
            for (l; l < s.length; l++) {
              if (l >= j && l < j + reStr.length) {
                ar.push(reStr[m])

                m++
              } else if ((l > j + (search.length - Replacedchar.length)) || l < j) {
                ar.push(s[l])
              }
            }
            return ar.join("")
          } else {
            let start = j

            let len = s.length
            let l = 0, p = 0
            for (start; start < len; start++) {
              if (l < search.length) {
                s[start] = reStr[p]

              } else {
                let swap = s[start]
                s[start] = reStr[p]
                s[s.length] = swap
              }
              l++
              p++
            }
          }
          return s.join("")
        }
      }
    }

  }
  return str
}
console.log(myReplace('Visit Microsoft!', "Visit", "w3school"))

