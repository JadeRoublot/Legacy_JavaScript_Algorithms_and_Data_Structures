function steamrollArray(arr) {
    const arrRest = [];
    for(let i = 0; i <= arr.length - 1; i++){
      if(Array.isArray(arr[i])){
        arrRest.push(...steamrollArray(arr[i]));
      }else{
        arrRest.push(arr[i])
      }
    }
  
    return arrRest;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);