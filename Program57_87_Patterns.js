// 57________________________________________________________
// for (i = 5; i >= 1; i--) {
//     a = "";
//     for( j=1;j<=i;j++){
//         a=a+j
//     }

//     console.log(a)

// }
// 12345
// 1234
// 123
// 12
// 1
//58 ______________________________________________________________

// for (let k = 1; k <= 5; k++) {
//   let a = "";
//   for (let i = k; i <= 5; i++) {
//     a += i;
//   }
//   console.log(a);
// }

// 12345
// 2345
// 345
// 45
// 5

// 59----------------------------------------
// n=5//no.of rows
// s=''
// for(i=5;i>=1;i--){
//   for(j=i;j>=1;j--)
//   {
//     s+=j
//   }
//   s+='\n'
// }
// console.log(s)

// 54321
// 4321
// 321
// 21
// 1

// 60_____________________________________________________
// let n=5

// let string = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     string += n - j + 1;
//   }
//   string += "\n";
// }
// console.log(string);

// 61________________________________________________________________
// let n = 5; // height of pattern
// let string = "";

// for (let i = 1; i <= n; i++) {

//   for (let j = 1; j <= i; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);

// 1
// 12
// 123
// 1234
// 12345

// 62_________________________________________________________
// let n = "";
// let s = "";
// for (let i = 5;i>0;i--) {
//   for (let j = i; j <=5;j++) {
//     n = n + j;
//   }
//   n += "\n";
// }
// console.log(n);

// 63_______________________________________________________________
// for (let i = 5; i >= 1; i--) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//       line += j;
//     }
//     for (let k = i; k < 5; k++) {
//       line += "**";
//     }
//     for (let m = i; m >= 1; m--) {
//       line += m;
//     }
//     console.log(line);
//   }

// 64______________________________________________
// let n = 3;
// let count = 1;
// let string = "";

// for (let i = 1; i <= n; i++) {

//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }

//   for (let k = 1; k <= 2 * i - 1; k++) {
//     string += count;
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);

//65 _________________________________________________________________

// const a = [  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];
// let n = 1;
// let low = 0;
// let high = 9;
// for (let i = 0; i < 5; i++, low++, high--) {
//   for (let j = low; j <= high; j++, n++) {
//     a[i][j] = n;
//   }
//   for (let j = low + 1; j <= high; j++, n++) {
//     a[j][high] = n;
//   }
//   for (let j = high - 1; j >= low; j--, n++) {
//     a[high][j] = n;
//   }
//   for (let j = high - 1; j > low; j--, n++) {
//     a[j][low] = n;
//   }
// }
// console.log("Perfect Square Spiral");
// for (let i = 0; i < 10; i++) {
//   let line = "";
//   for (let j = 0; j < 10; j++) {
//     line += a[i][j] + " ";
//   }
//   console.log(line);
// }

// 66____________________________________________________

// for (let i = 1; i <= 5; i++) {
//     let line = "";
//     for (let j = i; j <= 5; j++) {
//       if (i < 4) {
//         line += i;
//       } else {
//         line += 6 - i;
//       }
//     }
//     console.log(line);
//   }

// 67____________________________________________________

// for (let i = 1; i <= 5; i++) {
//     let line = "";
//     for (let j = 5; j >= 1; j--) {
//       if (i === j) {
//         line += "*";
//       } else {
//         line += j;
//       }
//     }
//     console.log(line);
//   }
//70 ___________________________________________

// a = ''
// b = ''
// for (i = 1; i <= 5; i++){
//     for (j = 2; j <= i; j++){
//         b = i + b
//     }
//     a = i+a
//     console.log(`${a}${b}`)
//     a = ''
//     b = ''
// }
// ___________________________2nd Type_________________
// a = ''
// for (i = 1; i <= 5; i++){
//     for (j = 2; j <= i; j++){
//         a = i + a
//     }
//     a = i+a
//     console.log(`${a}`)
//     a = ''
// }
// 1
// 22
// 333
// 4444
// 55555

