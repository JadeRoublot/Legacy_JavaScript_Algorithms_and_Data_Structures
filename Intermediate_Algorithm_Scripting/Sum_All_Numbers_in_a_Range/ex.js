function sumAll(arr) {

    let num1;
    let num2;
    let result = 0;
  
    if ( arr[0] > arr[1]) {
      num2 = arr[0];
      num1 = arr[1];
    }else{
      num1 = arr[0];
      num2 = arr[1];
    }
    
    for (let i = num1; i <= num2; i++) {
  
      result += i;
    }
  
    return result;
}
  
  sumAll([1, 4]);