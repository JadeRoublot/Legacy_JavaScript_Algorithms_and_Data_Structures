function translatePigLatin(str) {
    let text = "";
    let array = [];
    let vowel = ["a","e","i","o","u"];
    
  
    if (vowel.includes(str[0])) {
      text = str + "way";
    }else{
  
      for (let i = 0; i < str.length; i++){
  
       if(!vowel.includes(str[i]) && text === ""){
         array+=str[i];
       } else {
          text += str[i];
       }
      }
      text += array + "ay";
    }
    console.log(text)
    return text;
  }
  
  translatePigLatin("consonant");