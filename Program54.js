

// 54) Write a program to generate N fibonacci series, generate fibonacci series upto N. With recursion,
// with iteration. Which approach is more efficient?
// fibinocci series
let fibo=(n)=> {
    let n1 = 0,
      n2 = 1,
      sum = 0;
    //    let s=''
    let output = "";
    for (let i = 1; i <= n; i++) {
      output += `${n1} `; //way3
  
      sum = n1 + n2;
      n1 = n2;
      n2 = sum;
    }
    console.log(output);
  }
  fibo(10);
  
  //using recursions
  // let fibo=(n)=>{
  //     if(n<2) return n;
  
  //        else {
  //         return fibo(n-1)+fibo(n-2)
  //        }
  // }
  // n=2
  // for (i=0;i<n;i++){
  // console.log(fibo(i))
  // }
  
