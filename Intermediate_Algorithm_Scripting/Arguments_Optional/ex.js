function addTogether() {
    let arg1 = arguments[0];
    let arg2 = arguments[1];
  
    if (typeof (arg1) === "number" && typeof (arg2) === "number"){
      return arg1 + arg2;
    }else if(arguments.length === 1 && typeof (arg1) === "number"){
      return (arg2) => addTogether(arg1, arg2);
    }else{
      return undefined;
    }
    
    
  }
  
  addTogether(2,3);