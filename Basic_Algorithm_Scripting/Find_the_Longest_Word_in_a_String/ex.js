function findLongestWordLength(str) {

    let result = 0;
    let lengh = 0;
  
    for(let i = 0; i < str.length; i++){
  
      if (str[i] === " ") {
  
        if (result < lengh) {
  
          result = lengh;
        } 
  
        lengh = 0;
      } else {
  
        lengh ++;
      }
    }
  if (result < lengh) {
  
          result = lengh;
        } 
    return result;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");