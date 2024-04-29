function sumFibs(num) {
    let arrayFib = [0, 1];
    let result = 0;
  
    for(let i = 1; arrayFib[i] <= num; i++){
      arrayFib.push(arrayFib[i - 1] + arrayFib[i]);
      if (arrayFib[i] % 2){
        result += arrayFib[i];
      }
    }
  
    return result;
  }
  
  sumFibs(4);