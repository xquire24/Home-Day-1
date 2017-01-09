module.exports = {
 getPrimes:function (n){
   var primes = [];
   for(var num = 1; num <= n; num++){
       var primeDividers = []; 
       for(var divider = 1; divider <= num; divider++){
           if(num % divider === 0){
               primeDividers.push(divider);
           }      
       }
       if(primeDividers.length === 2){
           primes.push(num);
       }
   }
   return primes;
}

}