// Write a program to check if the given string is palindrome or not


let palindrome=(str)=>{
    let L=str.length
     for (let i = 0; i < (L / 2); i++) {
 
         // check if first and last string are same
         if (str[i] !== str[L - 1 - i]) {
             return 'It is not a palindrome';
         }
     }
     return 'It is a palindrome';
 }
 console.log(palindrome('madam'))
 console.log(palindrome('ant')) 