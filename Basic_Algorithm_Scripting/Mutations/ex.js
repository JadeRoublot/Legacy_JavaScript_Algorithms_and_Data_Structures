function mutation(arr) {
    let string1 = arr[0].toLowerCase();
    let string2 = arr[1].toLowerCase();
    for(let i = 0; i <= string2.length - 1; i++){
      if(!string1.includes(string2[i])){
        return false;
      }
    }
    return true;
  }
  
  mutation(["hello", "hey"]);