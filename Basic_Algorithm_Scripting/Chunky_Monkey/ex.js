function chunkArrayInGroups(arr, size) {
    let arr1 = [];
  
    for(let i = 0; i <= arr.length - 1; i += size){
      arr1.push(arr.slice(i, i + size));
    }
   
    return arr1;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);