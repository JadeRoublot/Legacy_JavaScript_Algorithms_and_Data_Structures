function orbitalPeriod(arr) {
    let result = 0;
    let array = [];
  
    for(let x in arr){
      let earth = 6367.4447 + arr[x].avgAlt;
      result = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/398600.4418));
      array.push({name : arr[x].name, orbitalPeriod : result})
  
    }
    
    return array;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);