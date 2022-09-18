import readlinesync from "readline-sync";

function Fizz_Buzz(){
let input = readlinesync.questionInt("Enter a number:- ")

for(let i=0;i<input;i++){
    if((i%3)==0){
        console.log("Fizz")
    }else if((i%5)==0){
        console.log("Bizz")
    }else{
        console.log(i)

    }
}

}
Fizz_Buzz()