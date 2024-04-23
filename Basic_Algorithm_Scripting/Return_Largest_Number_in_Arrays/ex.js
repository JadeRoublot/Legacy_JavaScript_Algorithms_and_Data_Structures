function largestOfFour(arr) {
    let arrResylt = [];
  
    for(let value in arr) {
      let num = arr[value][0];
  
      for(let i = 0; i <= arr[value].length - 1; i++){
        if(num < arr[value][i]){
          num = arr[value][i];
        }
      }
      arrResylt.push(num);
    }
    
    return arrResylt;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);