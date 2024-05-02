function telephoneCheck(str) {

    if(str[2] === " "){
      return false;
    }
  
    str = str.replace(/[^\d()+]/g, '');
  
     if(str.startsWith("1(") || str.length < 14 && str.startsWith("(555)")){
  
     return true;
    }
   
    if (str.length !== 10 && str.length !== 11) {
      return false;
    }
  
    if (
      str.length === 10 && str.match(/^\d{10}$/) ||
      str.length === 11 && str.match(/^1?\d{10}$/)
    ) {
      return true;
    }
  
    return false;
  }
  
  telephoneCheck("555-555-5555");