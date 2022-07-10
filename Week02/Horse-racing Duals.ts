/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let N: number = parseInt(readline());
const values: number[] = [];
values.length = N;

for (let i = 0; i < N; i++) {
  const pi = parseInt(readline());
  values[i] = pi;
}
values.sort((a, b) => a - b); // sort
let diff = 10000000;
for (let j = 1; j < N; j++) {
  if ((values[j] - values[j - 1]) < diff) {
    diff = values[j] - values[j - 1]
  }

}
console.log(diff);
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