// 74________________________________________________

// n = 5
// s = ''
// for (i = 1; i <= n; i++){
//     for (j = i; j <= n; j++){
//         s+=' '
//     }for (j = 1; j <= i; j++){
//         s+='*'
//     } for (j = 1; j < i; j++){
//         s+='*'
//     }
//      s += '\n'
// }    console.log(s)
//     *
//    ***
//   *****
//  *******
// *********

// 75___________________________________________________________
//

// let n = 5;
// let rows = 6;
// let string = "";

// for (let i = 0; i < rows; i++) {

//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }

//   for (let k = 0; k < 2 * (rows-i) - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// 77___________________________________________________________
// let n = 5;
// let string = "";

// for (let i = 1; i <= n; i++) {

//   for (let j = n; j > i; j--) {
//     string += " ";
//   }

//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }

// for (let i = 1; i <= n - 1; i++) {

//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }

//   for (let k = (n - i) * 2 - 1; k > 0; k--) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
// *
// ***
// *****
// *******
// *********
// *******
// *****
// ***
//  *
// 78_______________________________________________________

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
// *
// **
// ***
// ****
// *****

//79____________________________________________________

// a=''
// for (i = 5; i >= 1; i--){
//     a = ''
//     for (j = i; j >= 1; j--){
//         a= a+'* '
//     }console.log(a)
// }
// console.log("hello")

// * * * * *
// * * * *
// * * *
// * *
// *

// 84____________________________________________________________
// let n = 5; // you can take input using prompt or change the value
// let string = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i + 1; j++) {
//     string += String.fromCharCode(j + 65);
//   }
//   string += "\n";
// }
// console.log(string);

// 85___________________________________________________________________
// let n = 5; // you can take input using prompt or change the value
// let string = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i + 1; j++) {
//     string += String.fromCharCode(j + 65);
//   }
//   string += "\n";
// }
// console.log(string);

// 86__________________________________________________________________
// let n = 5; // you can take input using prompt or change the value
// let string = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i + 1; j++) {
//     string += String.fromCharCode((n - 1 - j) + 65);
//   }
//   string += "\n";
// }
// console.log(string);

// 87____________________________________________________________

// let n = 5; // you can take input using prompt or change the value
// let string = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i + 1; j++) {
//     string += String.fromCharCode((n - 1 - j) + 65);
//   }
//   string += "\n";
// }
// console.log(string);

// _______________________________________________

// Extra pattern Challenges

// ------------------------------------------------

// ________________________________________________
// 2.
// a = ''
// n=5
// for (i = 4; i >= 1; i--){
//     a =a+'*'
//     console.log(a)
// }

// n = 5
// s = ''
// for (i = 1; i <= n; i++){
//     for (j = i; j <= n; j++)
//     {
//         s+=' '
//     }`
//     for (j = 1; j <= i; j++){
//         s+='*'
//     }
//     s+='\n'

// }
// console.log(s)

//     *
//    **
//   ***
//  ****
// *****
//
// _________________________________________________
//4.

// _________________________________________________
// 5.
// a = ''
// for (i = 1; i <= 5; i++){
//     a = a + '1'
//     console.log(a)
// }
// 1
// 11
// 111
// 1111
// 11111
// _________________________________________________
// 6.
// a = ''
// for (i = 1; i <= 8; i++){
//     a = a + i
//     console.log(a)
// }
// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678
// _________________________________________________
// 7.____________________________Approach 1
// for (i = 2,j = 9; i <= 10,j >= 1; i++,j--){
//  console.log(`${i} ${j}`)
// }
// ______________________________Approach 2
// for (i = 2; i <= 10; i++){

//     a = (`${i} ${11-i}`)
//  console.log(`${a}`)
// }
// 2  9
// 3  8
// 4  7
// 5  6
// 6  5
// 7  4
// 8  3
// 9  2
// 10 1
// _________________________________________________
// 8.
// a = ''
// b = ''
// for (i = 9; i >= 2; i--) {
//     a = ''
//     b=''
//     // console.log(`${a}`)
//     for (j = 9; j >= i; j--) {
//         a = a + j
//     // console.log(`${a} * 9 + ${i}`)
//     } for (k = 2; k <= i; k++){
//         b = b + ' '

