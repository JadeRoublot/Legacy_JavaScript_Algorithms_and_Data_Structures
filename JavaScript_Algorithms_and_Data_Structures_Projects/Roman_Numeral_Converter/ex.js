function convertToRoman(num) {
    let number = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let romanNumber = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let text = "";
    
    for(let i = number.length - 1; i >= 0 ; i--){
      if(num - number[i] >= 0) {
        do{
          text += romanNumber[i];
          num -= number[i];
        }while(num - number[i] >= 0);
      }
    }
   return text;
  }
  
  convertToRoman(36);