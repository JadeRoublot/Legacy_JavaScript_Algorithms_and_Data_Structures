function frankenSplice(arr1, arr2, n) {
    let arr3 = [];
    for(let i = 0; i <= n - 1; i++){
      arr3.push(arr2[i]);
    }
    arr3 = arr3.concat(arr1)
    for(let j = arr2.length - n; j <= arr2.length - 1; j++){
      arr3.push(arr2[j]);
    }
  
    return arr3;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);