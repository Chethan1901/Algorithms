import readlinesync from "readline-sync";

var array = 8
function GCD(value) {

    let a = value;
    while(value>0){
        if((value%a) == 0){
            console.log(a)
        }
        a--;
    }
}
GCD(array);
