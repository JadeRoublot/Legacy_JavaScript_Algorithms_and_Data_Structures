function uniteUnique(arr) {
    let arr1 = [...arguments];
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1[i].length; j++) {
        if (!result.includes(arr1[i][j])) {
          result.push(arr1[i][j]);
        }
      }
    }
    return result;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);