function diffArray(arr1, arr2) {
    let j = 0;
    const newArr = [];
  
    for (let i = 0; i < arr1.length; i++){
  
      if (arr2.includes(arr1[i]) === false) {
        newArr[j] = arr1[i];
        j++
      }
    }
  
   for (let i = 0; i < arr2.length; i++){
  
      if (arr1.includes(arr2[i]) === false && newArr.includes(arr2[i]) === false) {
        newArr[j] = arr2[i];
        j++
      }
    }
  
    return newArr;
  }
  
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);