import readlinesync from "readline-sync";

function prime() {
    let input = readlinesync.questionInt("Enter a digit:- ")
   
let chk=0;
for(let i=2; i<input; i++)
{
  if(input%2==0)
  {
    chk++;
    break;
  }
}
if(chk==0)
  console.log(input + " is a Prime number");
else
  console.log(input + " is not a Prime Number");
}
prime();
