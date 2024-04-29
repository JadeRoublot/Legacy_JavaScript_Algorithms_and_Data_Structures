function checkEvenlyDiv(num1, num2, num3){
    for(let i = num1 ; i <= num2; i++){
      if(num3%i != 0){
        return false;
      }
    }
    return true;
  }
  
  
  function smallestCommons(arr) {
    arr = arr.sort(function(a, b) {
    return a - b;
    });
  
    let arr1 = []
    let arr2 = [];
    let i = arr[1] + 1;
  
    do{
      arr1.push(arr[0] * i)
      arr2.push(arr[1] * i)
      i++
  
      
    }while(!checkEvenlyDiv(arr[0],arr[1],i));
  
    return i;
  }
  
  smallestCommons([1,5]);