// Write a program to check whether given character is vowel or consonant
let checkVowel = (input) => {
  let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  if (vowel.includes(input)) {
    console.log(`"${input}"`, "is a vowel");
  } else {
    console.log(`"${input}"`, "not a vowel");
  }
};

checkVowel("t");
