function bouncer(arr) {
    let falsy = [false, null,0,"",undefined,NaN];
    let arr1 = [];
    for (let i = 0; i <= arr.length - 1; i++){
      if(!falsy.includes(arr[i])){
        arr1.push(arr[i]);
      }
    }
  
    return arr1;
  }
  
  bouncer([7, "ate", "", false, 9]);