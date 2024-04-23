function spinalCase(str) {
    let result ="";
    for(let i = 0; i < str.length; i++){
  
      if (str[i] === " " || str[i] === "_"){
        //result += "-";
      }else if (i !=0 && str[i].match(/[A-Z]/) || str[i-1] === " "){
        result += "-" + str[i].toLowerCase();
      } else {
        result += str[i].toLowerCase();
      }
  
    }
    return result;
  }
  
  spinalCase('This Is Spinal Tap');