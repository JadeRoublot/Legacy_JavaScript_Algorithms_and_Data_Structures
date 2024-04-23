function truncateString(str, num) {
    let result = "";
    for(let i = 0; i <= num - 1; i++){
      if(str[i] != undefined){
        result+=str[i];
      }
    }
    if(num <= str.length - 1){
      result += "..."
    }
    
    return result;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);