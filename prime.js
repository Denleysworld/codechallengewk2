//the function findPrimes is declared make sure it is an array
function findPrimes(arr) {
    //this function isPrime is used to determine whether a number is a prime or not
    function isPrime(num) {
        //the condition in the if is used to remove any number 1
      if (num < 2) return false;
      //here we check if the number is a prime
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  //here it is used to filter the array and return it.
    return arr.filter(isPrime);
  }
console.log(findPrimes(arr));
