function titleCase(str) {
    str = str.split(" ");
    let text = [];
  
    for(let i = 0; i <= str.length-1; i++){
      text.push( str[i][0].toUpperCase() + str[i].slice(1).toLowerCase());
  
    }
  
    return text.join(" ");;
  }
  
  titleCase("I'm a little tea pot");