function dropElements(arr, func) {

    if (!func(arr[0])){
      do{
        arr = arr.slice(1, arr.length);
      }while(!func(arr[0]));
    }
    
    return arr;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });