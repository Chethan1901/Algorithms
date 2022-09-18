import readlinesync from "readline-sync"

function Gen(){
let input = readlinesync.questionInt("enter a digit:- ")
var  even = []
var odd = []    
for(let i = 0 ; i<input;i++ ){
        if((i%2)==0){
            even.push(i)
        }else{
            odd.push(i)
        }
    }
    console.log(`even:- `,even)
    console.log(`odd:- `,odd)
}
Gen()