//     }console.log(`${a} * 9 + ${i-2}${b}= ${a*9+i-2}`)
// }

// 0 * 9 + 8        = 8
// 9 * 9 + 7        = 88
// 98 * 9 + 6       = 888
// 987 * 9 + 5      = 8888
// 9876 * 9 + 4     = 88888
// 98765 * 9 + 3    = 888888
// 987654 * 9 + 2   = 8888888
// 9876543 * 9 + 1  = 88888888
// 98765432 * 9 + 0 = 888888888
// _________________________________________________

// _________________________________________________
// 11.
// n=5//no.of rows
// s=''
// count=1
// for(i=1;i<=n;i++){
//   if(i<=4){
//     for (j = 1; j <= i; j++){
//       s += count + "  "
//       count++
//       }s+='\n'
//   }
//     else{
//      for(j=1;j<=i;j++){
//         s+=count+" "
//        count++
//      }s+='\n'
//   }
// }
// console.log(s)
// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11 12 13 14 15
// _________________________________________________
// 12.
// n=5//no.of rows
// s=''
// count=1
// for(i=1;i<=n;i++){
//   if(i<=2){
//     for (j = i; j <= n; j++){
//       s += count + "  "
//       count++
//       }
//       s+='\n'
//   } else {
//     for (j = i; j <= n; j++){
//       s += count + " "
//       count++
//     }s+='\n'
//    }
// }
// console.log(s)
// 1  2  3  4  5
// 6  7  8  9
// 10 11 12
// 13 14
// 15
// _________________________________________________
// 13.
//  n=10
// for(i=1;i<=n;i++){
//   s=''
//   for (j = 1; j <= i; j++) {
//     s = s + (i * j) + " "
//   }
//   console.log(s)
// }

// 1
// 2 4
// 3 6 9
// 4 8 12 16
// 5 10 15 20 25
// 6 12 18 24 30 36
// 7 14 21 28 35 42 49
// 8 16 24 32 40 48 56 64
// 9 18 27 36 45 54 63 72 81
// 10 20 30 40 50 60 70 80 90 100
// _________________________________________________
// 14.
// let n = 5; // height of pattern
// let string = "";
// let count = 1;
// // External loop
// for (let i = 1; i <= n; i++) {
// //   Internal loop
//   if(i<=4){
//      for(j=i; j<11; j++)
//      {
//         string +=' '
//       }
//      for (let j = 1; j <= i; j++) {
//        string +=''+count;
//        count++;
//        }
//      }
//    else{
//         for(j=i; j<n; j++)
//         {
//            string +=''
//          }
//         for (let j = 1; j <= i; j++) {
//           string +=count+' ';
//           count++;
//           }
//    }
//   string += "\n";
// }
// console.log(string);
//              1
//            2 3
//          4 5 6
//       7 8 9 10
// 11 12 13 14 15
// _________________________________________________
// 15.
// a = ''
// b = ['A','B','C','D','E']
// for (i = 0; i <= (b.length-1); i++){
//     a = a+ b[i]
//     console.log(a)
// }
// A
// AB
// ABC
// ABCD
// ABCDE

// _________________________________________________
// 16.
// n=3
//  s=''
// for(i=1;i<=n;i++){
//   for (j = 0; j < n - i; j++) {
//     s += ' '
//   }
//   for (j = 0; j < (2 * i - 1); j++){
//    s+=String.fromCharCode(j + 65)
//    }s+='\n'
// }
// console.log(s)
//     A
//    ABC
//   ABCDE
// _________________________________________________
// // 17.
// a = ''
// for (i = 1; i <= 5; i++){
//     a=a+'A '
//     console.log(a)
// }

// A
// A A
// A A A
// A A A A
// A A A A A