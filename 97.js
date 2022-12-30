/*

97)Write a program to produce the series as below 
    1 2 3 6 9 18 27 54 ... 

*/

function generateSeries() {
  let series = [1];
  for (let i = 1; series[i - 1] < 100; i++) {
    series.push(series[i - 1] * 3 + series[i - 2]);
  }
  return series;
}

console.log(generateSeries());

