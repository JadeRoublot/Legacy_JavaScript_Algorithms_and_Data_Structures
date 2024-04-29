function convertHTML(str) {
    let object = {
      "&" : "&amp;", 
      "<": "&lt;",
      ">" : "&gt;",
      "\"" : "&quot;",
      "'" : "&apos;"};
  
    str = str.replaceAll(/&|<|>|"|'/gi, x=>object[x]);
  
    return str;
  }
  
  convertHTML("Dolce & Gabbana");