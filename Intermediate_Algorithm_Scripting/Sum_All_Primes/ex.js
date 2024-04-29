function isPrime(num){
    let sqrt = Math.sqrt(num);
  
    for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0){
          return false;
        }
      }
      return true;
  }
  
  function sumPrimes(num) {
    let result = 0;
  
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)){
        result += i;
      }
    }
  
    return result;
  }
  
  sumPrimes(10);