function confirmEnding(str, target) {
    let stop = str.length - target.length;
    let j = target.length - 1;
    for ( let i = str.length - 1; i >= stop ; i--){
      if( str[i] != target[j]){
        return false;
      }else{
        j--
      }
    }
  
    return true;
  }
  
  confirmEnding("Bastian", "n");