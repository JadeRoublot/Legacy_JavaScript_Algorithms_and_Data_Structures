function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let j = alphabet.indexOf(str[0]);
  
    for(let i = 0; i<= str.length - 1; i++){
      if(str[i] != alphabet[j]){
        return alphabet[j];
      }
      j++
    }
  
    if (str.length === alphabet.length){
      return undefined;
    } else {
      return alphabet[j];
    }
  }
  
  fearNotLetter("abce");