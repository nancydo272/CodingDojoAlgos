//Given an array x (e.g. [1,5, 10, -2]), create an algorithm (sets of instructions) that 
//squares each value in the array.  When the program is done x should have values that have been squared 
//(e.g. [1, 25, 100, 4]).  

var x = [1 ,5, 10,-2];
var y = []; 

function squareX(){
    for(var i = 0; i <x.length; i++){
        x[i]= x[i] * x[i];
        console.log(x[i]); 
        y.push(x[i]);
    }
    console.log(y);
    return y; 
}

squareX(); 
