/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 var inputs: string[] = readline().split(' ');
 let W: number = parseInt(inputs[0]); // width of the building.
 let H: number = parseInt(inputs[1]); // height of the building.
 let N: number = parseInt(readline()); // maximum number of turns before game over.
 var inputs: string[] = readline().split(' ');
 let X0: number = parseInt(inputs[0]);
 let Y0: number = parseInt(inputs[1]);
 
 let minH = 0;
 let maxH = H - 1;
 
 let minW = 0;
 let maxW = W - 1;
 
 // game loop
 while (true) {
     const bombDir: string = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
     if(bombDir.includes('D')){
         minH = Y0 + 1;
         Y0 = Math.ceil((minH + maxH) / 2)
     } else if(bombDir.includes('U')){
         maxH = Y0 - 1;
         Y0 = Math.ceil((minH + maxH) / 2)
     }
 
 
     if(bombDir.includes('R')){
         minW = X0 + 1;
         X0 = Math.ceil((minW + maxW) / 2)
     } else if(bombDir.includes('L')){
         maxW = X0 - 1;
         X0 = Math.ceil((minW + maxW) / 2)
     }
     // Write an action using console.log()
     // To debug: console.error('Debug messages...');
 
 
     // the location of the next window Batman should jump to.
     console.log(`${X0} ${Y0}`);
 }
