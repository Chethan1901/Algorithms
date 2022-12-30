// 26) Write a program check whether given character is an alphabet or not
let check = (char) => {
  const str = /^[a-zA-Z]*$/;
  if (str.test(char)) {
    console.log("It is a alphabet ");
  } else console.log("It is not a alphabet");
};
check("a");
