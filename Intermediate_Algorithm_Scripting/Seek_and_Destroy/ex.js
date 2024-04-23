function destroyer(arr, ...arg) {
    let arr1 = [];
    let j = 0;
  
    for(let i = 0; i < arr.length; i++){
  
      if (arg.includes(arr[i]) === false){
        arr1[j] = arr[i];
        j++
      }
    }
  
    return arr1;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);