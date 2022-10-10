
function prime(num){
  if(num ==0 || num == 1 ){
     return "not a prime"
  }
     for(let i=2;i<=num;i++){
         if(num%2 ==0 ){
          return  false;
         }
         else{
             return true;
         }
     }

  }
  console.log(prime(5))
 
  // -----------------------------------

//   const lowerNumber = 2
//   const higherNumber =100
  
//   console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
  
//   for (let i = lowerNumber; i <= higherNumber; i++) {
//       let flag = 0;
  
//       for (let j = 2; j < i; j++) {
//           if (i % j == 0) {
//               flag = 1;
//               break;
//           }
//       }
  
//       if (i > 1 && flag == 0) {
//           console.log(i);
//       }
//   }
  