function palindrome(str) {
    str = str.toLowerCase();
    let text = "";
    let length = 0;
  
    for(let i = 0; i < str.length; i++){
      if(str[i].match('[a-z 0-9]') && str[i] != " "){
        text += str[i];
      }
    }
    length = text.length - 1;
    for(let j = 0; j < length/2; j++){
      if(text[j] != text[length - j]){
        return false;
      }
    }
    return true;
  }
  
  palindrome("eye");