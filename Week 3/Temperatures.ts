/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n: number = parseInt(readline()); // the number of temperatures to analyse
var inputs: string[] = readline().split(' ');
let A = parseInt(inputs[0]);
if (n === 0) {
    console.log(n);
}
else {

    for (let i = 0; i < n; i++) {
        const t: number = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526 
        if (Math.abs(A) > Math.abs(t)) {
            A = t;
        }
        else if (Math.abs(A) === Math.abs(t)) {
            if (t > 0) {
                A = t;
            }

        }
    }
    console.log(A);
    // Write an answer using console.log()
    // To debug: console.error('Debug messages...');
}
