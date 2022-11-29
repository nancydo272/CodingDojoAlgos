//Given an array with multiple values (e.g. [-3, 3, 5, 7]), 
//write a program that prints the maximum number in the array. 

var x = [-3, 10, 5, 7]
var max =x[0]; 

function findMax(){
    for (i=1; i<x.length; i++){
        if(x[i]>max){
            max = x[i];
        }
    }
    console.log(max);
    return max;
}





findMax(); 

//need to think of it as a number iterating through the array one at a time
//comparing each number one at a time. 
//Do not need to set i =0 b/c we already set max =x[0]; 