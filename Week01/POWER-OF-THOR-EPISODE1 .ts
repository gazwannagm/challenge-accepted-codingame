/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

 let inputs: string[] = readline().split(' ');
 let lightX: number = parseInt(inputs[0]); // the X position of the light of power
 let lightY: number = parseInt(inputs[1]); // the Y position of the light of power
 let initialTx: number = parseInt(inputs[2]); // Thor's starting X position
 let initialTy: number = parseInt(inputs[3]); // Thor's starting Y position
 // game loop
 while (true) {
     const remainingTurns: number = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
let path='';
     if(lightY<initialTy){
       path='N';
       initialTy--;
   }
   else if (lightY>initialTy){
       path='S';
       initialTy++;
   }

     if(lightX<initialTx){
         path+='W';
         initialTx--;
     }   
     else if (lightX>initialTx){
         path+='E';
         initialTx++;
         
     }
     console.log(path);


 }

