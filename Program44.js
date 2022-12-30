let convert = (a,b) => {
  let out = a.toString(2);
  console.log(`${a} in binary ${out} `);
  let out2 = parseInt(b, 2);
  console.log(`${b} in decimal ${out2} `);
};

convert(2.1,001)
