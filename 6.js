// Write a program to generate Prime Numbers less than N


// Generate āNā Prime Numbers/in given range.
let genPrime= (lowerNumber,higherNumber)=>{
    for (let i = lowerNumber; i <= higherNumber; i++) {
        let flag = 0;
    
        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
    
        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }

}

genPrime(5,50)