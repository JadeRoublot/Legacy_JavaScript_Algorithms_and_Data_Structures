function pairElement(str) {
    let letter = ["A","T","C","G"];
    let hellix = [["A","T"], ["T","A"], ["C","G"],["G","C"]];
    let result = [];
    
    for(let x in str){
      result.push(hellix[letter.indexOf(str[x])]);
    }
    return result;
  }
  
  pairElement("GCG");