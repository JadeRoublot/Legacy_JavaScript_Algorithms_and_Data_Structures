function rot13(str) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text = "";
  
    for(let i = 0; i <= str.length - 1; i++){
      for(let j = 0; j <= alphabet.length - 1; j++){
        if(str[i] === alphabet[j]){
          let num = j + 13;
          
          if (num >= alphabet.length){
            num -= alphabet.length;
            text += alphabet[num];
          }else{
            text += alphabet[num];
          }
        }
      }
  
      if(!alphabet.includes(str[i])){
          text += str[i];
        }
    }
  
    return text;
  }
  
  rot13("SERR PBQR PNZC");