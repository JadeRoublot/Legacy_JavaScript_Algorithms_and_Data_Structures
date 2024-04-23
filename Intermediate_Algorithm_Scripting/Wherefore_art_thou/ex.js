function whatIsInAName(collection, source) {

    let map = [];
  
    for(let i = 0; i < collection.length; i++){
      let bool = false;
  
      for (let col in source) {
  
        if(collection[i][col] !== source[col]){
  
          bool = true;
        }
      }
  
      if (!bool) {
        map.push(collection[i]);
      }
    }
    
    return map;
  
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });