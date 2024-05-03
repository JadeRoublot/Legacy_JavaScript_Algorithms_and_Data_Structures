function checkCashRegister(price, cash, cid) {
  
    let change = [];
    let cidSave = []
    let pay = cash - price;
    let currency = ["PENNY","NICKEL","DIME","QUARTER","ONE","FIVE","TEN","TWENTY","ONE HUNDRED"];
    let amount = [0.01,0.05,0.1,0.25,1,5,10,20,100];
  
    for(let i = amount.length - 1; i >= 0; i--){
      let j = 0;
      cidSave.push([cid[i][0], cid[i][1]]);
      if(pay - amount[i] >= 0.00 && cid[i][1] - amount[i] >= 0.00){
        do{
          cid[i][1] -= amount[i];
          pay -= amount[i];
          j += amount[i];
        }while(pay - amount[i] >= 0.00 && cid[i][1] - amount[i] >= 0.00);
       
        change.push([currency[i], j]);
      }
    }
    
     if(cid[0][1] < 0.01 && pay < 0.01){
        return {status: "CLOSED", change: cidSave.reverse()};
      }
    if (pay != 0 && pay > 0.01){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }else{
      if(change[change.length - 1][0] === 'PENNY'){
        change[change.length - 1] = [change[change.length - 1][0], change[change.length - 1][1] + 0.01 ];
      }
     
      return {status: "OPEN", change: change};
    }
  
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);