import readlineSync from "readline-sync"

function check(){
    let input = readlineSync.questionInt(`enter a digit:- `)
    if((input%2)==0){
        return 'It is a even number'
    }
        return "It is a odd number"
}
console.log( check())